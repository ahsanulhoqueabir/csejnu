const express = require("express");
const routine = require("../controllers/routineC.js");

const router = express.Router();

router.post("/add", routine.add);
router.post("/addClassRoutine", routine.addClassRoutine);
router.get("/all", routine.getRoutine);
router.get("/find", routine.Query);
router.post("/add-exam-to-calender", routine.addExamCal);
router.get("/get-exam-calender", routine.getExamCal);

module.exports = router;
