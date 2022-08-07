const jwt = require("jsonwebtoken");

function verifyToken(req, res, next) {
  const authHeader = req.headers.token;

  if (authHeader) {
    const token = authHeader.split(" ")[1];

    jwt.verify(token, process.env.SECRET_KEY, (err, user) => {
      if (err) {
        return res.status(403).json("Token is not valid!");
      }

      req.user = user;
      // console.log(req.user)(id, isAdmin);
      next();
    });
  } else {
    return res.status(401).json("You are not authenticated!");
  }
}

// export
module.exports = verifyToken;
