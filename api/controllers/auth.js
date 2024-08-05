const Student = require("../models/Student");

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
        message: "User found",
        data: {
          id: user.id,
          email: user.personal.email,
          role: user.role,
          name: user.personal.name.fullName,
          nickname: user.personal.name.nickname,
        },
      });
    } else {
      res.status(404).json({ message: "User not found" });
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

module.exports = { login, getRole };
