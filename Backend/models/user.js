// require('dotenv').config()
const mongoose = require('mongoose')

// Connection to MongoDB
mongoose.set('strictQuery',false)
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log('Connected successfully to MongoDB')
  })
  .catch((err) => {
    console.error('Did not connect with MongoDb')
  })


 // Create a User Schema

const userSchema = new mongoose.Schema({
  userName: String,
  email: String,
  password: String
})

// Modifying the objects returned by mongoose

userSchema.set('toJSON', {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString()
    delete returnedObject._id
    delete returnedObject.__v
  }
})


// Creating a model from the schema

module.exports = mongoose.model('User', userSchema)




// // Creating new users from the model

// const user = new User({
//   userName: 'String2',
//   email: 'email2@string.com',
//   password: "passwordString2"
// })


// // saving new user

// user
//   .save()
//   .then (result => {
//     console.log('We have a new user!!')
//     mongoose.connection.close()
//   })