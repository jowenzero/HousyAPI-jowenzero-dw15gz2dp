const { Transaction, House, City, User } = require("../models");

exports.create = async (req, res) => {
  try {
    const newTransaction = await Transaction.create(req.body);
    const transaction = await Transaction.findOne({
      include: [
        {
          model: House,
          attributes: { exclude: ["createdAt", "updatedAt", "CityId"] },
          include: [
            {
              model: City,
              attributes: ["id", "name"],
            },
            {
              model: User,
              attributes: ["id", "username"],
            },
          ]
        },
        {
          model: User,
          attributes: ["id", "username"],
        },
      ],
      where: { id: newTransaction.id },
      attributes: { exclude: ["createdAt", "updatedAt", "HouseId", "UserId"] },
    });
    res.status(201).send({ data: transaction });
  } catch (error) {
    res.status(500).send({ message: "Failed to create transaction!" })
    console.log(error);
  }
};

exports.update = async (req, res) => {
  try {
    await Transaction.update(req.body, { where: { id: req.params.id } });
    const transaction = await Transaction.findOne({
      include: [
        {
          model: House,
          attributes: { exclude: ["createdAt", "updatedAt", "CityId"] },
          include: [
            {
              model: City,
              attributes: ["id", "name"],
            },
            {
              model: User,
              attributes: ["id", "username"],
            },
          ]
        },
        {
          model: User,
          attributes: ["id", "username"],
        },
      ],
      where: { id: req.params.id },
      attributes: { exclude: ["createdAt", "updatedAt", "HouseId", "UserId"] },
    });
    res.status(200).send({ data: transaction });
  } catch (error) {
    res.status(500).send({ message: "Failed to update transaction!" })
    console.log(error);
  }
};

exports.show = async (req, res) => {
  try {
    const transaction = await Transaction.findOne({
      include: [
        {
          model: House,
          attributes: { exclude: ["createdAt", "updatedAt", "CityId"] },
          include: [
            {
              model: City,
              attributes: ["id", "name"],
            },
            {
              model: User,
              attributes: ["id", "username"],
            },
          ]
        },
        {
          model: User,
          attributes: ["id", "username"],
        },
      ],
      where: { id: req.params.id },
      attributes: { exclude: ["createdAt", "updatedAt", "HouseId", "UserId"] },
    });
    res.status(200).send({ data: transaction });
  } catch (error) {
    res.status(500).send({ message: "Failed to view a transaction!" })
    console.log(error);
  }
};

exports.index = async (req, res) => {
  try {
    const transaction = await Transaction.findAll({
      include: [
        {
          model: House,
          attributes: { exclude: ["createdAt", "updatedAt", "CityId"] },
          include: [
            {
              model: City,
              attributes: ["id", "name"],
            },
            {
              model: User,
              attributes: ["id", "username"],
            },
          ]
        },
        {
          model: User,
          attributes: ["id", "username"],
        },
      ],
      attributes: { exclude: ["createdAt", "updatedAt", "HouseId", "UserId"] },
    });
    res.status(200).send({ data: transaction });
  } catch (error) {
    res.status(500).send({ message: "Failed to view transactions!" })
    console.log(error);
  }
};