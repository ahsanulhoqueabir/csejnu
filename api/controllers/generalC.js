const User = require("../models/StudentM");
const Voting = require("../models/votingM");
const mongoose = require("mongoose");
const ObjectId = mongoose.Types.ObjectId;
const InitialVoting = async (req, res) => {
  try {
    const voting = new Voting(req.body);
    await voting.save();
    res.status(201).json({ message: "Voting created successfully" });
  } catch (error) {
    console.log(error);
  }
};
const doVote = async (req, res) => {
  try {
    const { email, selected, name } = req.body;
    const student = await User.findOne({
      "personal.email": email,
    });
    if (!student) {
      return res.status(404).json({ message: "Student not found" });
    }
    const election = await Voting.findOne({ name });
    if (!election) {
      return res.status(404).json({ message: "Election not found" });
    }
    await Voting.updateOne(
      { name },
      {
        $addToSet: {
          voters: student._id,
        },
      }
    );

    const allProm = selected.map(async (item) => {
      const cand = election.candidates.find((i) => {
        return i.user.equals(item);
      });
      if (cand && !cand.votes.includes(student._id)) {
        cand.votes.push(student._id);
      }
    });
    await election.save();
    await Promise.all(allProm);
    res.status(200).json({ message: "Vote casted successfully" });
  } catch (err) {
    console.log(err);
  }
};
const getElection = async (req, res) => {
  try {
    const { name, email } = req.query;
    const curr = await Voting.findOne({ name });
    const user = await User.findOne({ "personal.email": email });
    if (curr.voters.includes(user._id)) {
      return res.status(208).json({ message: "You have already voted" });
    }
    const election = await Voting.findOne(
      { name },
      {
        "candidates.user": 1,
      }
    ).populate("candidates.user", {
      "personal.name": 1,
      "personal.gender": 1,
    });
    res.status(200).json(election);
  } catch (err) {
    console.log(err);
  }
};

module.exports = {
  InitialVoting,
  doVote,
  getElection,
};
