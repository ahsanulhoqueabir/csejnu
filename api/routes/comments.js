const express = require("express");
const Comments = require("../controllers/comments");
const router = express.Router();

router.get("/all", Comments.all);
router.post("/add", Comments.add);
router.get("/content", Comments.Content);
module.exports = router;
