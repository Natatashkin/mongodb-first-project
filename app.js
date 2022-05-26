//natatashkin, 69MjDN8iWkw1NdBJ

const mongoose = require("mongoose");

const DB_HOST =
  "mongodb+srv://natatashkin:69MjDN8iWkw1NdBJ@cluster0.iy8sf.mongodb.net/shop?retryWrites=true&w=majority";

mongoose
  .connect(DB_HOST)
  .then(() => console.log("DB connect"))
  .catch((error) => console.log(error.message));
