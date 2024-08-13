const express = require("express");
const tutorials = require("../controllers/TutorialC");
const { verifyJWT } = require("../middleware/middleware");

const router = express.Router();
router.post("/add", verifyJWT, tutorials.addTutorial);
router.get("/", verifyJWT, tutorials.allTutorial);
router.get("/coursewise", tutorials.courseWise);
router.get("/course", tutorials.courseBased);
module.exports = router;
