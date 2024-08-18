const mongoose = require("mongoose");

const classRoutinSchema = new mongoose.Schema(
  {
    day: {
      type: String,
    },
    semester: {
      type: String,
    },
    periods: [
      {
        time: {
          type: String,
          required: true,
        },
        room: {
          type: String,
          required: true,
        },
        course: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "courses",
        },
      },
    ],
  },
  {
    timestamps: true,
    _id: false,
  }
);
const examRoutineSchema = new mongoose.Schema(
  {
    subject: { type: String, required: true },
    date: { type: Date, required: true },
    startTime: { type: String, required: true },
    endTime: { type: String, required: true },
  },
  { _id: false }
);
const BatchPeriods = new mongoose.Schema(
  {
    batch: { type: String },
    semester: { type: String },
    periods: [
      {
        start: { type: String },
        end: { type: String },
        room: { type: String },
        course: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "courses",
        },
        span: { type: Number, default: 1 }, // per 30 min count as 1 span
      },
    ],
  },
  {
    timestamps: false,
    _id: false,
  }
);
const allBatchRoutine = new mongoose.Schema(
  [
    {
      day: { type: String },
      batches: {
        type: Map,
        of: BatchPeriods,
      },
    },
  ],
  {
    timestamps: false,
    _id: false,
  }
);
const RoutineSchema = new mongoose.Schema(
  {
    calender: { type: String }, // cse-2024-first
    exam: [examRoutineSchema],
    class: [classRoutinSchema],
    allbatch: [allBatchRoutine],
  },
  {
    timestamps: true,
  }
);
const Routine = mongoose.model("Routine", RoutineSchema);
module.exports = Routine;
