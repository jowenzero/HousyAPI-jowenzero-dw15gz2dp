const { transaction, house, city, user } = require("../models");
const { Op } = require("sequelize");

const transactionParam = {
  include: [
    {
      model: house,
      attributes: { exclude: ["createdAt", "updatedAt", "cityId"] },
      include: [
        {
          model: city,
          attributes: ["id", "name"],
        },
        {
          model: user,
          attributes: ["id", "username"],
        },
      ]
    },
    {
      model: user,
      attributes: ["id", "username"],
    },
  ],
  attributes: { exclude: ["updatedAt"] },
};

exports.index = async (req, res) => {
  try {
    const transactions = await transaction.findAll({
      ...transactionParam,
    });
    res.status(200).send({ data: transactions });
  } catch (error) {
    res.status(500).send({ message: "Failed to view transactions!" })
    console.log(error);
  }
};

exports.show = async (req, res) => {
  try {
    const transactions = await transaction.findOne({
      ...transactionParam,
      where: { id: req.params.id },
    });
    res.status(200).send({ data: transactions });
  } catch (error) {
    res.status(500).send({ message: "Failed to view a transaction!" })
    console.log(error);
  }
}

exports.showTransaction = async (req, res) => {
  try {
    if (req.user.listId === 2) {
      const transactions = await transaction.findAll({
        ...transactionParam,
        where: { 
          [Op.and]: [
            { UserId: req.user.id  }, 
            { [Op.or]: [{ status: "Pending" }, { status: "Approve" }, { status: "Cancel" }]}
          ]
        },
      });
      res.status(200).send({ data: transactions });
    }
    else if (req.user.listId === 1) {
      const transactions = await transaction.findAll({
        ...transactionParam,
        where: { 
          [Op.and]: [
            { ownerId: req.user.id  }, 
            { [Op.or]: [{ status: "Pending" }, { status: "Approve" }, { status: "Cancel" }]}
          ]
        },
      });
      res.status(200).send({ data: transactions });
    }
    else {
      res.status(401).send({ message: "You're unauthorized!" })
    }
  } catch (error) {
    res.status(500).send({ message: "Failed to view user transactions!" })
    console.log(error);
  }
};

exports.showHistory = async (req, res) => {
  try {
    if (req.user.listId === 2) {
      const transactions = await transaction.findAll({
        ...transactionParam,
        where: { 
          [Op.and]: [
            { UserId: req.user.id  }, 
            { [Op.or]: [{ status: "Approve" }, { status: "Cancel" }] }
          ]
        },
      });
      res.status(200).send({ data: transactions });
    }
    else if (req.user.listId === 1) {
      const transactions = await transaction.findAll({
        ...transactionParam,
        where: { 
          [Op.and]: [
            { ownerId: req.user.id  }, 
            { [Op.or]: [{ status: "Approve" }, { status: "Cancel" }]}
          ]
        },
      });
      res.status(200).send({ data: transactions });
    }
    else {
      res.status(401).send({ message: "You're unauthorized!" })
    }
  } catch (error) {
    res.status(500).send({ message: "Failed to view user transactions!" })
    console.log(error);
  }
};

exports.showBooking = async (req, res) => {
  try {
    if (req.user.listId === 2) {
      const transactions = await transaction.findAll({
        ...transactionParam,
        where: { 
          [Op.and]: [
            { UserId: req.user.id  }, 
            { [Op.or]: [{ status: "Waiting Payment" }, { status: "Pending" }] }
          ]
        },
      });
      res.status(200).send({ data: transactions });
    }
    else if (req.user.listId === 1) {
      const transactions = await transaction.findAll({
        ...transactionParam,
        where: { 
          [Op.and]: [
            { ownerId: req.user.id  }, 
            { [Op.or]: [{ status: "Waiting Payment" }, { status: "Pending" }]}
          ]
        },
      });
      res.status(200).send({ data: transactions });
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
    if (req.user.listId === 2) {
      const newTransaction = await transaction.create(req.body);
      const transactions = await transaction.findOne({
        ...transactionParam,
        where: { id: newTransaction.id },
      });
      res.status(201).send({ data: transactions });
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
    if (req.user.listId === 1 || req.user.listId === 2) {
      await transaction.update(req.body, { where: { id: req.params.id } });
      const transactions = await transaction.findOne({
        ...transactionParam,
        where: { id: req.params.id },
      });
      res.status(200).send({ data: transactions });
    }
    else {
      res.status(401).send({ message: "You're unauthorized!" })
    }
  } catch (error) {
    res.status(500).send({ message: "Failed to update transaction!" })
    console.log(error);
  }
};