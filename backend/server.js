const express = require('express');
const cors = require('cors');
const taskRoutes = require('./routes/taskRoutes');

const app = express();

// Middleware setup
app.use(cors());
app.use(express.json());

// Basic route to test the server
app.get('/', (req, res) => {
  res.send('Hello from TaskMate Backend!');
});

// Use task routes
app.use('/api', taskRoutes); // Prefix all task routes with '/api'

// Start the server
const PORT = 3200;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
