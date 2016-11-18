const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if(err) {
    return console.log('Unable to connect to MongoDB server');
  }
  console.log('Connected to MongoDB server');

  //delteMany
  /*db.collection('Todos').deleteMany({text: 'Eat lunch'}).then((result) => {
    console.log(result);
  });*/

  //deleteOne
  /*db.collection('Todos').deleteOne({text: 'Eat lunch'}).then((result) => {
    console.log(result);
  });*/

  //fineOneAndDelete
  //db.collection('Todos').findOneAndDelete({completed: false}).then((result) => {
  //  console.log(result);
  //});

  db.collection('Users').deleteMany({name: 'Dominik'});
  // db.close();
});
