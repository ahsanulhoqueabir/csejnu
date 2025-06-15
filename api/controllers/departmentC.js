const Department = require("../models/departmentM");

const Create = async (req, res) => {
  try {
    const department = new Department(req.body);
    await department.save();
    res.status(201).send({
      message: "Department Initialized",
    });
  } catch (error) {
    res.status(500).send({
      message: error.message,
    });
  }
};

const Read = async (req, res) => {
  try {
    const department = await Department.find();
    res.status(200).send(department);
  } catch (error) {
    res.status(500).send({
      message: error.message,
    });
  }
};

const ReadOne = async (req, res) => {
  try {
    const { dept, code } = req.query;
    const query = {};
    if (code) {
      query.dept_id = code;
    }
    if (dept) {
      query.accronym = dept.toLowerCase();
    }
    const department = await Department.findOne(query, {
      createdAt: 0,
      updatedAt: 0,
      __v: 0,
    })
      .populate("students", {
        _id: 1,
        "personal.name": 1,
        "personal.photo": 1,
        "personal.email": 1,
        batch: 1,
        id: 1,
        social: 1,
        role: 1,
      })
      .populate("chairman");
    if (!department) {
      res.send({
        message: "Department not found",
      });
    }
    res.status(200).send({
      message: "Department Found",
      department,
    });
  } catch (error) {
    res.status(500).send({
      message: error.message,
    });
  }
};

const Update = async (req, res) => {
  try {
    const { field, id } = req.query;
    if (field === "student") {
      await Department.findByIdAndUpdate(id, {
        $push: {
          students: req.body,
        },
      });
    } else if (field === "faculty") {
      await Department.findByIdAndUpdate(id, {
        $push: {
          faculty: req.body,
        },
      });
    }
    // await Department.save();
    res.status(200).send({
      message: "Department Updated",
    });
  } catch (error) {
    res.status(500).send({
      message: error.message,
    });
  }
};

const Delete = async (req, res) => {
  try {
    await Department.findByIdAndDelete(req.params.id);
    res.status(200).send({
      message: "Department Deleted",
    });
  } catch (error) {
    res.status(500).send({
      message: error.message,
    });
  }
};

module.exports = {
  Create,
  Read,
  ReadOne,
  Update,
  Delete,
};
