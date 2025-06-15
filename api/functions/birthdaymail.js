const axios = require("axios");
const dotenv = require("dotenv");
dotenv.config();

exports.handler = async (event, context, callback) => {
  const fetchall = `${process.env.BACKEND_BASE_URL}/auth/birthdaymail`;
  // res.status(200).send("Operation started");
  callback(null, {
    statusCode: 200,
    body: JSON.stringify({ message: "Operation started" }),
  });
  
  try {
    console.log("Sending Mail");
    axios
      .get(fetchall)
      .then((res) => {
        // console.log("fetchall", res.data);
      })
      .catch((err) => {
        console.error("Error in fetchall:", err);
      });
  } catch (error) {
    console.error("Error in scheduled fetch:", error);
    return {
      statusCode: 500,
      body: "Error in scheduled fetch",
    };
  }
};
