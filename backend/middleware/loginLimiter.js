const rateLimit = require("express-rate-limit");
const loginLimiter = rateLimit({
  windowMs: 60 * 1000,
  max: 6,
  message: { message: "Too many login attemps please try again later" },
  handler: (req, res, next, options) => {
    res.status(options.statusCode).send(options.message);
  },
  standhardHeaders: true,
  legacyHeaders: false,
});
module.exports = loginLimiter;
