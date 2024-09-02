const express = require("express");
const router = express.Router();
const vote = require("../controllers/generalC");

router.post("/add", vote.InitialVoting);
router.put("/do-vote", vote.doVote);
router.get("/get-election", vote.getElection);

module.exports = router;
