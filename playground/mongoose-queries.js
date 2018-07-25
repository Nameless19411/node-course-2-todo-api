var {ObjectID} = require('mongodb')

var {mongoose} = require('./../server/db/mongoose')
var {Todo} = require('./../server/models/todo')
var {User} = require('./../server/models/user')

// id = '5b5564d53260af0660aeb034'

// if(!ObjectID.isValid(id)){
//     console.log('Id not valid')
// }

// Todo.find({
//     _id: id
// }).then((todos) => {
//     console.log('find: ', todos)
// })

// Todo.findOne({
//     _id: id
// }).then((todo) => {
//     console.log('findOne: ', todo)
// })

// Todo.findById(id).then((todo) => {
//     if(!todo){
//         return console.log('Id not found')
//     }
//     console.log('findById: ', todo)
// }).catch((e) => console.log(e))

User.findById('5b515df81afb7904450ce564').then((user) => {
    console.log(JSON.stringify(user, undefined, 2))
}).catch((e) => console.log(e))