const taskService = require('../services/taskService.js');

const getTasks = async (req, res) => {
  try {
    const tasks = await taskService.getUserTasks(req.user.userId);
    res.json(tasks);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const createTask = async (req, res) => {
  try {
    const task = await taskService.createTask(req.user.userId, req.body);
    res.status(201).json(task);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

const updateTask = async (req, res) => {
  try {
    const updated = await taskService.updateTask(
      parseInt(req.params.id),
      req.user.userId,
      req.body
    );
    res.json({ updated });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

const deleteTask = async (req, res) => {
  try {
    const deleted = await taskService.deleteTask(
      parseInt(req.params.id),
      req.user.userId
    );
    res.json({ deleted });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

module.exports = { getTasks, createTask, updateTask, deleteTask };