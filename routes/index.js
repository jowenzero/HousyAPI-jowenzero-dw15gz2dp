const express = require("express");
const router = express.Router();
const {
  index: findUsers,
  showUser: findTheUser,
  destroy: deleteUser,
} = require("../controllers/user");
const { login, register } = require("../controllers/auth");

// Middlewares
const { authenticated } = require("../middlewares/auth");

// Auth routes
router.post("/signin", login);
router.post("/signup", register);

// User routes
router.get("/users", findUsers);
router.get("/user", authenticated, findTheUser);
router.delete("/user/:id", deleteUser);

module.exports = router;