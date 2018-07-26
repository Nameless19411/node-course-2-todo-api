var {ObjectID} = require('mongodb')

var {mongoose} = require('./../server/db/mongoose')
var {Todo} = require('./../server/models/todo')
var {User} = require('./../server/models/user')

// Todo.remove({}).then((result) => {
//     console.log(result)
// })

Todo.findByIdAndRemove('5b582f6894ee00087809cdb6').then((todo) => {
    console.log(todo)
})