const express = require("express");
const router = express.Router();
const Notices = require("../controllers/jnunotice");

router.get("/fetch", Notices.fetchTable);
router.get("/notices", Notices.getAll);

module.exports = router;
