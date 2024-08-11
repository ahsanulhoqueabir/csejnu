const Polls = require("../models/poll");

// Create a new poll
const createPoll = async (req, res) => {
  try {
    const poll = new Polls(req.body);
    await poll.save();
    res.status(201).send({
      message: "Poll created successfully",
      poll,
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Get all polls
const getAllPolls = async (req, res) => {
  try {
    const polls = await Polls.find();
    res.status(200).json(polls);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Get a single poll
const getPoll = async (req, res) => {
  try {
    const poll = await Polls.findById(req.params.id);
    res.status(200).send(poll);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Update a poll
const updatePoll = async (req, res) => {
  try {
    const poll = await Polls.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    res.status(200).json(poll);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Delete a poll
const deletePoll = async (req, res) => {
  try {
    const poll = await Polls.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: "Poll deleted" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
const submitPoll = async (req, res) => {
  try {
    const poll = await Polls.findById(req.params.id);
    const { user_mail, student_id, voted } = req.body;
    poll.votes.push({ user_mail, student_id, voted });
    await poll.save();
    res.status(200).send({
      message: "Poll submitted successfully",
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
module.exports = {
  createPoll,
  getAllPolls,
  getPoll,
  updatePoll,
  deletePoll,
};
