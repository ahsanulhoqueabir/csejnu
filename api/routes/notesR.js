const express = require("express");

const Notes = require("../controllers/NotesC.js");
const { verifyJWT } = require("../middleware/middleware.js");
const router = express.Router();

router.post("/add", verifyJWT, Notes.addNotes);
router.get("/", verifyJWT, Notes.getNotes);
router.put("/update", verifyJWT, Notes.updateNotes);
router.delete("/delete", verifyJWT, Notes.deleteNote);
router.get("/mynotes", Notes.myNotes);

module.exports = router;
