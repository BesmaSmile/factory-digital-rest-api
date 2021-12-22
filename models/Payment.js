const mongoose = require('mongoose');

const { Schema } = mongoose;

const paymentSchema = new Schema({
  amount: {
    type: Number,
    required: true,
  },
  reimbursements: [Number],
}, { timestamps: true });

module.exports = mongoose.model('Payment', paymentSchema);
