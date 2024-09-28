const User = require("../../models/User");
const bcrypt = require("bcrypt");
const createUser = async (userData) => {
  const { username, email, password } = userData;
  // Check for duplicates
  const duplicateUsername = await User.findOne({ username }).lean().exec();
  if (duplicateUsername) throw new Error("Username Taken");
  const duplicateEmail = await User.findOne({ email }).lean().exec();
  if (duplicateEmail) throw new Error("Email Taken");
  // Hash password
  const hashedPassword = await bcrypt.hash(password, 10);
  // Create User Object
  const userObject = { username, email, password: hashedPassword, teams: [] };
  // Create and Store User
  const user = await User.create(userObject);
  return user;
};

module.exports = { createUser };
