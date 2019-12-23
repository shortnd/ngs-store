const router = require("express").Router();

const welcomeController = require("../controllers/welcomeController");

router.get("/", welcomeController.home);

module.exports = router;
