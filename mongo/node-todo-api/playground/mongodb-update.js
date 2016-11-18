const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if(err) {
    return console.log('Unable to connect to MongoDB server');
  }
  console.log('Connected to MongoDB server');

  //findOneAndUpdate
  /*db.collection('Todos').findOneAndUpdate({
    _id: new ObjectID('582eb85f391b2aa8b1d0e3a4')
  }, {
    $set: {
      completed: true
    }
  }, {
    returnOriginal: false
  }).then((result) => {
    console.log(result);
  });*/

  db.collection('Users').findOneAndUpdate({
    _id: new ObjectID('582e08f8fb39e103ca218a94')
  }, {
    $set: {
      name: "Mike"
    }
  }, {
    returnOriginal: false
  }).then((result) => {
    console.log(result);
  });

  // db.close();
});
