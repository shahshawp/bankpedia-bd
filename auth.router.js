const { registerUser, loginUser } = require("../controllers/auth.controller");

const router = require("express").Router();

router.route("/register").post(registerUser);
router.route("/login").post(loginUser);

module.exports = router;
