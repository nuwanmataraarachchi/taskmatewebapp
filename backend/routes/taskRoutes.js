const express = require('express');
const {
  getAllTasks,
  createTask,
  updateTask,
  deleteTask,
} = require('../controllers/taskController'); // Corrected path

const router = express.Router();

// Task routes
router.get('/tasks', getAllTasks);
router.post('/tasks', createTask);
router.put('/tasks/:id', updateTask);
router.delete('/tasks/:id', deleteTask);

module.exports = router;
