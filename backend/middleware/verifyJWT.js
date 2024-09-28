const jwt = require("jsonwebtoken");
const verifyJWT = (req, res, next) => {
  const access_token = req.cookies.access_token;
  const check = req.headers["tokencheck"] === "true";
  if (!access_token && check) return res.status(200).json({ failed: true });
  if (!access_token) return res.status(401).json({ message: "Unauthorized" });
  jwt.verify(access_token, process.env.ACCESS_TOKEN_SECRET, (err, decoded) => {
    if (err) return res.status(403).json({ message: "Forbidden" });
    req.user = decoded.UserInfo.username;
    req.id = decoded.UserInfo._id;
    next();
  });
};
module.exports = verifyJWT;
