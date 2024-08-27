const express = require("express");
const auth = require("../controllers/authC");
const Register = require("../controllers/registrationC");

const router = express.Router();
router.get("/login", auth.login);
router.get("/role", auth.getRole);
router.post("/addnew", Register.create);
router.get("/all", Register.all);
router.get("/birthdaymail", auth.birthdayMail);

module.exports = router;
