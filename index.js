const mongoose = require('mongoose');
const User = require('./User')

mongoose.connect('mongodb://localhost/dbtest', () => {
    console.log('Connecting to MongoDB');
}, e => console.log(e));


// const createUser = async () => {
//     const user = new User({name: 'andres', age: 22})
//     await   user.save()
//     console.log(user)
// }

// createUser()

const createUser = async () => {

    try {
        const user = await User.create({
            name: 'kaileon', 
            age: 21,
            email: 'kaileon@gmail.com',
            hobbies: ['Bowling', 'Dancing'],
            address: {
                street: 'Mountain street'
            }
    
        })
        console.log(user)
    } catch (error) {
        console.log(error.message)
    }
  
}

createUser()

// const updateUser = async () => {
//     const user = await User.create({name: 'kaileon', age: 21})
//     user.name = 'Leon'
//     await   user.save()
//     console.log(user)
// }

// updateUser()