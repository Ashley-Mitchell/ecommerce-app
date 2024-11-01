// backend/server.js

const express = require('express');
const connectDB = require('./config/db');
const authRoutes = require('./routes/auth'); // Import the auth routes
require('dotenv').config();

const app = express();

// Connect to MongoDB
connectDB();

app.use(express.json()); // Middleware to parse JSON requests

// Use the auth routes
app.use('/api/auth', authRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
