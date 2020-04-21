const jwt = require("jsonwebtoken");
const { User } = require("../models");

exports.authenticated = async (req, res, next) => {
  try {
    let token = req.header("Authorization");

    if (token) {
      token = token.replace("Bearer ", "");
      const data = jwt.verify(token, process.env.SECRET_KEY);

      if (data) {
        const user = await User.findOne({ where: { id: data.id } });

        if (!user) {
          res.status(403).send({ message: "Forbidden request!" });
        } else {
          req.user = user;
          req.token = token;
          next();
        }

      } else {
        res.status(403).send({ message: "Forbidden request!" });
      }
    } else {
      res.status(401).send({ message: "You're unauthorized!" });
    }
  } catch (error) {
    res.status(500).send({ message: "Server Internal Error" });
    console.log(error);
  }
};