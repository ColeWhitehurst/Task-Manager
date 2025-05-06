const bcrypt = require('bcryptjs');
const { PrismaClient } = require('@prisma/client');
const generateToken = require('../utils/generateToken');

const prisma = new PrismaClient();

const register = async (name, email, password) => {
  const existingUser = await prisma.user.findUnique({ where: { email } });
  if (existingUser) throw new Error('User already exists');

  const hashedPassword = await bcrypt.hash(password, 10);

  const newUser = await prisma.user.create({
    data: { name, email, password: hashedPassword },
  });

  const token = generateToken(newUser.id);
  return { ...newUser, token };
};

const login = async (email, password) => {
  const user = await prisma.user.findUnique({ where: { email } });
  if (!user) throw new Error('Invalid credentials');

  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) throw new Error('Invalid credentials');

  const token = generateToken(user.id);
  return { ...user, token };
};

module.exports = { register, login };