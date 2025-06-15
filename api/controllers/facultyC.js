const Faculty = require("../models/facultyM");
const Department = require("../models/departmentM");
const Create = async (req, res) => {
  try {
    const faculty = new Faculty(req.body);
    await faculty.save();
    res.status(201).send({
      message: "Faculty Initialized",
    });
  } catch (error) {
    res.status(500).send({
      message: error.message,
    });
  }
};

const CreateMany = async (req, res) => {
  try {
    const allPromise = req.body?.map(async (item) => {
      const faculty = new Faculty(item);
      const dept = await Department.findOne({
        dept_id: item.dept_id,
      });
      faculty.department = dept._id;
      await Department.findByIdAndUpdate(dept._id, {
        $push: { faculty: faculty._id },
      });
      await faculty.save();
    });
    await Promise.all(allPromise);
    res.status(201).send({
      message: "Faculty Initialized",
    });
  } catch (error) {
    res.status(500).send({
      message: error.message,
    });
  }
};

const Read = async (req, res) => {
  try {
    const query = req.query;
    const faculty = await Faculty.find(query, {
      personal: 1,
      teacher_id: 1,
      department: 1,
      position: 1,
      dept_id: 1,
    }).populate({
      path: "department",
      select: "name accronym chairman dept_id -_id",
      populate: {
        path: "chairman",
        select: "personal.name personal.emai -_id",
      },
    });
    if (!faculty) {
      res.send({
        message: "Faculty not found",
      });
    }
    res.status(200).send({
      message: "Faculty Found",
      faculty,
    });
  } catch (error) {
    res.status(500).send({
      message: error.message,
    });
  }
};

const ReadOne = async (req, res) => {
  try {
    const { teacher_id, id, email, _id, name } = req.query;
    const query = {};
    if (teacher_id) {
      query.teacher_id = teacher_id;
    }
    if (id) {
      query._id = id;
    }
    if (email) {
      query["personal.email"] = email;
    }
    if (_id) {
      query._id = _id;
    }
    if (name) {
      const ext = name.split("-").join(" ");
      query["personal.name.fullName"] = ext;
    }
    const faculty = await Faculty.findOne(query, {
      personal: 1,
      addressInfo: 1,
      teacher_id: 1,
      department: 1,
      position: 1,
    }).populate("department", {
      dept_id: 1,
      name: 1,
      accronym: 1,
      chairman: 1,
      description: 1,
    });
    if (!faculty) {
      res.status(404).send({
        message: "Faculty not found",
      });
    }
    res.status(200).send(faculty);
  } catch (error) {
    res.status(500).send({
      message: error.message,
    });
  }
};

const Update = async (req, res) => {
  try {
    const { teacher_id } = req.query;
    const faculty = await Faculty.findOneAndUpdate(
      { teacher_id },
      { $set: req }
    );
    if (!faculty) {
      res.send({
        message: "Faculty not found",
      });
    }
    res.status(200).send({
      message: "Faculty Updated",
    });
  } catch (error) {
    res.status(500).send({
      message: error.message,
    });
  }
};

const Delete = async (req, res) => {
  try {
    const { teacher_id } = req.query;
    const faculty = await Faculty.findOneAndDelete({ teacher_id });
    if (!faculty) {
      res.send({
        message: "Faculty not found",
      });
    }
    res.status(200).send({
      message: "Faculty Deleted",
    });
  } catch (error) {
    res.status(500).send({
      message: error.message,
    });
  }
};

module.exports = {
  Create,
  CreateMany,
  Read,
  ReadOne,
  Update,
  Delete,
};
