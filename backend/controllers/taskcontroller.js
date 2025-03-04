// taskController.js

let tasks = []; // In-memory task storage

// Get all tasks (Read)
const getAllTasks = (req, res) => {
  res.json(tasks);
};

// Create a new task (Create)
const createTask = (req, res) => {
  const { title, description } = req.body;
  const newTask = { id: tasks.length + 1, title, description };
  tasks.push(newTask);
  res.status(201).json(newTask);
};

// Update an existing task (Update)
const updateTask = (req, res) => {
  const { id } = req.params;
  const { title, description } = req.body;
  const task = tasks.find(t => t.id == id);

  if (task) {
    task.title = title;
    task.description = description;
    res.json(task);
  } else {
    res.status(404).json({ message: 'Task not found' });
  }
};

// Delete a task (Delete)
const deleteTask = (req, res) => {
  const { id } = req.params;
  tasks = tasks.filter(task => task.id != id);
  res.json({ message: 'Task deleted' });
};

module.exports = {
  getAllTasks,
  createTask,
  updateTask,
  deleteTask,
};
