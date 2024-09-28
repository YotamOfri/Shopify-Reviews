const mongoose = require("mongoose");
const costSchema = new mongoose.Schema({
  type: { type: String, required: true, enum: ["supplier", "ad", "other"] },
  amount: { type: Number, required: true },
  description: { type: String },
});

const productVariationSchema = new mongoose.Schema({
  name: { type: String, required: true },
  price: { type: Number, required: true },
});
const productSchema = new mongoose.Schema({
  name: { type: String, required: true },
  variations: [productVariationSchema],
  sales: { type: Number, required: true },
  costs: [costSchema],
});

module.exports = mongoose.model("Product", productSchema);
module.exports = mongoose.model("ProductVariation", productVariationSchema);
