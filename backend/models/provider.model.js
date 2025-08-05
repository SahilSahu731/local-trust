import mongoose from "mongoose";


const providerSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User', 
    required: true,
    unique: true
  },
  businessName: {
    type: String,
    required: true
  },
  bio: {
    type: String,
    maxlength: 500
  },
  serviceLocations: [String], 
  verificationStatus: {
    type: String,
    enum: ['unverified', 'pending', 'verified', 'rejected'],
    default: 'unverified'
  },
  documents: [{
    documentType: String, // e.g., 'ID_PROOF', 'BUSINESS_LICENSE'
    fileUrl: String
  }],
  averageRating: {
    type: Number,
    default: 0
  },
  reviewCount: {
    type: Number,
    default: 0
  }
}, { timestamps: true });

const Provider = mongoose.model("Provider", providerSchema);

export default Provider;