const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
require("dotenv").config();
const mongoSanitize = require("express-mongo-sanitize");

const AppError = require("./utils/appError");
const globalErrorHandler = require("./controllers/errorController");

// TODO
// routes
const taskRouter = require("./routes/taskRoutes");

// app
const app = express();

// Development logging
if (process.env.NODE_ENV === "development") app.use(morgan("dev"));

// body parser
app.use(express.json({ limit: "10kb" }));

// Data sanitization against NoSQL query injection
app.use(mongoSanitize());

app.use(
  express.urlencoded({
    extended: true,
  })
);
// cors
if (process.env.NODE_ENV === "development")
  app.use(cors({ origin: `${process.env.CLIENT_URL}` }));

// TODO
// routes middleware
app.use("/api/tasks", taskRouter);

app.all("*", (req, res, next) => {
  next(new AppError(`Can't find ${req.originalUrl} on this server!`, 404));
});

app.use(globalErrorHandler);

module.exports = app;
