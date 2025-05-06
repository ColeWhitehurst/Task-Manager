const { prisma } = require('../prisma/client.js');

const getUserTasks = async (userId) => {
  return await prisma.task.findMany({ where: { userId } });
};

const createTask = async (userId, data) => {
  return await prisma.task.create({
    data: { ...data, userId },
  });
};

const updateTask = async (taskId, userId, data) => {
  return await prisma.task.updateMany({
    where: { id: taskId, userId },
    data,
  });
};

const deleteTask = async (taskId, userId) => {
  return await prisma.task.deleteMany({
    where: { id: taskId, userId },
  });
};

module.exports = { getUserTasks, createTask, updateTask, deleteTask };