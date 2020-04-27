const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const { user } = require("../models");

exports.login = async (req, res) => {
  try {
    const { username, password } = req.body;
    const User = await user.findOne({
      where: {
        username,
      },
    });
    const { ListId } = User;

    if (!user) {
      res.status(401).send({ message: "Invalid login" });
    } else {
      bcrypt.compare(password, User.password, (err, result) => {
        if (result) {
          jwt.sign({ id: User.id }, process.env.SECRET_KEY, (err, token) => {
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
    const User = await user.findOne({
      where: {
        username,
      },
    });

    if (!User) {
      bcrypt.hash(password, saltRounds, async (err, hash) => {
        const value = {
          ...req.body,
          password: hash,
        };
        const newUser = await user.create(value);
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
    const User = await user.findOne({
      where: {
        id: req.user.id,
      },
    });

    if (!User && (oldPass !== confirmPass)) {
      res.status(401).send({ message: "Invalid login" });
    } else {
      bcrypt.compare(confirmPass, User.password, (err, result) => {
        if (result) {
          bcrypt.hash(newPass, saltRounds, async (err, hash) => {
            const value = {
              password: hash,
            };
            await user.update(value, { where: { id: req.user.id } });
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