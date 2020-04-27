const { user, list } = require("../models");

const userParam = {
  include: [
    {
      model: list,
      attributes: ["id", "name"],
    },
  ],
  attributes: { exclude: ["createdAt", "updatedAt", "listId"] },
  order: [
    ['id', 'ASC'],
  ],
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
    const users = await user.findOne({
      ...userParam,
      where: { id: req.user.id }
    });
    res.status(200).send({ data: users });
  } catch (error) {
    res.status(500).send({ message: "Failed to view a user!" })
    console.log(error);
  }
};

exports.update = async (req, res) => {
  try {
    await user.update(req.body, { where: { id: req.user.id } });
    const users = await user.findOne({
      ...userParam,
      where: { id: req.user.id },
    });
    res.status(200).send({ data: users });
  } catch (error) {
    res.status(500).send({ message: "Failed to update user!" })
    console.log(error);
  }
};

exports.destroy = async (req, res) => {
  try {
    await user.destroy({ where: { id: req.user.id } });
    const { id } = req.user;
    const data = {
      id,
    };
    res.status(200).send({ data });
  } catch (error) {
    res.status(500).send({ message: "Failed to delete user!" })
    console.log(error);
  }
};