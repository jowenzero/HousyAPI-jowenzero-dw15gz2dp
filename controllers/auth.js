const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const { User } = require("../models");

exports.login = async (req, res) => {
  try {
    const { username, password } = req.body;
    const user = await User.findOne({
      where: {
        username,
      },
    });
    const { listId } = user;

    if (!user) {
      res.status(401).send({ message: "Invalid login" });
    } else {
      bcrypt.compare(password, user.password, (err, result) => {
        if (result) {
          jwt.sign({ id: user.id }, process.env.SECRET_KEY, (err, token) => {
            const data = {
              username,
              token,
              ListId,
            };
            res.status(200).send({ data });
          });
        } else {
          res.status(401).send({ message: "Invalid login" });
        }
      });
    }
  } catch (error) {
    res.status(500).send({ message: "Server Internal Error" });
    console.log(error);
  }
};

exports.register = async (req, res) => {
  try {
    const saltRounds = 10;
    const { username, password } = req.body;
    const user = await User.findOne({
      where: {
        username,
      },
    });

    if (!user) {
      bcrypt.hash(password, saltRounds, async (err, hash) => {
        const value = {
          ...req.body,
          password: hash,
        };
        const newUser = await User.create(value);
        const { ListId } = newUser;

        jwt.sign({ id: newUser.id }, process.env.SECRET_KEY, (err, token) => {
          const data = {
            username,
            token,
            ListId,
          };
          res.status(201).send({ data });
        });
      });
    } else {
      res.status(400).send({ message: "User already registered" });
    }
  } catch (error) {
    res.status(500).send({ message: "Server Internal Error" });
    console.log(error);
  }
};

exports.password = async (req, res) => {
  try {
    const saltRounds = 10;
    const { oldPass, confirmPass, newPass } = req.body;
    const user = await User.findOne({
      where: {
        id: req.user.id,
      },
    });

    if (!user && (oldPass !== confirmPass)) {
      res.status(401).send({ message: "Invalid login" });
    } else {
      bcrypt.compare(confirmPass, user.password, (err, result) => {
        if (result) {
          bcrypt.hash(newPass, saltRounds, async (err, hash) => {
            const value = {
              password: hash,
            };
            await User.update(value, { where: { id: req.user.id } });
            res.status(201).send({ message: "Password change successful!"});
          });
        } else {
          res.status(401).send({ message: "Invalid login" });
        }
      });
    }
  } catch (error) {
    res.status(500).send({ message: "Server Internal Error" });
    console.log(error);
  }
};