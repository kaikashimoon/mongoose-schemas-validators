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

// const createUser = async () => {

//     try {
//         const user = await User.create({
//             name: 'jane', 
//             age: 21,
//             email: 'jane@gmail.com',
//             hobbies: ['Bowling', 'Dancing'],
//             address: {
//                 street: 'Mountain street'
//             }
    
//         })
//         console.log(user)
//     } catch (error) {
//         console.log(error.message)
//     }
  
// }

// createUser()

// const updateUser = async () => {
//     const user = await User.create({name: 'kaileon', age: 21})
//     user.name = 'Leon'
//     await   user.save()
//     console.log(user)
// }

// updateUser()

// const userFind= async () => {  
//     try {
//         const user = await User.findById('62b1e43c2db346037a099d51')
//         console.log(user)
//     } catch (error) {
        
//     }
// }

// userFind()

// const userDelete= async () => {  
//     try {
//         const user = await User.findByIdAndDelete('62b1d2f795a14d4b5e4a0212')
//         console.log(user)
//     } catch (error) {
        
//     }
// }

// userDelete()

// const userQuery= async () => {  
//     try {
//         const user = await User.where('name').equals('kaileon')
//         console.log(user)
//     } catch (error) {
        
//     }
// }

// userQuery()

// const userQuery= async () => {  
//     try {
//         const user = await User.where('age')
//         .gt(15)
//         .where('name')
//         .equals('kashi')
//         .populate("bestFriend")
//         .limit(2)
//         // .select('age')
//         // user[0].bestFriend = "62b20187593cdf29b9d37246"
//         // await user[0].save()
//         console.log(user)
//     } catch (error) {
        
//     }
// }

// userQuery()

const findUser = async () => {
    const user = await User.findOne({name: 'kaileon'})
    console.log(user)
    console.log(user.namedEmail)
}


findUser()
