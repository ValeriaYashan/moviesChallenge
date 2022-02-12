// ************ Require's ************
const express = require("express");
const router = express.Router();



const userController = require("../controllers/usersController");



router.get("/register", userController.register);

router.post("/register", userController.processRegister);



router.get("/login", userController.login);

router.post("/login", userController.processLogin);



router.get("/logout", userController.logout);

module.exports = router;
