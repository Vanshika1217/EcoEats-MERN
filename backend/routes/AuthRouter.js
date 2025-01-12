const { Router } = require("express");
const { signupValidation, loginValidation } = require("../Middlewares/AuthValidation"); // Import validation middleware
const { signup, login } = require("../Controllers/AuthControllers"); // Import controller functions

const router = Router();

router.post("/login", loginValidation, login);


router.post("/signup", signupValidation, signup);

module.exports = router;
