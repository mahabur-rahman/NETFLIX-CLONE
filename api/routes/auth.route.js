const express = require("express");
const router = express.Router();
const { userRegister, userLogin } = require("../controllers/auth.controller");

// REGISTER
router.post("/register", userRegister);
router.post("/login", userLogin);

// LOGIN

// export
module.exports = router;
