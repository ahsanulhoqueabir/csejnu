const Register = require("../models/registrationM");

const create = async (req, res) => {
  try {
    const register = new Register(req.body);
    await register.save();
    res.status(201).json({ register });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const all = async (req, res) => {
  try {
    const register = await Register.find();
    res.status(200).json(register);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
module.exports = {
  create,
  all,
};
