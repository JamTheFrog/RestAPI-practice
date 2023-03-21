const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");
require("./user");
const userRoutes = require("./router/user.routes");
mongoose.connect("mongodb://127.0.0.1:27017/subscribers");
app.use(cors());
app.use(express.json());
app.use(userRoutes);
const port = 4000;
app.listen(port, () => {
  console.log(`Server is listening at port ${port}`);
});
