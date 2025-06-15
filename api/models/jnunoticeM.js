const mongoose = require("mongoose");
const jnuNoticeSchema = new mongoose.Schema(
  {
    title: { type: String },
    date: { type: Date },
    link: { type: String },
    details: { type: String },
  },
  {
    timestamps: true,
  }
);

const jnuNotice = mongoose.model("jnuNotice", jnuNoticeSchema, "jnuNotice");
module.exports = jnuNotice;
