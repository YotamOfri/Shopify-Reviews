const mongoose = require("mongoose");

const expenseSchema = new mongoose.Schema({
  type: {
    type: String,
    required: true,
    enum: ["ads", "suppliers", "paymentCompany", "other"],
  },
  amount: { type: Number, required: true },
});
const siteSchema = new mongoose.Schema({
  url: { type: String, required: true, unique: true },
  income: { type: Number, required: true },
  products: [{ type: mongoose.Schema.Types.ObjectId, ref: "Product" }],
  expenses: [expenseSchema],
});

module.exports = mongoose.model("Site", siteSchema);
