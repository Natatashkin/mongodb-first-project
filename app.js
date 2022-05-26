const mongoose = require("mongoose");
const dotenv = require("dovenv");

dotenv.config();

const { DB_HOST } = process.env;

mongoose
  .connect(DB_HOST)
  .then(() => console.log("DB connect"))
  .catch((error) => {
    console.log(error.message);
    process.exit(1);
  });
