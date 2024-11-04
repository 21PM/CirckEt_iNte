const express = require("express");
const userController = require("../Controller/UserController")


const router = express.Router();


router.post("/register",userController.Register)
router.post("/login",userController.Login)

router.get("/playersList",userController.PlayerList)


const userRoutes = router;

module.exports = userRoutes;