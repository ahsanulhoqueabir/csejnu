const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const pollSchema = new Schema(
  {
    questions: [
      {
        question: {
          type: String,
          // required: true,
        },
        options: {
          type: [String],
          // required: true,
        },
        correct_answer: {
          type: String,
          // required: true,
        },
        isRequired: {
          type: Boolean,
          // required: true,
          default: false,
        },
      },
    ],
    votes: [
      {
        user_mail: {
          type: String,
          // required: true,
        },
        student_id: {
          type: String,
        },
        voted: [
          {
            question_id: {
              type: Schema.Types.ObjectId,
            },
            answer_ind: {
              type: Number,
              // required: true,
            },
            choiced: {
              type: String,
            },
          },
        ],
      },
    ],
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Poll", pollSchema);
