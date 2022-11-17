const mongoose = require('mongoose');

const orderSchema = mongoose.Schema({
  _id: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    auto: true,
  },
  product_id: {
    type: mongoose.Schema.Types.ObjectId,
    required: true
  },
  quantity: {
    type: Number,
    min: 0
  },
  buyer_id: {
    type: mongoose.Schema.Types.ObjectId,
    required: true
  },
  address: {
    street: {
      type: String,
      required: true
    },
    street_number: {
      type: String,
      required: true,
      min: 1
    },
    city: {
      type: String,
      required: true
    },
    postal_code: {
      type: String,
      required: true,
      length: 5
    }
  },
  state: {
    type: String,
    enum: ['NOT FULFILLED', 'FULFILLED', 'IN PROCESS', 'CANCELLED'],
    default: 'NOT FULFILLED',
    required: true
  },
  timestamp: {
    created: {
      type: Date,
      default: Date.now,
      required: true
    },
    fulfilled: {
      type: Date
    },
    in_process: {
      type: Date
    },
    cancelled: {
      type: Date
    }
  }
});

// Export order model
const Contact = module.exports = mongoose.model('order', orderSchema);
