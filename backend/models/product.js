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
    quantity: {
        type: Number,
        min: 0
    },
    image: {
        src: {
            type: String,
            required: true
        },
        alt: {
            type: String,
            required: true
        }
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
        enum: ['VEGETABLES', 'FRUITS', 'GRAINS', 'MEAT', 'FISH', 'DRINKS'],
        required: true
    },
    sustainability_score: {
        packaging: {
            type: String,
            enum: ['PLASTIC', 'ALUMINUM', 'PAPER', 'GLASS', 'REUSABLE CONTAINER'],
            required: true
        },
        transportation_type: {
            type: String,
            enum: ['ELECTRIC CAR', 'CAR', 'CAR CARBON NEUTRAL'],
            required: true
        },
        organic: {
            type: Boolean,
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
module.exports = mongoose.model('product', productSchema);
