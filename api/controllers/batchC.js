const Batch = require("../models/batchM");
// const Student = require("../models/studentM");
// const Faculty = require("../models/facultyM");

const create = async (req, res) => {
  const batch = new Batch(req.body);
  try {
    await batch.save();
    res.status(201).json(batch);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

const read = async (req, res) => {
  try {
    const batches = await Batch.find(
      {},
      {
        batchId: 1,
        name: 1,
        students: 1,
        cr: 1,
        banner: 1,
        exam_coOrdinator: 1,
        batch_coOrdinator: 1,
      }
    )
      .populate("students", {
        "personal.name": 1,
        "personal.email": 1,
        "personal.phone": 1,
        "personal.photo": 1,
      })
      .populate("cr.male", {
        "personal.name": 1,
        "personal.email": 1,
        "personal.phone": 1,
        "personal.photo": 1,
      })
      .populate("cr.female", {
        "personal.name": 1,
        "personal.email": 1,
        "personal.phone": 1,
        "personal.photo": 1,
      });

    res.status(200).json(batches);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

const update = async (req, res) => {
  const { id } = req.params;
  const batch = req.body;
  try {
    const updatedBatch = await Batch.findByIdAndUpdate(
      id,
      { $set: batch },
      { new: true }
    );
    res.status(200).json(updatedBatch);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

const remove = async (req, res) => {
  const { id } = req.params;
  try {
    await Batch.findByIdAndRemove(id);
    res.status(200).json({ message: "Batch deleted successfully" });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

const readOne = async (req, res) => {
  const { id } = req.params;
  const { batchId } = req.query;
  try {
    const batch = await Batch.findOne({ batchId })
      .populate("students")
      .populate("cr.male")
      .populate("cr.female");
    if (!batch) {
      return res.status(404).json({ message: "Batch not found" });
    }
    res.status(200).json(batch);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

module.exports = {
  create,
  read,
  update,
  remove,
  readOne,
};
