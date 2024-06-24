import mongoose from "mongoose";

const PaymentSchema = new mongoose.Schema({
  job: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Job',
    required: true
  },
  amount: {
    type: Number,
    required: true
  },
  status: {
    type: String,
    enum: ['pending', 'completed'],
    default: 'pending'
  },
  // Add other payment-related fields as needed
}, { timestamps: true });


module.exports = mongoose.model('Payment', PaymentSchema);

