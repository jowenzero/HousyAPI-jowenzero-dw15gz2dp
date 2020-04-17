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

    if (!user) {
      res.status(401).send({ message: "Invalid login" });
    } else {
      bcrypt.compare(password, user.password, (err, result) => {
        if (result) {
          jwt.sign({ id: user.id }, "zeds-encrypt-key", (err, token) => {
            const data = {
              username,
              token,
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

        jwt.sign({ id: newUser.id }, "zeds-encrypt-key", (err, token) => {
          const data = {
            username,
            token,
          };
          res.status(200).send({ data });
        });
      });
    } else {
      res.status(400).send({ message: "Email already registered" });
    }
  } catch (error) {
    res.status(500).send({ message: "Server Internal Error" });
    console.log(error);
  }
};