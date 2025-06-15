const Student = require("../models/StudentM");
const messages = require("../data/wishes.json");
const BirthdayTemp = require("../utility/birthdaytemp");

const login = async (req, res) => {
  try {
    const user = await Student.findOne(
      {
        "personal.email": req.query.email,
      },
      {
        personal: 1,
        role: 1,
        id: 1,
      }
    );
    if (user) {
      res.status(200).json({
        isExist: true,
        message: "User found",
        data: {
          id: user.id,
          email: user.personal.email,
          photo: user.personal.photo,
          role: user.role,
          name: user.personal.name.fullName,
          nickname: user.personal.name.nickname,
        },
      });
    } else {
      res.status(404).json({
        isExist: false,
        message: "User not found",
      });
    }
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const getRole = async (req, res) => {
  try {
    const user = await Student.findOne(
      {
        "personal.email": req.query.email,
      },
      {
        role: 1,
      }
    );
    if (user) {
      res.status(200).json({
        message: "User found",
        data: {
          role: user.role,
        },
      });
    } else {
      res.status(404).json({ message: "User not found" });
    }
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
const birthdayMail = async (req, res) => {
  try {
    const today = new Date();
    const month = today.getMonth() + 1;
    const date = today.getDate();
    const students = await Student.find({
      $expr: {
        $and: [
          {
            $eq: [{ $month: "$personal.birthday" }, month],
          },
          {
            $eq: [{ $dayOfMonth: "$personal.birthday" }, date],
          },
        ],
      },
    });
    if (!students.length) {
      res.status(404).json({ message: "No students found" });
      return;
    }
    const allPromise = students?.map(async (student) => {
      const ind = Math.floor(Math.random() * 20);
      BirthdayTemp({
        student,
        message: messages[ind],
      });
    });
    await Promise.all(allPromise);
    res.status(200).json({
      message: "Mail Sent",
      today,
    });
  } catch (err) {
    // res.status(500).json({ message: err.message });
    res.status(500).json(err);
  }
};
module.exports = {
  login,
  getRole,
  birthdayMail,
};
