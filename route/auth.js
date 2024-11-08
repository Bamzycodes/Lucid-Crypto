const express = require('express')
const User = require('../model/auth.js');
const generateToken  = require('../utils/generateToken.js');
const protectRoute = require('../utils/protectRoute.js');

const user = express()


// In your /register and /login routes, pass 'res' to generateToken
user.post('/register', async (req, res) => {
    try {
        const { name, email, password } = req.body;

        // Check if user already exists
        const userExist = await User.findOne({ email });
        if (userExist) {
            const message = { text: 'Email already exists.', type: 'error' };
            return res.render('main/register', { message });
            
        }

        // Hash the password
        const newUser = new User({
            name,
            email,
            password,
        });

        // Save the new user
        const savedUser = await newUser.save();

        // Generate token and set cookie
        generateToken(savedUser._id, res);

        res.render('main/login', { message: { text: 'Signup successful.', type: 'success' } });
    } catch (error) {
        console.error("Signup Error:", error);
        const message = { text: 'Signup failed, please try again later.', type: 'error' };
        return res.render('main/register', { message });
    }
});


user.post('/login', async (req, res) => {
    try {
      const { email, password } = req.body;
  
      // Find user by email
      const user = await User.findOne({ email });
      if (!user) {
        // User not found
        const message = { text: 'Invalid email or password.', type: 'error' };
        return res.render('main/login', { message });
      }
  
      // Compare the passwords directly
      if (password !== user.password) {
        // Passwords do not match
        const message = { text: 'Invalid email or password.', type: 'error' };
        return res.render('main/login', { message });
      }
  
      // Generate token and set cookie
      generateToken(user._id, res);
  
      // Login successful
      return res.render('main/index', { message: { text: 'Login successful.', type: 'success' }, isAuthenticated: true });
    } catch (error) {
      console.error("Signin Error:", error);
      // Handle internal error
      const message = { text: 'Signin failed, please try again later.', type: 'error' };
      return res.render('main/login', { message });
    }
  });
  

user.post('/signout', (req, res) => {
    res.clearCookie('jwt');
    res.redirect('/login');
});

module.exports = user; 
