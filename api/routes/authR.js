const express = require("express");
const auth = require("../controllers/authC");

const router = express.Router();
router.get("/login", auth.login);
router.get("/role", auth.getRole);

module.exports = router;
