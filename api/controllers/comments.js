const Comments = require("../models/comments");
const Tutorial = require("../models/Tutorial");
const Students = require("../models/Student");

const add = async (req, res) => {
  try {
    const { user, comment: Comment, thread, tutorial } = req.body;
    const student = await Students.findOne({
      "personal.email": user,
    });
    const new_comment = {
      user: student._id,
      comment: Comment,
      thread,
    };
    if (tutorial) {
      new_comment.tutorial = tutorial;
      new_comment.contentID = tutorial;
    }
    const comment = new Comments(new_comment);
    await comment.save();
    if (thread) {
      const rep = await Comments.findByIdAndUpdate(thread, {
        $push: {
          replies: comment._id,
        },
      });
    }
    const response = await Comments.findById(comment._id)
      .populate("user", {
        "personal.name": 1,
        "personal.photo": 1,
      })
      .populate("tutorial");
    res.send({
      message: "Added",
      comment: response,
    });
  } catch (err) {
    res.send({
      message: err.message,
    });
  }
};
const all = async (req, res) => {
  try {
    const comments = await Comments.find({})
      .populate("user", {
        "personal.name": 1,
        "personal.photo": 1,
      })
      .populate("replies")
      .populate("tutorial")
      .sort({
        createdAt: 1,
      });
    res.send(comments);
  } catch (err) {
    res.send({
      message: err.message,
    });
  }
};
const Content = async (req, res) => {
  try {
    const { id } = req.query;
    const comments = await Comments.find(
      {
        contentID: id,
      },
      {
        user: 1,
        comment: 1,
        replies: 1,
        likes: 1,
        dislikes: 1,
      }
    )
      .populate("user", {
        "personal.name": 1,
        "personal.photo": 1,
        _id: 0,
      })
      .populate({
        path: "replies",
        select: "likes dislikes user comment",
        populate: {
          path: "user",
          select: "personal.name personal.photo -_id",
        },
      })
      .sort({
        createdAt: -1,
      });
    const video = await Tutorial.findById(id, {
      topic: 1,
      date: 1,
      course: 1,
      classURL: 1,
    }).populate("course", {
      CourseCode: 1,
      CourseTitle: 1,
      courseTeacher: 1,
    });
    res.send({
      content: video,
      comments,
    });
  } catch (err) {
    res.send({
      message: err.message,
    });
  }
};

module.exports = {
  add,
  all,
  Content,
};

/*

user,
comment,
thread








*/
