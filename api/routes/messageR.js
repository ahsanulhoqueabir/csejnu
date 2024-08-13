const message = require("../controllers/messageC.js");
const express = require("express");

const router = express.Router();

router.post("/add", message.createMessage);
router.get("/", message.getMessages);

module.exports = router;
