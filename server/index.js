require("dotenv").config();
const express = require('express');
const cors = require('cors');

const authRoutes = require('./routes/authRoutes.js');
const taskRoutes = require('./routes/taskRoutes.js');

const app = express();
app.use(express.json());


app.use(cors({
  origin: 'http://localhost:5174',
  credentials: true, // this is the correct way
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization']
}));

app.use((req, res, next) => {
  console.log(`[${req.method}] ${req.originalUrl}`);
  console.log('Origin:', req.headers.origin);
  console.log('Authorization:', req.headers.authorization);
  next();
});

app.use('/api/auth', authRoutes);
app.use('/api/tasks', taskRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
});