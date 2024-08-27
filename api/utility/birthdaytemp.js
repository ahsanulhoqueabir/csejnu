const nodemailer = require("nodemailer");

const BirthdayTemp = ({ student, message }) => {
  const { personal } = student;
  const { email, name } = personal;
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
    <title>Happy Birthday</title>
  </head>
  <body>
    <main style="padding: 0 5px">
      <div
        style=" margin-bottom: 5px"
      >
        <p>
        Happy Birthday!
        <span style="color: green"> ${name.fullName}
        </span>
        </p>
      </div>
      <p style="margin-top: 0px; text-align: justify">
       ${message}
      </p>
      <div style="padding-top: 15px">
        <p style="margin-bottom: 2px; font-size: small">Best Regards,</p>
        <small>CSE JnU Family</small>
      </div>
    </main>
  </body>
</html>
`;
  const options = {
    from: "cr.csejnu@gmail.com",
    to: email,
    subject: `Happy Birthday ${name.fullName}`,
    html: htmlBodyGeneral,
  };
  transporter.sendMail(options, (err, info) => {
    if (err) {
      // console.log(err);
    } else {
      // console.log(info);
    }
  });
};

module.exports = BirthdayTemp;
