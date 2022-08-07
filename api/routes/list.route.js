const router = require("express").Router();
const verifyToken = require("../verifyToken");
const {
  createList,
  deleteList,
  getRandomList,
} = require("../controllers/lists.controller");

// CREATE
router.post("/", verifyToken, createList);

// DELETE
router.delete("/:id", verifyToken, deleteList);

// GET
router.get("/", verifyToken, getRandomList);

// exports
module.exports = router;
