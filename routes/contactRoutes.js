const router = require("express").Router();
const userController = require("../controllers/contactController");

router.post("/create", userController.addContact);

module.exports = router;
