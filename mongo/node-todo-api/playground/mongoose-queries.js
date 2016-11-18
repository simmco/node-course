const {ObjectId} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

/*var id = '582eeafbb7734a9806327fe9';

if(!ObjectId.isValid(id)) {
  console.log('ID not valid');w
}

Todo.find({
  _id: id
}).then((todos) => {
  console.log('Todos', todos);
});

Todo.findOne({
  _id: id
}).then((todo) => {
  console.log('Todo', todo);
});

Todo.findById(id).then((todo) => {
  if (!todo) {
    return console.log('Id not found');
  }
  console.log('Todo by Id', todo);
}).catch((e) => console.log(e));*/

User.findById('582ecf71088f658404052799').then((user) => {
  if (!user) {
    return console.log('Id not found');
  }
  console.log('User by id: ', user);
}).catch((e) => { console.log(e);});
