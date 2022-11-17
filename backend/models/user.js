const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    _id: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        auto: true,
    },
    name: {
        first: {
            type: String,
            required: true
        },
        last: {
            type: String,
            required: true
        }
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    banking_info: {
        iban: {
            type: String,
            length: 24
        }
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
    type: {
        type: String,
        enum : ['USER','PRODUCER', 'ADMIN'],
        default: 'NEW'
    }
});

// Export User model
module.exports = mongoose.model('user', userSchema);