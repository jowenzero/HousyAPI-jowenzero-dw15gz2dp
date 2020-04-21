const { House, City, User } = require("../models");
const { Op } = require("sequelize");

const houseParam = {
  include: [
    {
      model: City,
      attributes: ["id", "name"],
    },
    {
      model: User,
      attributes: ["id", "username"],
    },
  ],
  attributes: { exclude: ["createdAt", "updatedAt", "CityId", "UserId"] },
}

exports.index = async (req, res) => {
  try {
    if (req.query.typeRent && req.query.belowPrice) {
      const houses = await House.findAll({
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
      const houses = await House.findAll({
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
    else {
      const houses = await House.findAll({
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
    const house = await House.findOne({
      ...houseParam,
      where: { id: req.params.id },
    });
    res.send({ data: house });
  } catch (error) {
    res.status(500).send({ message: "Failed to view a house!" })
    console.log(error);
  }
};

exports.showHouse = async (req, res) => {
  try {
    const house = await House.findAll({
      ...houseParam,
      where: { UserId: req.user.id },
    });
    res.send({ data: house });
  } catch (error) {
    res.status(500).send({ message: "Failed to view user houses!" })
    console.log(error);
  }
};

exports.create = async (req, res) => {
  try {
    const newHouse = await House.create(req.body);
    const house = await House.findOne({
      ...houseParam,
      where: { id: newHouse.id },
    });
    res.status(201).send({ data: house });
  } catch (error) {
    res.status(500).send({ message: "Failed to create house!" })
    console.log(error);
  }
};

exports.update = async (req, res) => {
  try {
    await House.update(req.body, { where: { id: req.params.id } });
    const house = await House.findOne({
      ...houseParam,
      where: { id: req.params.id },
    });
    res.status(200).send({ data: house });
  } catch (error) {
    res.status(500).send({ message: "Failed to update house!" })
    console.log(error);
  }
};

exports.destroy = async (req, res) => {
  try {
    await House.destroy({ where: { id: req.params.id } });
    const { id } = req.params;
    const data = {
      id,
    };
    res.status(200).send({ data });
  } catch (error) {
    res.status(500).send({ message: "Failed to delete house!" })
    console.log(error);
  }
};