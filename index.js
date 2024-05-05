const express = require("express");
const dotenv = require("dotenv");
const connectDatabase = require("./database/database");

const app = express();

app.use(express.json());

dotenv.config();

const PORT = process.env.PORT;

connectDatabase();

app.get("/test", (req, res) => {
  res.send("Test API is Working!....");
});

app.use("/api/contact", require("./routes/contactRoutes"));
// http://localhost:5000/api/contact/create
app.use("/api/reservations", require("./routes/reservationRoutes"));
// http://localhost:5000/api/reservations/create
app.use("/api/book-appointment", require("./routes/appointmentRoutes"));
// http://localhost:5000/api/book-appointment/create

app.listen(PORT, () => {
  console.log(`Server Started at port ${PORT}`);
});
