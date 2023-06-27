const contactsRouter = require("./routes/api/contacts");
const express = require("express");
const logger = require("morgan");
const cors = require("cors");

const mongoose = require("mongoose");
const DB_HOST =
  "mongodb+srv://Yurii:C9j9w9pMk6YPMKuo@cluster0.oi1lbcz.mongodb.net/contacts-api?retryWrites=true&w=majority";

const app = express();

const formatsLogger = app.get("env") === "development" ? "dev" : "short";

mongoose
  .connect(DB_HOST)
  .then(() => console.log("Database connect success"))
  .catch((error) => console.log(error.message));

app.use(logger(formatsLogger));
app.use(cors());
app.use(express.json());

app.use("/api/contacts", contactsRouter);

app.use((req, res) => {
  res.status(404).json({ message: "Not found" });
});

app.use((err, req, res, next) => {
  const { status = 500, message = "Server error" } = err;
  res.status(status).json({ message });
});

module.exports = app;

// password mongoDB = C9j9w9pMk6YPMKuo;
