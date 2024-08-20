const Routine = require("../models/routineM.js");

const addClassRoutine = async (req, res) => {
  try {
    let routine = await Routine.findOne();
    if (!routine) {
      routine = new Routine();
    }
    routine.class.push(req.body);
    await routine.save();

    res.status(201).json(routine);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
const add = async (req, res) => {
  try {
    const routine = new Routine(req.body);
    await routine.save();
    res.status(201).json(routine);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};
const getRoutine = async (req, res) => {
  try {
    const routines = await Routine.find().populate("class.periods.course");
    res.status(200).json(routines);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};
const Query = async (req, res) => {
  try {
    const routine = await Routine.findOne(req.query, {
      calender: 1,
      allbatch: 1,
    });
    if (!routine) {
      return res.status(404).json({
        message: "Routine not found",
      });
    }
    const populatePaths = [];
    routine.allbatch.forEach((batchRoutine) => {
      batchRoutine.batches.forEach((_, batchName) => {
        populatePaths.push({
          path: `allbatch.batches.${batchName}.periods.course`,
          model: "courses",
          select: "CourseCode CourseTitle semester instructor",
        });
      });
    });
    const data = await routine.populate(populatePaths);

    const instructorPath = [];
    routine.allbatch.forEach((batchRoutine) => {
      batchRoutine.batches.forEach((_, batchName) => {
        const cse_batches = [
          "B230305",
          "B220305",
          "B210305",
          "B200305",
          "B190305",
          "B180305",
        ];
        cse_batches.map((batch) => {
          instructorPath.push({
            path: `allbatch.batches.${batchName}.periods.course.instructor.${batch}.teacher`,
            model: "Faculty",
            select:
              "personal.name personal.email personal.phone personal.photo dept_id teacher_id position",
          });
        });
      });
    });
    await data.populate(instructorPath);
    res.status(200).json(data);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};
module.exports = {
  addClassRoutine,
  getRoutine,
  add,
  Query,
};
