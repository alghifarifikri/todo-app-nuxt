const jwt = require("jsonwebtoken");

const auth = (req, res, next) => {
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];

  if (token === null) {
    return res
      .status(401)
      .json({ success: false, message: "Token Not Found, Access Denied !" });
  }

  jwt.verify(token, process.env.APP_KEY, (err, user) => {
    if (err) {
      return res
        .status(403)
        .json({ success: false, message: "Invalid Token, Access Denied" });
    }

    req.user = user;
    next();
  });
};

module.exports = { auth };
