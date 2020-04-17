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
const {
  create: createTransaction,
  update: updateTransaction,
  show: findTransaction,
  index: findTransactions,
  destroy: deleteTransactions,
} = require("../controllers/transaction");

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

// Transaction routes
router.post("/transaction", authenticated, createTransaction);
router.patch("/transaction/:id", authenticated, updateTransaction);
router.get("/transaction/:id", findTransaction);
router.get("/transactions", findTransactions);


module.exports = router;