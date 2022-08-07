const express = require("express");
const verifyToken = require("../verifyToken");
const router = express.Router();
const {
  createMovie,
  updateMovie,
  deleteMovie,
  getSingleMovie,
  getRandomMovie,
  getAllMovie,
} = require("../controllers/movies.controller");

// CREATE A NEW MOVIE
router.post("/", verifyToken, createMovie);

// UPDATE
router.put("/:id", verifyToken, updateMovie);

// DELETE
router.delete("/:id", verifyToken, deleteMovie);

// GET SINGLE MOVIE
router.get("/find/:id", verifyToken, getSingleMovie);

// GET RANDOM
router.get("/random", verifyToken, getRandomMovie);

// GET ALL
router.get("/", verifyToken, getAllMovie);

// exports
module.exports = router;
