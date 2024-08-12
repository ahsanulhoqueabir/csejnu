const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const departmentSchema = new Schema(
  {
    dept_id: {
      type: String, // D0305 for CSE
    },
    name: {
      type: String,
    },
    chairman: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Faculty",
    },
    accronym: { type: String },
    description: {
      type: String,
    },
    faculty: [
      {
        type: Schema.Types.ObjectId,
        ref: "Faculty",
      },
    ],
    students: [
      {
        type: Schema.Types.ObjectId,
        ref: "Student",
      },
    ],
    courses: [
      {
        type: Schema.Types.ObjectId,
        ref: "Course",
      },
    ],
    photos: [
      {
        title: { type: String },
        url: { type: String },
      },
    ],
  },
  { timestamps: true }
);

module.exports = mongoose.model("Department", departmentSchema);
