const authService = require('../services/authService');

const registerUser = async (req, res, next) => {
  console.log("inside register");
  
  const { name, email, password } = req.body;
  try {
    const user = await authService.register(name, email, password);
    console.log(user);
    
    res.status(201).json(user);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

const loginUser = async (req, res, next) => {
  const { email, password } = req.body;
  try {
    const user = await authService.login(email, password);
    res.status(200).json(user);
  } catch (err) {
    res.status(401).json({ message: err.message });
  }
};

module.exports = { registerUser, loginUser };