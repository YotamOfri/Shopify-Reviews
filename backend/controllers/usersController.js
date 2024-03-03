const asyncHandler = require("express-async-handler");
const bcrypt = require("bcrypt");
const User = require("../models/User");
const authHelpers = require("../utils/auth/authHelpers");
// @desc Get all users
// @route GET /users
// @accsess Private
const getAllUsers = asyncHandler(async (req, res) => {
  // if (!req.access) return res.status(403).json({ message: "Not Allowed" });
  const users = await User.find().select("-password");
  if (!users) return res.status(400).json({ message: "No Users Found" });
  else res.json({ users: users });
});
// @desc Create new user
// @route POST /users
// @accsess Private
const createNewUser = asyncHandler(async (req, res) => {
  const { username, email, password, accsess, giveCookie } = req.body;
  // Confirm data
  if (!username || !email || !password)
    return res.status(400).json({ message: "All Fields are required" });
  // Chekc for duplicates
  const duplicate = await User.findOne({ username }).lean().exec();
  if (duplicate) return res.status(409).json({ message: "Username Taken" });
  const emailduplicate = await User.findOne({ email }).lean().exec();
  if (emailduplicate) return res.status(409).json({ message: "Email Taken" });
  // Hash password
  const hasedPassword = await bcrypt.hash(password, 10);
  const userObject = { username, email, password: hasedPassword, accsess };
  // Create and Store User
  const user = await User.create(userObject);
  // gives back cookie
  if (user && giveCookie) {
    const accessToken = authHelpers.generateTokensAndSetCookie(res, user);
    return res.status(202).json(user);
  } else if (user)
    return res.status(202).json({ message: `User ${user.username} Created!` });
  else return res.status(400).json({ message: "Invalid user data received" });
});
// @desc Update user
// @route Patch /users
// @accsess Private
const updateUser = asyncHandler(async (req, res) => {
  const { id, username, email, password, oldpassword, access, workouts } =
    req.body;
  const user = await User.findById(id || req.id).exec();
  if (!user) return res.status(400).json({ message: "User not found" });
  const duplicate = await User.find({ username }).lean().exec();
  if (duplicate?.length > 0 && duplicate[0]?._id.toString() !== (id || req.id))
    return res.status(409).json({ message: "Username Taken" });
  user.username = username || user.username;
  user.email = email || user.email;
  user.workouts = workouts || user.workouts;
  user.access = access || user.access;
  if (password) {
    const match = await bcrypt.compare(oldpassword, user.password);
    if (!match)
      return res.status(401).json({
        message:
          "Invalid password. Please enter the correct password associated with your account.",
      });
    if (password === oldpassword)
      return res.status(409).json({
        message: "Please choose a password distinct from the previous 5.",
      });
    user.password = await bcrypt.hash(password, 10);
  }
  const updatedUser = await user.save();
  res.status(202).json({ message: `${updatedUser.username} updated` });
});
// @desc delete user
// @route Patch /users
// @accsess Private
const deleteUser = asyncHandler(async (req, res) => {
  const { id } = req.body;
  if (!id) return res.status(400).json({ message: "id is required" });
  const user = await User.findById(id).exec();
  if (!user) return res.status(400).json({ message: "user not found" });
  const result = await user.deleteOne();
  res.json({
    message: `The username : ${user.username} with the ID : ${user._id} was deleted`,
  });
});
const getUser = asyncHandler(async (req, res) => {
  const id = req.id;
  if (!id) return res.status(400).json({ message: "id is required" });
  const user = await User.findById(id).select("-password").exec();
  if (!user) return res.status(400).json({ message: "user not found" });
  res.status(202).json(user);
});
module.exports = {
  getAllUsers,
  createNewUser,
  updateUser,
  deleteUser,
  getUser,
};
