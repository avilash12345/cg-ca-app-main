const express = require("express");
const detail_controller = require("../controllers/detail_controller.js");
const user_controllers = require("../controllers/user_controller.js");
const auth_user = require("../middleware/auth.js");

const router = express.Router();
//detail controllers
router.get("/all", auth_user, detail_controller.get_all_data);
router.post("/create", detail_controller.create_data);
router.get("/data", auth_user, user_controllers.mydata);
//user controllers
router.get("/user", user_controllers.get_user_data);
router.post("/create_user", user_controllers.create_user);
router.post("/login", user_controllers.userlogin);
router.post("/logout", user_controllers.logout);

module.exports = router;
