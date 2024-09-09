const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const examCalMSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    date: {
      type: Date,
      required: true,
    },
    time: {
      type: String,
    },
    course: {
      type: Schema.Types.ObjectId,
      ref: "courses",
    },
    batch: {
      type: String,
      required: true,
      default: "B210305",
    },
  },
  {
    timestamps: true,
  }
);

const ExamCalM = mongoose.model("ExamCalender", examCalMSchema);
module.exports = ExamCalM;
