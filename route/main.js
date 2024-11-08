const express = require('express');
const protectRoute = require('../utils/protectRoute');
// import User from '../models/auth.js';

const router = express.Router()

router.get('/', protectRoute, async (req, res) => {
  try {
    res.render('main/index', { 
        isAuthenticated: true,  
        user: req.user,  
        message: null
    });
  } catch (error) {
      res.status(500).json({ error: "Internal server error" });
  }
});


 router.get('/about', protectRoute, async (req, res) => {
  try {
      res.render('main/about', { 
        isAuthenticated: true,  
        user: req.user,     
    });
  } catch (error) {
      res.status(500).json({ error: "Internal server error" });
  }
});

router.get('/contact', protectRoute, async (req, res) => {
  try {
      res.render('main/contact', { 
        isAuthenticated: true,  
        user: req.user       
    });
  } catch (error) {
      res.status(500).json({ error: "Internal server error" });
  }
});

router.get('/pricing', protectRoute, async (req, res) => {
  try {
      res.render('main/pricing', { 
        isAuthenticated: true,  
        user: req.user       
    });
  } catch (error) {
      res.status(500).json({ error: "Internal server error" });
  }
});

router.get('/profile', protectRoute, async (req, res) => {
  try {
      res.render('main/profile', { 
        isAuthenticated: true,  
        user: req.user       
    });
  } catch (error) {
      res.status(500).json({ error: "Internal server error" });
  }
});

router.get('/services', protectRoute, async (req, res) => {
  try {
      res.render('main/services', { 
        isAuthenticated: true,  
        user: req.user       
    });
  } catch (error) {
      res.status(500).json({ error: "Internal server error" });
  }
});

router.get('/cart', protectRoute, async (req, res) => {
  try {
      res.render('main/shopping-cart', { 
        isAuthenticated: true,  
        user: req.user       
    });
  } catch (error) {
      res.status(500).json({ error: "Internal server error" });
  }
});

router.get('/checkout', protectRoute, async (req, res) => {
  try {
      res.render('main/shopping-checkout', { 
        isAuthenticated: true,  
        user: req.user       
    });
  } catch (error) {
      res.status(500).json({ error: "Internal server error" });
  }
});

router.get('/faq',  protectRoute,async (req, res) => {
  try {
      res.render('main/faq', { 
        isAuthenticated: true,  
        user: req.user       
    });
  } catch (error) {
      res.status(500).json({ error: "Internal server error" });
  }
});

router.get('/blog-right-sidebar', protectRoute, async (req, res) => {
  try {
      res.render('main/blog-right-sidebar', { 
        isAuthenticated: true,  
        user: req.user       
    });
  } catch (error) {
      res.status(500).json({ error: "Internal server error" });
  }
});

router.get('/blog-post', protectRoute, async (req, res) => {
  try {
      res.render('main/blog-post', { 
        isAuthenticated: true,  
        user: req.user       
    });
  } catch (error) {
      res.status(500).json({ error: "Internal server error" });
  }
});

router.get('/blog-left-sidebar', protectRoute, async (req, res) => {
  try {
      res.render('main/blog-left-sidebar', { 
        isAuthenticated: true,  
        user: req.user       
    });
  } catch (error) {
      res.status(500).json({ error: "Internal server error" });
  }
});

router.get('/blog-grid-no-sidebar', protectRoute, async (req, res) => {
  try {
      res.render('main/blog-grid-no-sidebar', { 
        isAuthenticated: true,  
        user: req.user       
    });
  } catch (error) {
      res.status(500).json({ error: "Internal server error" });
  }
});

router.get('/503', protectRoute, async (req, res) => {
  try {
      res.render('main/503', { 
        isAuthenticated: true,  
        user: req.user       
    });
  } catch (error) {
      res.status(500).json({ error: "Internal server error" });
  }
});

router.get('/404', protectRoute, async (req, res) => {
  try {
      res.render('main/404', { 
        isAuthenticated: true,  
        user: req.user       
    });
  } catch (error) {
      res.status(500).json({ error: "Internal server error" });
  }
});

router.get('/terms', protectRoute, async (req, res) => {
  try {
      res.render('main/terms-of-service', { 
        isAuthenticated: true,  
        user: req.user       
    });
  } catch (error) {
      res.status(500).json({ error: "Internal server error" });
  }
});


router.get('/coming-soon', protectRoute, async (req, res) => {
  try {
      res.render('main/coming-soon', { 
        isAuthenticated: true,  
        user: req.user       
    });
  } catch (error) {
      res.status(500).json({ error: "Internal server error" });
  }
});

router.get('/register', async (req, res) => {
  try {
      // Rendering the login form without a message
      res.render('main/register', { message: null });
  } catch (error) {
      console.error(error);
      res.render('main/register', { message: { text: 'An error occurred. Please try again later.', type: 'error' } });
  }
});

  router.get('/login', async (req, res) => {
    try {
        // Rendering the login form without a message
        res.render('main/login', { message: null });
    } catch (error) {
        console.error(error);
        res.render('main/login', { message: { text: 'An error occurred. Please try again later.', type: 'error' } });
    }
});

  module.exports = router; 
