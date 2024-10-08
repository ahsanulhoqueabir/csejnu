const express = require("express");
const Students = require("../controllers/StudentsC.js");
const {
  verifyJWT,
  verifyAdmin,
  verifyUser,
} = require("../middleware/middleware.js");

const router = express.Router();

router.post("/add", Students.createStudent); // add verifyJWT, verifyAdmin,
router.put("/updateStudent", verifyJWT, Students.updateStudent);
router.put("/addNewField", Students.addNewField);
router.put("/result", verifyJWT, Students.addResult);
router.put("/updateField", Students.updateSpecificField);
router.put("/delete", Students.deleteField);
router.put("/modify", Students.modifyData);
router.get("/basicinfo", Students.BasicInfo);
router.get("/allstudents", Students.getSortedData);
router.get("/queryData", Students.queryData); // add verifyJWT
router.get("/result", verifyJWT, verifyUser, Students.getResult);
router.get("/batchwise", Students.batchwise);
router.get("/profile", Students.Profile);
router.get("/user-info", Students.userInfo);
router.delete("/deletebatch", Students.deleteBatch);
module.exports = router;
