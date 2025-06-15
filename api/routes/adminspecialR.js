const express = require("express");
const route = require("../controllers/adminspecialC.js");
const { verifyJWT, verifyAdmin } = require("../middleware/middleware.js");
const router = express.Router();
router.put("/manageuser", verifyJWT, verifyAdmin, route.manageuser);
router.post("/sendmail", verifyJWT, verifyAdmin, route.sendEmail);
module.exports = router;
