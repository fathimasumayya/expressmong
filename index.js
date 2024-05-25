const express = require("express");
const mongoose = require("mongoose");
const app = express();

mongoose.connect("mongodb://localhost:27017/myproject");

app.use(express.json());

const studentSchema = new mongoose.Schema({
  roll_no: Number,
  name: String,
});

const Student = mongoose.model("Student", studentSchema);

app.post("/api/create/", async (req, res) => {
  const newStudent = new Student({
    roll_no: req.body.roll_no,
    name: req.body.name,
  });
  // newStudent
  //   .save()
  //   .then((result) => {
  //     console.log(result);
  //     res.json(result);
  //   })
  //   .catch((err) => {
  //     console.log(err);
  //     res.json({ errorMsg: err });
  //   });

  const stu = await newStudent.save();
  res.json(stu);
});

app.listen(3000, () => console.log("Server is running"));
