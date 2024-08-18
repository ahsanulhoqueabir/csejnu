const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const BatchSchema = new Schema(
  {
    batchId: {
      type: String,
      required: true,
    },
    name: { type: String },
    students: { type: Schema.Types.ObjectId, ref: "Student" },
    cr: {
      male: {
        type: Schema.Types.ObjectId,
        ref: "Student",
      },
      female: {
        type: Schema.Types.ObjectId,
        ref: "Student",
      },
    },
    banner: { type: String },
    exam_coOrdinator: { type: Schema.Types.ObjectId, ref: "Faculty" },
    batch_coOrdinator: { type: Schema.Types.ObjectId, ref: "Faculty" },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Batch", BatchSchema);
