const app = require("./app");
const mongoose = require("mongoose");

const DB_HOST =
  "mongodb+srv://Yurii:C9j9w9pMk6YPMKuo@cluster0.oi1lbcz.mongodb.net/db-contacts?retryWrites=true&w=majority";
mongoose.set("strictQuery", true);

mongoose
  .connect(DB_HOST)
  .then(() => {
    app.listen(3000);
  })
  .catch((error) => {
    console.log(error.message);
    process.exit(1);
  });
