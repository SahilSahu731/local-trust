import mongoose from "mongoose";

const serviceSchema = new mongoose.Schema({
  provider: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Provider',
    required: true
  },
  category: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Category', // Links to the Category model
    required: true
  },
  name: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  priceType: {
    type: String,
    enum: ['fixed', 'hourly'],
    default: 'fixed'
  },
  duration: {
    type: Number, 
    required: true
  },
  images: [String],
  isFeatured: {
    type: Boolean,
    default: false 
  },
  approvalStatus: {
    type: String,
    enum: ['pending', 'approved', 'rejected'],
    default: 'pending' // Admin must approve new services
  }
}, { timestamps: true });

const Service = mongoose.model("Service", serviceSchema);

export default Service;