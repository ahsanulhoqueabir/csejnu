const express = require("express");
const router = express.Router();
const Faculty = require("../controllers/facultyC");

router.post("/create", Faculty.Create);
router.post("/createMany", Faculty.CreateMany);
router.get("/all", Faculty.Read);
router.get("/find", Faculty.ReadOne);
router.put("/update", Faculty.Update);
router.delete("/delete", Faculty.Delete);

module.exports = router;
