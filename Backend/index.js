require('dotenv').config() 
const express = require('express');
const app = express();
const cors = require('cors');
const User = require('./models/user')






const unknownEndpoint = (req, res) => {
  res.status(404).send({error: 'unknown endpoint'})
}

let users = [
  {
    id: 1,
    firstName: 'Tobi',
    lastName: 'Toyo',
    email: 'toyo@dev.com'
  },
  {
    id: 2,
    firstName: 'James',
    lastName: 'John',
    email: 'john@dev.com'
  },
  {
    id: 3,
    firstName: 'Mary',
    lastName: 'Joseph',
    email: 'mary@dev.com'
  },
  {
    id: 4,
    firstName: 'Esther',
    lastName: 'Morde',
    email: 'esther@dev.com'
  },
]

app.use(cors())
app.use(express.json())

app.get('/', (req, res) => {
  res.send(' <h1> Curation</h1>  <p>Welcome to our Curation!</p>')
})

app.get('/users', (req, res) => {
  User.find({})
    .then(users => {
      res.json(users)
    })
})

app.get('/users/:id', (req, res) => {
  
  const user = users.find(user => user.id === Number(req.params.id))

  if(user) {
    res.json(user)
  }
  else {
    res.status(404).end()
  }
  
})
 
app.post('/users', (req,res) => {
  const user = req.body
  console.log(user)
  const newUser = new userModel.User(user)
  console.log(newUser)
  
  newUser
    .save()
    .then(result => {
      console.log('We have a new user!!')
      mongoose.connection.close()
    })
    .catch((err) => {
      console.error('Did not add new user??')
    })
  res.json(user)
})

app.delete('/users/:id', (req, res) => {
  const id = Number(req.params.id)
  const users = users.filter(user => user.id !== id)

  res.status(204).end()
})

app.use(unknownEndpoint)

const PORT = process.env.PORT || 3002

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})
