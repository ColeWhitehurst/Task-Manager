const express = require('express');
const taskController = require('../controllers/taskController.js');
const { authenticate } = require('../middleware/authMiddleware.js');

const router = express.Router();

router.use(authenticate);

router.get('/', taskController.getTasks);
router.post('/', taskController.createTask);
router.put('/:id', taskController.updateTask);
router.delete('/:id', taskController.deleteTask);

module.exports = router;