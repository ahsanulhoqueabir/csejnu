const mongoose = require("mongoose");
const votingSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    candidates: [
      {
        user: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "Student",
        },
        votes: [
          {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Student",
          },
        ],
      },
    ],
    voters: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Student",
      },
    ],
  },
  {
    timestamps: true,
  }
);
module.exports = mongoose.model("Voting", votingSchema);
