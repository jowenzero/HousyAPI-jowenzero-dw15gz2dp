const express = require("express");
const router = express.Router();
const {
  index: findUsers,
  showUser: findTheUser,
  destroy: deleteUser,
} = require("../controllers/user");
const { login, register } = require("../controllers/auth");
const {
  index: findHouses,
  show: findHouse,
  create: createHouse,
  update: updateHouse,
  destroy: deleteHouse,
} = require("../controllers/house");

// Middlewares
const { authenticated } = require("../middlewares/auth");

// Auth routes
router.post("/signin", login);
router.post("/signup", register);

// User routes
router.get("/users", findUsers);
router.get("/user", authenticated, findTheUser);
router.delete("/user/:id", deleteUser);

// House routes
router.get("/houses", findHouses);
router.get("/house/:id", findHouse);
router.post("/house", authenticated, createHouse);
router.patch("/house/:id", authenticated, updateHouse);
router.delete("/house/:id", authenticated, deleteHouse);


module.exports = router;