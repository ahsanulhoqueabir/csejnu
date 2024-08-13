const notes = require("../models/NotesM.js");
const courses = require("../models/courseM.js");
const Students = require("../models/StudentM.js");

const projection = {
  __v: 0,
  createdAt: 0,
  updatedAt: 0,
};

const addNotes = async (req, res) => {
  try {
    const note = new notes(req.body);
    const courseID = await courses.findOne({ code: note.code });
    const user = await Students.findOne({
      "personal.email": req.query.email,
    });

    const modified = new notes({
      ...req.body,
      course: courseID._id,
      author: user.personal.name.fullName,
      id: user.id,
    });
    await modified.save();
    res.status(201).json({
      message: "Note added successfully",
      data: modified,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getNotes = async (req, res) => {
  try {
    const query = req.query;
    const note = await notes
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
      message: "Notes fetched successfully",
      count: note.length,
      data: note,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
const myNotes = async (req, res) => {
  try {
    const user = await Students.findOne({ "personal.email": req.query.email });
    console.log(req.query);
    const Notes = await notes
      .find(
        {
          id: user.id,
        },
        {
          author: 1,
          id: 1,
          title: 1,
          topic: 1,
          link: 1,
          course: 1,
        }
      )
      .populate("course", {
        courseTeacher: 1,
        CourseTitle: 1,
      });
    res.status(200).json(Notes);
  } catch (err) {
    res.status(500).json({
      message: err.message,
    });
  }
};
const updateNotes = async (req, res) => {
  try {
    const { email, id } = req.query;
    const update = req.body;
    const user = await Students.findOne({
      "personal.email": email,
    });
    const note = await notes.findByIdAndUpdate(id, update, {
      new: true,
    });
    if (!note) throw Error("Note not found");
    res.status(200).json({
      message: "Note Updated Successfully",
      data: note,
    });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
const deleteNote = async (req, res) => {
  try {
    const query = req.query;
    const note = await notes.findByIdAndDelete(query.id);
    if (!note) throw Error("Note not found");
    res.status(200).json({
      message: "Note Deleted Successfully",
      data: note,
    });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

module.exports = {
  getNotes,
  addNotes,
  updateNotes,
  deleteNote,
  myNotes,
};
