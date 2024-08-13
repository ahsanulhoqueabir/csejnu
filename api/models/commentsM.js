const mongoose = require("mongoose");
const CommentModel = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Student",
      required: true,
    },
    comment: {
      type: String,
      required: true,
    },
    likes: {
      type: Number,
      default: 0,
    },
    dislikes: {
      type: Number,
      default: 0,
    },
    thread: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Comments",
    },
    tutorial: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "tutorial",
    },
    contentID: {
      type: mongoose.Schema.Types.ObjectId,
    },
    replies: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Comments",
      },
    ],
  },
  {
    timestamps: true,
  }
);

const model = mongoose.model("Comments", CommentModel);
module.exports = model;
