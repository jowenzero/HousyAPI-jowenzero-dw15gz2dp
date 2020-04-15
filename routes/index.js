const express = require("express");
const router = express.Router();
const {
  create: createUser,
  index: findUsers,
  destroy: deleteUser,
} = require("../controllers/user");

// User routes
router.post("/signin", createUser);
router.post("/signup", createUser);
router.get("/users", findUsers);
router.delete("/user/:id", deleteUser);

module.exports = router;