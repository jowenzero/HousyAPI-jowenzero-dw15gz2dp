const { User } = require("../models");

exports.create = async (req, res) => {
  try {
    const newUser = await User.create(req.body);
    const { username } = newUser;
    const data = {
      username,
    };
    res.status(201).send({ data });
  } catch (error) {
    res.status(500).send({ message: "Failed to create user!" })
    console.log(error);
  }
};

exports.index = async (req, res) => {
  try {
    const users = await User.findAll();
    res.status(200).send({ data: users });
  } catch (error) {
    res.status(500).send({ message: "Failed to search users!" })
    console.log(error);
  }
};

exports.destroy = async (req, res) => {
  try {
    await User.destroy({ where: { id: req.params.id } });
    const { id } = req.params;
    const data = {
      id,
    };
    res.status(200).send({ data });
  } catch (error) {
    res.status(500).send({ message: "Failed to delete user!" })
    console.log(error);
  }
};