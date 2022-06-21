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
        valide: {
            validator: v => v % 2 === 0,
            message: props => `{props.value} is not an even number`
        }
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
    bestFriend: {
        type: mongoose.SchemaTypes.ObjectId,
        ref: "User"
    },
    hobbies: [String],
    address: addressSchema
})

userSchema.methods.sayHi = function () {
    console.log(`Hello my name is  ${this.name}`)
}

userSchema.statics.findByName = function (name) {
    return this.find({name: new RegExp(name, 'i')})
}

userSchema.query.byName = function (name) {
    return this.where({name: new RegExp(name, 'i')})
}

userSchema.virtual('namedEmail').get(function () {
    return `${this.name} <${this.email}>`
})

userSchema.pre('save', function (next) {
    this.updatedAt = Date.now()
    next()
})

userSchema.post('save', function (next) {
    doc.sayHi()
    next()
})


module.exports = mongoose.model('User', userSchema);