const User = require("./../Model/userModel");

exports.allUser = (req, res) => {
    res.status(400).json({
         message: res.message 
        });
};

exports.saveUser = async (req, res) => {
  try {
    const user = await User.create({
      username: req.body.username,
      email: req.body.email,
      password: req.body.password,
    });
    res.status(200).send({ message: "created", user });
  } catch (e) {
    res.status(400).json({ message: e.message });
  }
};

exports.editUser = (req, res) => {
  res.status(200).json({
    message: "user Edited",
  });
};

exports.deleteUser = (req, res) => {
  res.status(200).json({
    message: "user Deleted",
  });
};

exports.findUser = (req, res) => {
    res.status(400).json({
        message: res.message 
       });
};