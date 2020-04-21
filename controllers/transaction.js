const { Transaction, House, City, User } = require("../models");

const transactionParam = {
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
};

exports.index = async (req, res) => {
  try {
    const transaction = await Transaction.findAll({
      ...transactionParam,
    });
    res.status(200).send({ data: transaction });
  } catch (error) {
    res.status(500).send({ message: "Failed to view transactions!" })
    console.log(error);
  }
};

exports.show = async (req, res) => {
  try {
    const transaction = await Transaction.findOne({
      ...transactionParam,
      where: { id: req.params.id },
    });
    res.status(200).send({ data: transaction });
  } catch (error) {
    res.status(500).send({ message: "Failed to view a transaction!" })
    console.log(error);
  }
};

exports.showTransaction = async (req, res) => {
  try {
    if (req.user.ListId === 2) {
      const transaction = await Transaction.findAll({
        ...transactionParam,
        where: { UserId: req.user.id },
      });
      res.status(200).send({ data: transaction });
    }
    else {
      res.status(401).send({ message: "You're unauthorized!" })
    }
  } catch (error) {
    res.status(500).send({ message: "Failed to view user transactions!" })
    console.log(error);
  }
};

exports.create = async (req, res) => {
  try {
    if (req.user.ListId === 2) {
      const newTransaction = await Transaction.create(req.body);
      const transaction = await Transaction.findOne({
        ...transactionParam,
        where: { id: newTransaction.id },
      });
      res.status(201).send({ data: transaction });
    }
    else {
      res.status(401).send({ message: "You're unauthorized!" })
    }
  } catch (error) {
    res.status(500).send({ message: "Failed to create transaction!" })
    console.log(error);
  }
};

exports.update = async (req, res) => {
  try {
    if (req.user.ListId === 2) {
      await Transaction.update(req.body, { where: { id: req.params.id } });
      const transaction = await Transaction.findOne({
        ...transactionParam,
        where: { id: req.params.id },
      });
      res.status(200).send({ data: transaction });
    }
    else {
      res.status(401).send({ message: "You're unauthorized!" })
    }
  } catch (error) {
    res.status(500).send({ message: "Failed to update transaction!" })
    console.log(error);
  }
};