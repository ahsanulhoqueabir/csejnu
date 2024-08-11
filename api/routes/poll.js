const express = require("express");
const router = express.Router();

const Poll = require("../controllers/poll");

router.post("/create", Poll.createPoll);
router.get("/all", Poll.getAllPolls);
router.get("/find/:id", Poll.getPoll);
router.put("/update/:id", Poll.updatePoll);
router.delete("/delete/:id", Poll.deletePoll);

module.exports = router;
