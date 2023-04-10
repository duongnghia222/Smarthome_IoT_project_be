require('dotenv').config()
const mongoose = require('mongoose')
mongoose.set('strictQuery', true)
const User = require("./../models/user.model")

mongoose.connect(process.env.MONGODB_URL).then(()=>{
    console.log('Connected to Mongo DB')
}).catch(err => console.log(err))


User.find({})
.then(function(data){
    console.log('data:', data)
})
.catch(function(e){
    console.log('error', e)
})

module.exports = mongoose;