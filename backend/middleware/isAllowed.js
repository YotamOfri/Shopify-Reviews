const isAllowed = (req, res, next) => {
  const allowedURL = "http://localhost:5173/"; // Replace with the URL you want to allow

  const clientReferer = req.get("referer"); // Get the referring URL from the request headers

  if (clientReferer === allowedURL) next();
  else {
    console.log(`Request from disallowed URL: ${clientReferer}`);
    res.status(403).json({ message: "Forbidden" }); // You can respond with a 403 Forbidden status or handle it as needed
  }
};

module.exports = isAllowed;
