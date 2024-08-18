const cors = require("cors");
const express = require("express");
const serverless = require("serverless-http");
const mongoose = require("mongoose");
const port = process.env.port || 5000;
const jwtRoute = require("../routes/jwt.js");
const studentRoute = require("../routes/studentsR.js");
const courseRoute = require("../routes/coursesR.js");
const notesRoute = require("../routes/notesR.js");
const noticeRoute = require("../routes/noticesR.js");
const tutorialRoute = require("../routes/tutorialR.js");
const resultRoute = require("../routes/resultR.js");
const messageRoute = require("../routes/messageR.js");
const routineRoute = require("../routes/routineR.js");
const qbankRouter = require("../routes/qbankR.js");
const adminRoute = require("../routes/adminspecialR.js");
const authRoute = require("../routes/authR.js");
const jnuNoticeRoute = require("../routes/jnunoticeR.js");
const commentRoute = require("../routes/commentsR.js");
const pollRoute = require("../routes/pollR.js");
const DeptRoute = require("../routes/departmentR.js");
const facultyRoute = require("../routes/facultyR.js");
const BatchRoute = require("../routes/batchR.js");

const dotenv = require("dotenv");
const sendNotice = require("../utility/SendMails.js");
dotenv.config();

const app = express();
const corsOptions = { origin: true, Credential: true };

const router = express.Router();

router.get("/", (req, res) => {
  res.send(
    "Welcome to Computer Science & Engineering,Jagannath University Server"
  );
});
// /.netlify/functions/api
app.use("/.netlify/functions/api", router);

const dburi = process.env.DB_URI;
mongoose
  .connect(dburi)
  .then(() => {
    console.log("connected");
  })
  .catch((err) => {
    console.log("Error: ", err);
  });
app.use(express.json());
app.use(cors(corsOptions));
app.use("/.netlify/functions/api/v1", jwtRoute);
app.use("/.netlify/functions/api/v1/students", studentRoute);
app.use("/.netlify/functions/api/v1/courses", courseRoute);
app.use("/.netlify/functions/api/v1/notes", notesRoute);
app.use("/.netlify/functions/api/v1/notice", noticeRoute);
app.use("/.netlify/functions/api/v1/tutorial", tutorialRoute);
app.use("/.netlify/functions/api/v1/result", resultRoute);
app.use("/.netlify/functions/api/v1/messages", messageRoute);
app.use("/.netlify/functions/api/v1/routine", routineRoute);
app.use("/.netlify/functions/api/v1/qbank", qbankRouter);
app.use("/.netlify/functions/api/v1/admin", adminRoute);
app.use("/.netlify/functions/api/v1/auth", authRoute);
app.use("/.netlify/functions/api/v1/jnu", jnuNoticeRoute);
app.use("/.netlify/functions/api/v1/comments", commentRoute);
app.use("/.netlify/functions/api/v1/polls", pollRoute);
app.use("/.netlify/functions/api/v1/departments", DeptRoute);
app.use("/.netlify/functions/api/v1/faculty", facultyRoute);
app.use("/.netlify/functions/api/v1/batch", BatchRoute);

app.post("/.netlify/functions/api/admin/sendNotice", async (req, res) => {
  try {
    const { info, emails } = req.body;
    emails.map((std) => {
      sendNotice({ details: { data: info, emails: std } });
    });
    res.status(200).json({ message: "Notice sent successfully" });
  } catch (err) {
    res.status(500).json({ error: err });
  }
});

module.exports.handler = serverless(app);

//     app.listen(port, () => {
//   connection();
//   console.log(`Server is running at ${port}`);
// });
