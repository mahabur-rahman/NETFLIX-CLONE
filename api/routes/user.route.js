const express = require("express");
const router = express.Router();
const verifyToken = require("../verifyToken");
const {
  updateUser,
  deleteUser,
  getSingleUser,
  getAllUser,
  getAllUserStats,
} = require("../controllers/users.controller");

// UPDATE USER
router.put("/:id", verifyToken, updateUser);

// DELETE USER
router.delete("/:id", verifyToken, deleteUser);

// GET SINGLE USER
router.get("/find/:id", getSingleUser);

// GET ALL USERS
router.get("/", verifyToken, getAllUser);

// USER STATS
router.get("/stats", getAllUserStats);

// export
module.exports = router;
