const courses = require("../models/courseM.js");

const addNew = async (req, res) => {
  const newCourse = new courses(req.body);
  try {
    await newCourse.save();
    res.status(200).json({
      data: newCourse,
      message: "Course created successfully",
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getCourses = async (req, res) => {
  try {
    const query = req.query;
    const allCourses = await courses.find(query);
    res.status(200).json({
      totalcourse: allCourses.length,
      data: allCourses,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
const semesterwise = async (req, res) => {
  try {
    const Courses = await courses.aggregate([
      {
        $group: {
          _id: "$semester",

          data: {
            $push: {
              CourseCode: "$CourseCode",
              CourseTitle: "$CourseTitle",
              CourseType: "$CourseType",
              Marks: "$Marks",
              Credit: "$Credit",
              courseTeacher: "$courseTeacher",
            },
          },
        },
      },
    ]);
    res.send(Courses);
  } catch (err) {
    res.status(500).send({
      message: err.message,
    });
  }
};
const updateCourse = async (req, res) => {
  try {
    const updatedCourse = await courses.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    res.status(200).json({
      data: updatedCourse,
      message: "Course updated successfully",
    });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

module.exports = {
  addNew,
  getCourses,
  updateCourse,
  semesterwise,
};
