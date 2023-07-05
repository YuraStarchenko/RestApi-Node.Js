const mongoose = require("mongoose");
const app = require("./app");

const dotenv = require("dotenv");
dotenv.config({ path: ".env.example" });

const { DB_HOST, PORT = 3000 } = process.env;

mongoose
  .connect(DB_HOST)
  .then(() => {
    app.listen(PORT, () => {
      console.log("Database connection successful");
    });
  })
  .catch((error) => {
    console.log(error);
    process.exit(1);
  });
