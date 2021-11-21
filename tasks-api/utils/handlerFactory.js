const catchAsync = require("./catchAsync");
const AppError = require("./appError");
const APIFeatures = require("./apiFeatures");

const getCollectionName = (Model) => {
  let {
    collection: { collectionName },
  } = Model;

  // Convert to singular
  collectionName = collectionName.slice(0, -1);
  return collectionName;
};

exports.getAll = (Model, populateOptions, givenQuery) =>
  catchAsync(async (req, res, next) => {
    let query = Model.find();
    if (givenQuery) query = givenQuery;
    if (populateOptions) query = query.populate(populateOptions);
    const features = new APIFeatures(query, req.query)
      .filter()
      .sort()
      .limitFields()
      .paginate();
    const docs = await features.query;

    const collectionName = `${getCollectionName(Model)}s`;

    res.status(200).json({
      status: "success",
      results: docs.length,
      data: {
        [collectionName]: docs,
      },
    });
  });

exports.getOne = (Model, populateOptions) =>
  catchAsync(async (req, res, next) => {
    let query = Model.findById(req.params.id);
    if (populateOptions) query = query.populate(populateOptions);
    const doc = await query;

    if (!doc) {
      return next(new AppError("No document found with that ID!", 404));
    }

    const collectionName = getCollectionName(Model);

    res.status(200).json({
      status: "success",
      data: {
        [collectionName]: doc,
      },
    });
  });

exports.createOne = (Model) =>
  catchAsync(async (req, res, next) => {
    const newDoc = await Model.create(req.body);

    const collectionName = getCollectionName(Model);

    res.status(201).json({
      status: "success",
      data: {
        [collectionName]: newDoc,
      },
    });
  });

exports.updateOne = (Model) =>
  catchAsync(async (req, res, next) => {
    const updatedDoc = await Model.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });

    if (!updatedDoc) {
      return next(new AppError("No document found with that ID!", 404));
    }

    const collectionName = getCollectionName(Model);

    res.status(200).json({
      status: "success",
      data: {
        [collectionName]: updatedDoc,
      },
    });
  });

exports.deleteOne = (Model) =>
  catchAsync(async (req, res, next) => {
    const doc = await Model.findByIdAndDelete(req.params.id);

    if (!doc) {
      return next(new AppError("No document found with that ID!", 404));
    }

    res.status(204).json({
      status: "success",
      data: null,
    });
  });
