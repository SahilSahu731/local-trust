import mongoose from "mongoose";


const categorySchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true,
    trim: true
  },
  slug: {
    type: String,
    required: true,
    unique: true
    // Note: Generate this from the name (e.g., "Home Cleaning" -> "home-cleaning")
  },
  description: {
    type: String
  },
  iconUrl: {
    type: String // URL to an icon representing the category
  }
}, { timestamps: true });

const Category = mongoose.model('Category', categorySchema);

export default Category;