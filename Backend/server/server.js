// server/server.js


const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB connection
mongoose.connect("mongodb://localhost:27017/ticketbooking", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", () => {
  console.log("Connected to MongoDB");
});

// Mongoose Schema for the booking
const bookingSchema = new mongoose.Schema({
  name: String,
  email: String,
  date: String,
  seat: String,
});

const Booking = mongoose.model("Booking", bookingSchema);

// POST route to handle booking submission
app.post("/api/bookings", async (req, res) => {
  const { name, email, date, seat } = req.body;

  try {
    const newBooking = new Booking({
      name,
      email,
      date,
      seat,
    });

    await newBooking.save();
    res.status(201).json({ message: "Booking successful!" });
  } catch (error) {
    res.status(400).json({ message: "Error booking ticket", error });
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
