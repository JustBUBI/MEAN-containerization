const mongoose = require("mongoose");
require("dotenv").config();
const app = require("./app");

process.on("uncaughtException", (err) => {
  console.log("UNCAUGHT REJECTION! Shutting down...");
  console.log(err.name, err.message);
  process.exit(1);
});

// db
mongoose
  .connect(`${process.env.DATABASE_HOST}/${process.env.DATABASE_NAME}`, {
    useNewUrlParser: true,
  })
  .then(() => console.log("DB connected!"));

const port = process.env.PORT || 8000;
const server = app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

process.on("unhandledRejection", (err) => {
  console.log("UNHANDLED REJECTION! Shutting down...");
  console.log(err);
  server.close(() => process.exit(1));
});
