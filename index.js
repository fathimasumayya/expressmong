const express = require("express");
const mongoose = require("mongoose");
const app = express();
mongoose.Connection();

mongoose.connect("mongodb://localhost:27017/avodhaEjs");

const userSchema = mongoose.Schema({
  name: String,
});

const User = mongoose.model("User", userSchema);

app.listen(3000, () => console.log("Server is running"));
