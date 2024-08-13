const Students = require("../models/StudentM.js");
const nodemailer = require("nodemailer");

const manageuser = async (req, res) => {
  try {
    const data = req.body;
    const students = await Students.findByIdAndUpdate(req.query.id, {
      $set: data,
    });
    res.status(200).json({ data: students });
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

const sendEmail = async (req, res) => {
  try {
    const { info, students } = req.body;
    const { title, description } = info;
    students.map((student) => {
      const transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 587,
        secure: false,
        auth: {
          user: "cr.csejnu@gmail.com",
          pass: "yphtxlesuahbikcg",
        },
        tls: {
          rejectUnauthorized: false,
        },
      });
      let htmlBodyGeneral = `
          <!DOCTYPE html>
          <html lang="en">
            <head>
              <meta charset="UTF-8" />
              <meta name="viewport" content="width=device-width, initial-scale=1.0" />
              <title>Email</title>
            </head>
            <body>
              <header>
                <img
                  src="https://i.ibb.co/NCgZVJJ/Untitled-design-1.png"
                  style="width: 100%; height: 100%; padding: 0px 0px"
                  alt="Banner"
                />
              </header>
              <main style="padding: 0 10px">
                <div style="display: flex; align-items: center; gap: 5px">
                  Hello,
                  <h2>
                  ${student.personal.fullName}
                  </h2>
                </div>
                <p>
                 ${description}
                </p>
              </main>
            </body>
          </html>
      `;
      const options = {
        from: "cr.csejnu@gmail.com",
        to: student.personal.email,
        subject: `${title}`,
        html: htmlBodyGeneral,
      };
      transporter.sendMail(options, (err, info) => {
        if (err) {
          console.log(err);
        } else {
          console.log(info);
        }
      });
    });
    res.send({
      message: "hi",
    });
  } catch (err) {
    res.status(500).send({
      message: err.message,
    });
  }
};

module.exports = {
  manageuser,
  sendEmail,
};
