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
    enum: ['FULFILLED', 'NOT FULFILLED', 'IN PROCESS', 'CANCELLED'],
    default: 'NOT FULFILLED',
    required: true
  },
  timestamp: {
    created: {
      type: String,
      required: true
    },
    fulfilled: {
      type: String
    },
    in_process: {
      type: String
    },
    cancelled: {
      type: String
    }
  }
});

// Export order model
const Contact = module.exports = mongoose.model('order', orderSchema);