const Task = require("../models/taskModel");
const catchAsync = require("../utils/catchAsync");
const AppError = require("../utils/appError");

exports.getAllTasks = catchAsync(async (req, res, next) => {
  const tasks = await Task.find();
  res.status(200).json({ tasks });
});

exports.createTask = catchAsync(async (req, res, next) => {
  const task = await Task.create(req.body);
  res.status(201).json({ task });
});

exports.updateTask = catchAsync(async (req, res, next) => {
  const task = await Task.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
  });

  if (!task) {
    return next(new AppError("Task does not exist!", 404));
  }

  res.status(200).json({ task });
});
