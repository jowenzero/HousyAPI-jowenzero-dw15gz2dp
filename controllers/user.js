const { User, List } = require("../models");

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
    const users = await User.findAll({
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
    const user = await User.findOne({ where: { id: req.user.id } });
    res.status(200).send({ data: user });
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