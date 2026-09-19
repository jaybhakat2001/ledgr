import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
  name: String,
  sku: String,
  category: String,
  price: Number,
  stockQty: { type: Number, default: 0 },
  reorderPoint: { type: Number, default: 10 },
}, { timestamps: true })

export default mongoose.model('Product', productSchema)