const jwt = require('jsonwebtoken');

// A set to store the invalidated tokens
const tokenBlacklist = new Set();

// Logout route
const logout = (req, res, next) => {
    const token = req.headers.authorization.split(' ')[1];
    tokenBlacklist.add(token);
    res.status(200).json({ message: 'Logged out successfully' });
  };
  
// Middleware to check if a token is valid
const isValidToken = (token) => {
  try {
    const decodedToken = jwt.verify(token, 'secret_key');
    return !tokenBlacklist.has(token) && decodedToken;
  } catch (error) {
    return false;
  }
};

// Middleware to protect routes that require authentication
const checkAuthToken = (req, res, next) => {
  const authHeader = req.headers.authorization;
  
  if (!authHeader) {
    return res.status(401).json({ message: 'Authentication failed!' });
  }

  const token = authHeader.split(' ')[1];
  const decodedToken = isValidToken(token);
  
  if (decodedToken) {
    req.userData = { email: decodedToken.email, userId: decodedToken.userId };
    next();
  } else {
    res.status(401).json({ message: 'Authentication failed!' });
  }
};



module.exports = { checkAuthToken, logout };

