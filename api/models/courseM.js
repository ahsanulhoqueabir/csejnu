const mongoose = require("mongoose");

const CourseTeacher = new mongoose.Schema(
  {
    batch: { type: String }, // B210305
    teacher: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Faculty",
    },
  },
  {
    timestamps: false,
    _id: false,
  }
);
const courseHistorySchema = new mongoose.Schema({
  CourseCode: { type: String, required: true },
  CourseTitle: { type: String, required: true },
  CourseType: { type: String, required: true },
  Marks: { type: Number, required: true },
  Credit: { type: Number, required: true },
  code: { type: String, required: true },
  semester: { type: String, required: true },
  courseTeacher: { type: String, required: false },
  instructor: {
    type: Map,
    of: CourseTeacher,
  },
  course: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "notes",
  },
});

const courses = mongoose.model("courses", courseHistorySchema, "courses");
module.exports = courses;
