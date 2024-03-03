require("dotenv").config();
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const cookieParser = require("cookie-parser");
const corsOptions = require("./config/corsOptions");
const errorHandler = require("./middleware/errorHandler");
const connectDB = require("./config/dbConn");
const isAllowed = require("./middleware/isAllowed");
const app = express();
const PORT = process.env.PORT || 3500;

// initalize the DB Connection
connectDB();
// Cors Options
app.use(cors(corsOptions));
// json Accept
app.use(express.json());
// Only the Sites URL
// app.use(isAllowed);
//
app.use(cookieParser());
// Styles Folder
app.use(express.static("public"));
// index Route
app.use("/", require("./routes/root"));
// Authentication Route
app.use("/auth", require("./routes/authRoutes"));
// Users Route
app.use("/users", require("./routes/userRoutes"));
// 404 Route
app.all("*", require("./routes/404"));

// Error Handling
app.use(errorHandler);
// Server
mongoose.connection.once("open", () => {
  console.log("Connected To MongoDB");
  app.listen(PORT, () => console.log(`Server Has Lunched in Port : ${PORT}`));
});
mongoose.connection.on("error", (err) => {
  console.log(err);
});
