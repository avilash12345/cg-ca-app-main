const express = require("express");
const detail_controller = require("../controllers/detail_controller.js");

const router = express.Router();

router.get("/all", detail_controller.get_all_data);
router.post("/create", detail_controller.create_data);

module.exports = router;
