const jwt = require('jsonwebtoken');

module.exports = function (req, res, next) {
  const token = req.header('x-auth-token');

  if (!token) {
    return res.status(401).json({ msg: 'No token, authorization denied' });
  }

  try {
    const decoded = jwt.verify(token, 'secret');

    req.user = decoded.user;
    next();
  } catch {
    res.status(401).json({ token, msg: 'Token is not valid' });
  }
};
