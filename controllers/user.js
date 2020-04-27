const { user, list } = require("../models");

const userParam = {
  include: [
    {
      model: List,
      attributes: ["id", "name"],
    },
  ],
  attributes: { exclude: ["createdAt", "updatedAt", "ListId"] },
};

exports.index = async (req, res) => {
  try {
    const users = await user.findAll({
      ...userParam,
    });
    res.status(200).send({ data: users });
  } catch (error) {
    res.status(500).send({ message: "Failed to view users!" })
    console.log(error);
  }
};

exports.showUser = async (req, res) => {
  try {
    const users = await user.findOne({ where: { id: req.users.id } });
    res.status(200).send({ data: users });
  } catch (error) {
    res.status(500).send({ message: "Failed to view a user!" })
    console.log(error);
  }
};

exports.update = async (req, res) => {
  try {
    await user.update(req.body, { where: { id: req.users.id } });
    const users = await user.findOne({
      ...userParam,
      where: { id: req.users.id },
    });
    res.status(200).send({ data: users });
  } catch (error) {
    res.status(500).send({ message: "Failed to update user!" })
    console.log(error);
  }
};

exports.destroy = async (req, res) => {
  try {
    await user.destroy({ where: { id: req.users.id } });
    const { id } = req.users;
    const data = {
      id,
    };
    res.status(200).send({ data });
  } catch (error) {
    res.status(500).send({ message: "Failed to delete user!" })
    console.log(error);
  }
};