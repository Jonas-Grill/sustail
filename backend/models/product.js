const mongoose = require('mongoose');

const productSchema = mongoose.Schema({
  _id: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    auto: true,
  },
  name: {
    type: String,
    required: true
  },
  seller_id: {
    type: mongoose.Schema.Types.ObjectId,
    required: true
  },
  price: {
    amount_in_euros: {
      type: Number,
      min: 0,
      required: true
    },
    metric: {
      type: String,
      enum: ['KILOGRAM', 'UNIT', 'LITER'],
      required: true
    }
  },
  type: {
    type: String,
    enum: ['VEGETABLE', 'FRUIT', 'GRAIN', 'ANIMAL PRODUCT', 'BEVERAGE'],
    required: true
  },
  sustainability_score: {
    packaging: {
      type: String,
      enum: ['PLASTIC', 'CARTON'],
      required: true
    },
    transportation_type: {
      type: String,
      enum: ['ELECTRIC CAR', 'FUEL DRIVEN', 'BIKE'],
      required: true
    }
  },
  weight_in_g: {
    type: Number,
    min: 0
  },
  nutrition_per_100g: {
    energy: {
      type: Number,
      min: 0,
      required: true
    },
    fat: {
      total: {
        type: Number,
        min: 0,
        required: true
      },
      saturates: {
        type: Number,
        min: 0,
        required: true
      }
    },
    carbohydrate: {
      total: {
        type: Number,
        min: 0,
        required: true
      },
      sugar: {
        type: Number,
        min: 0,
        required: true
      }
    },
    protein: {
      type: Number,
      min: 0,
      required: true
    },
    salt: {
      type: Number,
      min: 0,
      required: true
    }
  },
  description: {
    type: String,
    required: true
  }
});

// Export product model
const Contact = module.exports = mongoose.model('product', productSchema);