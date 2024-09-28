const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const memberSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  role: {
    type: String,
    required: true,
    enum: ["founder", "admin", "partner", "member"],
  },
});
const teamSchema = new mongoose.Schema({
  name: { type: String, required: true },
  sites: [{ type: mongoose.Schema.Types.ObjectId, ref: "Site" }],
  members: [memberSchema],
});
module.exports = mongoose.model("Team", teamSchema);
