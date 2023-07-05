const app = require("./app");
const mongoose = require("mongoose");

const dotenv = require("dotenv");
dotenv.config({ path: ".env.example" });

const { DB_HOST, PORT = 3000 } = process.env;

mongoose
  .connect(DB_HOST)
  .then(() => {
		app.listen(POR T() => {
			console.log();
		});
  })
  .catch((error) => {
    console.log(error.message);
    process.exit(1);
  });
