const Students = require("../models/StudentM.js");
const projection = {
  id: 1,
  batch: 1,
  role: 1,
  personal: 1,
  addressInfo: 1,
  education: 1,
  social: 1,
  codingProfile: 1,
};
const createStudent = async (req, res) => {
  const newStudent = new Students(req.body);
  try {
    await newStudent.save();
    res.status(200).json({
      data: newStudent,
      message: "Student created successfully",
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getStudents = async (req, res) => {
  try {
    const students = await Students.find();
    res.status(200).json({ data: students });
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

const BasicInfo = async (req, res) => {
  try {
    const projection = {
      "personal.name": 1,
      "personal.email": 1,
      id: 1,
      role: 1,
    };
    const query = {
      ...req.query,
      batch: "B210305",
    };

    const students = await Students.find(query, projection).sort({
      id: 1,
    });
    res.status(200).json(students);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};
const getSortedData = async (req, res) => {
  try {
    const { id, batch } = req.query;
    let sort_by = req.query.sortby;
    let sort_order = req.query.order || "asc";

    const query = {
      batch: "B210305",
    };
    if (id) {
      query.id = id;
    }
    if (batch) {
      query.batch = batch;
    }
    const options = {};
    if (sort_by === "name") {
      sort_by = "personal.name.fullName";
    }
    options[sort_by] = sort_order === "asc" ? 1 : -1;

    const students = await Students.find(query, projection).sort(options);
    students.map((student) => {
      if (student.education && Array.isArray(student.education)) {
        student.education.sort((a, b) => b.passingYear - a.passingYear);
      }
    });
    res.status(200).json(students);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};
const queryData = async (req, res) => {
  try {
    const { email, id, phone } = req.query;
    const query = {
      batch: "B210305",
    };
    if (email) {
      query["personal.email"] = email;
    }
    if (phone) {
      query["personal.phone"] = phone;
    }
    if (id) {
      query.id = id;
    }

    const student = await Students.findOne(query, {
      createdAt: 0,
      updatedAt: 0,
      __v: 0,
    }).populate({
      path: "results",
      select: "-createdAt -updatedAt -__v -student -studentId",
      populate: {
        path: "results.course",
        select: "",
      },
    });
    if (!student) {
      res.status(404).json({
        message: "Data not found",
      });
      return;
    }
    student.education?.sort((a, b) => b.passingYear - a.passingYear);
    student.results?.sort((a, b) => b.semester - a.semester);

    res.status(200).json({
      message: "Data Found",
      data: student,
    });
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};
const deleteBatch = async (req, res) => {
  try {
    const { batch } = req.query;
    const query = {
      batch,
    };
    const result = await Students.deleteMany(query);
    res.status(200).json({
      message: "Batch deleted",
    });
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};
const Profile = async (req, res) => {
  try {
    const { id } = req.params;
    const student = await Students.findOne(
      {
        id,
      },
      {
        personal: 1,
        addressInfo: 1,
        education: 1,
        social: 1,
        codingProfile: 1,
        batch: 1,
        id: 1,
      }
    );
    if (!student) {
      res.status(404).json({
        message: "Data not found",
      });
      return;
    }
    student.education?.sort((a, b) => b.passingYear - a.passingYear);

    res.status(200).json(student);
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
};
const batchwise = async (req, res) => {
  try {
    // const limit = req.query.limit || 12;
    // const page = req.query.page || 1;
    // const skip = (page - 1) * limit;
    const query = {
      ...req.query,
    };
    if (req.query.limit) {
      delete query.limit;
    }
    if (req.query.page) {
      delete query.page;
    }
    const students = await Students.find(query, {
      id: 1,
      batch: 1,
      "personal.name": 1,
      "personal.email": 1,
      "personal.blood": 1,
      "personal.gender": 1,
      "personal.birthday": 1,
      "personal.religion": 1,
      "personal.phone": 1,
      "personal.about": 1,
      addressInfo: 1,
      education: 1,
      social: 1,
      codingProfile: 1,
    }).sort({
      id: 1,
    });
    // .limit(limit)
    // .skip(skip);
    if (!students) {
      res.status(404).json({
        message: "Data not found",
      });
      return;
    }
    res.status(200).json(students);
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
};
const updateStudent = async (req, res) => {
  try {
    const query = req.query;
    const newData = await req.body;

    const student = await Students.updateOne(
      { "personal.email": query.email },
      {
        $set: newData,
      }
    );
    res.status(200).json({
      message: "Data updated",
    });
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};
const addNewField = async (req, res) => {
  try {
    const newField = req.query.fieldname;
    const value = req.query.value;
    const allStudents = await Students.find();
    allStudents.map(async (student) => {
      student[newField] = value;
      await student.save();
    });

    res.status(200).json({
      message: `${newField} added successfully`,
    });
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};
const updateSpecificField = async (req, res) => {
  try {
    const { id, field, value } = req.query;
    const student = await Students.findByIdAndUpdate(
      id,
      {
        $set: {
          [field]: value,
        },
      },
      {
        new: true,
      }
    );
    res.status(200).json(student);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};
const addResult = async (req, res) => {
  try {
    const query = req.query;
    const result = await req.body;
    const cgpa = result.BSc.info.cgpa;
    const newData = result;
    newData.BSc.info.cgpa = cgpa;
    const student = await Students.updateOne(query, {
      $set: newData,
    });
    res.status(200).json(student);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};
const getResult = async (req, res) => {
  try {
    const query = req.query;
    const student = await Students.find(query, { id: 1, results: 1 }).populate({
      path: "results",
      select: "-createdAt -updatedAt -__v -student -studentId",
      populate: {
        path: "results.course",
      },
    });
    res.status(200).json(student);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};
const deleteField = async (req, res) => {
  try {
    await Students.updateMany(
      {},
      {
        $unset: {
          results: [],
        },
      }
    );

    res.status(200).json({
      message: ` deleted successfully`,
    });
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

const modifyData = async (req, res) => {
  try {
    // const students = await Students.find();

    // const allPromise = students.map(async (student) => {

    //   await student.save();
    // });
    // await Promise.all(allPromise);
    const result = await Students.updateMany(
      {},
      {
        $unset: {
          uniStartYear: "",
          major: "",
        },
      }
    );

    res.status(200).json({
      message: ` modified successfully`,

      // length: cursor.length,
      data: result,
    });
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

module.exports = {
  createStudent,
  getStudents,
  BasicInfo,
  getSortedData,
  queryData,
  updateStudent,
  addNewField,
  addResult,
  getResult,
  updateSpecificField,
  deleteField,
  modifyData,
  batchwise,
  Profile,
  deleteBatch,
};
