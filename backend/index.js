// Import necessary modules
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const nodemailer = require('nodemailer'); // Added nodemailer for email sending
require('dotenv').config();

const app = express();

app.use(bodyParser.json());
app.use(cors({
  origin: 'http://localhost:3000',
  methods: ['GET', 'POST'],
  credentials: true,
}));

const JWT_SECRET = process.env.JWT_SECRET || 'default_jwt_secret';
const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/yourlocaldb';

mongoose.connect(MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('MongoDB connection error:', err));

// User Schema and Model
const userSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
});
const User = mongoose.model('User', userSchema);

// Availability Schema and Model
const availabilitySchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  date: { type: String, required: true },
  time: { type: String, required: true },
});
const Availability = mongoose.model('Availability', availabilitySchema);

// Booking Schema and Model
const bookingSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  date: { type: String, required: true },
  time: { type: String, required: true },
  photographerName: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: String, required: true },
  shootingPlace: { type: String, required: true },
  shootingLocation: { type: String, required: true },
  meetingPoint: { type: String, required: true },
  shootingConcept: { type: String, required: true },
  clothingType: { type: String, required: true },
  shoesType: { type: String, required: true },
  itemsType: { type: String, required: true },
  makeupType: { type: String, required: true },
  others: { type: String }
});
const Booking = mongoose.model('Booking', bookingSchema);

// Middleware to authenticate JWT tokens
const authenticateToken = (req, res, next) => {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];

  if (!token) return res.status(401).send('Access denied. No token provided.');

  jwt.verify(token, JWT_SECRET, (err, user) => {
    if (err) {
      console.error("JWT verification failed:", err);
      return res.status(403).send('Invalid token.');
    }
    req.user = user; // Attach the user to the request
    next();
  });
};

// Function to send confirmation email
const sendConfirmationEmail = (bookingDetails) => {
  const { email, photographerName, date, time, shootingLocation, meetingPoint } = bookingDetails;

  const transporter = nodemailer.createTransport({
    service: 'gmail', // Replace with your email service
    auth: {
      user: 'ramodixit577@gmail.com', // Replace with your email
      pass: 'kbew sddf stac usqk', // Replace with your email password
    },
  });

  const mailOptions = {
    from: '"Your Company Name" <your-email@example.com>',
    to: email,
    subject: 'Booking Confirmation',
    html: `
      <p>Hi ${photographerName},</p>
      <p>Your booking is confirmed!</p>
      <p><strong>Date:</strong> ${date}</p>
      <p><strong>Time:</strong> ${time}</p>
      <p><strong>Location:</strong> ${shootingLocation}</p>
      <p><strong>Meeting Point:</strong> ${meetingPoint}</p>
      <p>Thank you for choosing us!</p>
    `,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      return console.error('Error sending confirmation email:', error);
    }
    console.log('Confirmation email sent:', info.response);
  });
};

// User Registration
app.post('/api/signup', async (req, res) => {
  try {
    const { email, password } = req.body;
    if (await User.findOne({ email })) {
      return res.status(400).json({ message: 'Email already exists' });
    }
    const hashedPassword = await bcrypt.hash(password, 10);
    await new User({ email, password: hashedPassword }).save();
    res.status(201).json({ message: 'User registered successfully' });
  } catch (error) {
    console.error('Signup error:', error);
    res.status(500).json({ message: 'Signup error' });
  }
});

// User Login
app.post('/api/login', async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });

    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res.status(401).json({ message: 'Incorrect password' });
    }

    const token = jwt.sign({ email: user.email, id: user._id }, JWT_SECRET, { expiresIn: '1h' });

    res.status(200).json({
      token,
      email: user.email,
      id: user._id // Include the user ID in the response
    });
  } catch (error) {
    console.error('Login error:', error);
    res.status(500).json({ message: 'Login error' });
  }
});

// Add Availability
app.post('/api/availability', authenticateToken, async (req, res) => {
  try {
    const { date, time } = req.body;
    const userId = req.user.id;

    if (await Availability.findOne({ userId, date, time })) {
      return res.status(400).json({ message: 'This time slot is already added for the selected date.' });
    }

    await new Availability({ userId, date, time }).save();
    res.status(201).json({ message: 'Availability added successfully' });
  } catch (error) {
    console.error('Availability submission error:', error);
    res.status(500).json({ message: 'Availability submission error' });
  }
});

// Get Availability for Booking
app.get('/api/availability', authenticateToken, async (req, res) => {
  try {
    const userId = req.user.id; // Get the logged-in user's ID
    const availability = await Availability.find({ userId });
    res.status(200).json(availability);
  } catch (error) {
    console.error('Error fetching availability:', error);
    res.status(500).json({ message: 'Error fetching availability' });
  }
});

// Get User Availability for Booking
app.get('/api/booking/availability', authenticateToken, async (req, res) => {
  try {
    const userId = req.user.id; // Get the logged-in user's ID
    const availability = await Availability.find({ userId });
    res.status(200).json(availability);
  } catch (error) {
    console.error('Error fetching user availability for booking:', error);
    res.status(500).json({ message: 'Error fetching availability for booking' });
  }
});

// Submit Booking
app.post('/api/booking', authenticateToken, async (req, res) => {
  try {
    const {
      date, time, photographerName, email, phone, shootingPlace, shootingLocation, meetingPoint,
      shootingConcept, clothingType, shoesType, itemsType, makeupType, others
    } = req.body;
    const userId = req.user.id;

    // Validate that the provided date and time are available
    const availability = await Availability.findOne({ userId, date, time });
    if (!availability) {
      return res.status(400).json({ message: 'Selected date and time are not available.' });
    }

    // Save the booking
    const booking = await new Booking({
      userId, date, time, photographerName, email, phone, shootingPlace, shootingLocation, meetingPoint,
      shootingConcept, clothingType, shoesType, itemsType, makeupType, others
    }).save();

    // Send confirmation email after booking is saved
    sendConfirmationEmail(booking);

    res.status(201).json({ message: 'Booking request submitted successfully' });
  } catch (error) {
    console.error('Booking submission error:', error);
    res.status(500).json({ message: 'Booking submission error' });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
