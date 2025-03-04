// server.js

// Importing required dependencies
const express = require('express');
const cors = require('cors');

// Create an Express app
const app = express();

// Middleware setup
app.use(cors()); // Enable Cross-Origin Resource Sharing
app.use(express.json()); // Parse incoming JSON requests

// Basic route to test the server
app.get('/', (req, res) => {
  res.send('Hello from TaskMate Backend!');
});

// Start the server
const PORT = 3200;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
