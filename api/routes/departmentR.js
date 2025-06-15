const express = require("express");
const router = express.Router();
const Department = require("../controllers/departmentC");

router.post("/create", Department.Create);
router.get("/all", Department.Read);
router.get("/find", Department.ReadOne);
router.put("/update", Department.Update);
router.delete("/delete/:id", Department.Delete);

module.exports = router;
