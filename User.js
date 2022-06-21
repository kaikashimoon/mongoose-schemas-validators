const mongoose = require('mongoose');

const addressSchema = new mongoose.Schema({ 
    street: String,
    city: String,
})


const userSchema = new mongoose.Schema({    
    name: String,
    age: {
        type: Number,
        min: 1,
        max: 100,
    },
    email: {
        type: String,
        required: true,
        lowercase: true
    },
    createdAt: {
        type: Date,
        inmutable: true,
        default: () => new Date(),
    },
    updatedAt: {
        type: Date,
        default: () => new Date(),
    },
    bestFriend: mongoose.SchemaTypes.ObjectId,
    hobbies: [String],
    address: addressSchema
})

module.exports = mongoose.model('User', userSchema);