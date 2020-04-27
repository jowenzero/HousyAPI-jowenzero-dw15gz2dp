const { house, city, user } = require("../models");
const { Op } = require("sequelize");

const houseParam = {
  include: [
    {
      model: city,
      attributes: ["id", "name"],
    },
    {
      model: user,
      attributes: ["id", "username"],
    },
  ],
  attributes: { exclude: ["createdAt", "updatedAt"] },
  order: [
    ['id', 'ASC'],
  ],
}

exports.index = async (req, res) => {
  try {
    if (req.query.typeRent && req.query.belowPrice) {
      const houses = await house.findAll({
        ...houseParam,
        where: {
          [Op.and]: [
            { typeRent: { [Op.eq]: req.query.typeRent } }, 
            { price: { [Op.lt]: req.query.belowPrice } }
          ]
        },
      });

      res.status(200).send({ data: houses });
    }
    else if (req.query.typeRent || req.query.belowPrice) {
      const houses = await house.findAll({
        ...houseParam,
        where: {
          [Op.or]: [
            { typeRent: { [Op.eq]: req.query.typeRent } }, 
            { price: { [Op.lt]: req.query.belowPrice } }
          ]
        },
      });

      res.status(200).send({ data: houses });
    }
    else if (req.query.cityId) {
      const houses = await house.findAll({
        ...houseParam,
        where: {
          CityId: req.query.CityId
        },
      });

      res.status(200).send({ data: houses });
    }
    else {
      const houses = await house.findAll({
        ...houseParam,
      });

      res.status(200).send({ data: houses });
    }
  } catch (error) {
    res.status(500).send({ message: "Failed to view houses!" })
    console.log(error);
  }
};

exports.show = async (req, res) => {
  try {
    const houses = await house.findOne({
      ...houseParam,
      where: { id: req.params.id },
    });
    res.send({ data: houses });
  } catch (error) {
    res.status(500).send({ message: "Failed to view a house!" })
    console.log(error);
  }
};

exports.showHouse = async (req, res) => {
  try {
    const houses = await house.findAll({
      ...houseParam,
      where: { UserId: req.user.id },
    });
    res.send({ data: houses });
  } catch (error) {
    res.status(500).send({ message: "Failed to view user houses!" })
    console.log(error);
  }
};

exports.create = async (req, res) => {
  try {
    if (req.user.listId === 1) {
      const newHouse = await house.create(req.body);
      const houses = await house.findOne({
        ...houseParam,
        where: { id: newHouse.id },
      });
      res.status(201).send({ data: houses });
    }
    else {
      res.status(401).send({ message: "You're unauthorized!" })
    }
  } catch (error) {
    res.status(500).send({ message: "Failed to create house!" })
    console.log(error);
  }
};

exports.update = async (req, res) => {
  try {
    if (req.user.listId === 1) {
      await house.update(req.body, { where: { id: req.params.id } });
      const houses = await house.findOne({
        ...houseParam,
        where: { id: req.params.id },
      });
      res.status(200).send({ data: houses });
    }
    else {
      res.status(401).send({ message: "You're unauthorized!" })
    }
  } catch (error) {
    res.status(500).send({ message: "Failed to update house!" })
    console.log(error);
  }
};

exports.destroy = async (req, res) => {
  try {
    if (req.user.listId === 1) {
      await house.destroy({ where: { id: req.params.id } });
      const { id } = req.params;
      const data = {
        id,
      };
      res.status(200).send({ data });
    }
    else {
      res.status(401).send({ message: "You're unauthorized!" })
    }
  } catch (error) {
    res.status(500).send({ message: "Failed to delete house!" })
    console.log(error);
  }
};