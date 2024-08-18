const express = require("express");
const router = express.Router();
const Batch = require("../controllers/batchC");

router.post("/create", Batch.create);
router.get("/all", Batch.read);
router.put("/update/:id", Batch.update);
router.delete("/delete/:id", Batch.remove);
router.get("/find", Batch.readOne);

module.exports = router;
