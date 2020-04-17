const { User, List } = require("../models");

exports.index = async (req, res) => {
  try {
    const users = await User.findAll({
      include: [
        {
          model: List,
          attributes: { exclude: ["createdAt", "updatedAt"] },
        },
      ],
      attributes: { exclude: ["createdAt", "updatedAt", "ListId"] },
    });
    res.status(200).send({ data: users });
  } catch (error) {
    res.status(500).send({ message: "Failed to view users!" })
    console.log(error);
  }
};

exports.showUser = async (req, res) => {
  try {
    const user = await User.findOne({ where: { id: req.user } });
    res.send({ data: user });
  } catch (error) {
    res.status(500).send({ message: "Failed to view a user!" })
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






/*//////////////// UNUSED ////////////////*/
exports.show = async (req, res) => {
  try {
    const user = await User.findOne({ where: { id: req.params.id } });
    res.send({ data: user });
  } catch (error) {
    console.log(error);
  }
};

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