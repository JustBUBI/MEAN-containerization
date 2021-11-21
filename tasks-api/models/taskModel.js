const mongoose = require("mongoose");

const taskSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, "The title is required!"],
    trim: true,
    minlength: [3, "The title is too short!"],
    maxlength: [120, "The title is too long!"],
  },
  color: {
    type: String,
    required: [true, "The tag color is required!"],
    trim: true,
  },
  isFinished: Boolean,
});

taskSchema.pre("save", function (next) {
  this.isFinished = false;
  next();
});

module.exports = mongoose.model("Task", taskSchema);
