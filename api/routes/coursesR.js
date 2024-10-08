const express = require("express");
const Course = require("../controllers/courseC");

const router = express.Router();
router.post("/add", Course.addNew);
router.get("/", Course.getCourses);
router.get("/all", Course.semesterwise);
router.put("/update/:id", Course.updateCourse);

module.exports = router;
