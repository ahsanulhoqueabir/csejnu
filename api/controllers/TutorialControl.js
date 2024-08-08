const tutorials = require("../models/Tutorial.js");
const courses = require("../models/courseHistory.js");

const projection = {
  __v: 0,
  createdAt: 0,
  updatedAt: 0,
};

const addTutorial = async (req, res) => {
  try {
    const newtutorial = new tutorials(req.body);
    const courseID = await courses.find({ code: newtutorial.code });

    const modified = new tutorials({
      ...req.body,
      course: courseID[0]._id,
    });
    await modified.save();
    res.status(201).json({
      message: "Tutorial added successfully",
      data: modified,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
const allTutorial = async (req, res) => {
  try {
    const query = req.query;
    const tutorial = await tutorials
      .find(
        query,
        {
          __v: 0,
          createdAt: 0,
          updatedAt: 0,
          courseName: 0,
        },
        {}
      )
      .populate("course", {
        _id: 0,
        __v: 0,
        createdAt: 0,
        updatedAt: 0,
        Marks: 0,
        Credit: 0,
        code: 0,
      });

    res.status(200).json({
      message: "Tutorial fetched successfully",
      count: tutorial.length,
      data: tutorial,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({
      message: err.message,
    });
  }
};
const courseWise = async (req, res) => {
  try {
    const Courses = await tutorials.aggregate([
      {
        $group: {
          _id: "$course",
          course: {
            $first: "$course",
          },
          data: {
            $push: {
              _id: "$_id",
              topic: "$topic",
              classURL: "$classURL",
              date: "$date",
            },
          },
        },
      },
    ]);
    const data = [];
    const update = Courses.map(async (course) => {
      const curr = await courses.findById(course.course);
      const p = {
        ...course,
        course: curr,
      };
      data.push(p);
    });
    await Promise.all(update);
    res.status(200).json({
      message: "Courses fetched successfully",
      data: data,
    });
  } catch (err) {
    res.status(500).json({
      message: err.message,
    });
  }
};
const courseBased = async (req, res) => {
  try {
    let response = "";
    // const query = "Introduction-to-Statistic-and-Probability";
    const pre = req.query.name.replace(/--+/g, "-").replace(/-([^-])/g, " $1");
    const courseID = await courses.findOne({ CourseTitle: pre });
    const classes = await tutorials.find(
      {
        course: courseID._id,
      },
      {
        topic: 1,
        classURL: 1,
        date: 1,
      }
    );
    res.status(201).send({
      course: courseID,
      classes: classes,
    });
  } catch (err) {
    res.status(500).json({
      message: err.message,
    });
  }
};

module.exports = {
  addTutorial,
  allTutorial,
  courseWise,
  courseBased,
};
