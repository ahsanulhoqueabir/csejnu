const express = require("express");
const Notice = require("../controllers/NoticeC.js");
const { verifyJWT, verifyAdmin } = require("../middleware/middleware.js");

const router = express.Router();
router.get("/", Notice.getNotices);
router.post("/add", verifyJWT, verifyAdmin, Notice.addNotice);
router.get("/upcoming", Notice.upcomingNotice);
router.put("/update", Notice.updateNotice);
router.delete("/delete", verifyJWT, verifyAdmin, Notice.deleteNotice);

module.exports = router;
