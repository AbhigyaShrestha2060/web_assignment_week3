const appointmentController = require("../controllers/appointmentController");
const router = require("express").Router();

router.post("/create", appointmentController.bookAppointment);

module.exports = router;
