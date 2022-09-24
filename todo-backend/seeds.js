const mongoose = require('mongoose');
require('./db/helpers')
const Todo = require('./models/todos')

mongoose.connect('var express = require('express')
var cors = require('cors')
var app = express()

var allowlist = ['http://example1.com', 'http://example2.com']
var corsOptionsDelegate = function (req, callback) {
  var corsOptions;
  if (allowlist.indexOf(req.header('Origin')) !== -1) {
    corsOptions = { origin: true } // reflect (enable) the requested origin in the CORS response
  } else {
    corsOptions = { origin: false } // disable CORS for this request
  }
  callback(null, corsOptions) // callback expects two parameters: error and options
}

app.get('/products/:id', cors(corsOptionsDelegate), function (req, res, next) {
  res.json({msg: 'This is CORS-enabled for an allowed domain.'})
})

app.listen(80, function () {
  console.log('CORS-enabled web server listening on port 80')
})')
// Todo.deleteMany({}).then(() => {
//     console.log('Database connected!')
// })



// Todo.insertMany([

const seedTodos = [
    {
        name: 'Homework',
        // createdAt: 'September 20th 2022',
        status: false,
        // updatedAt: 'September 24th 2022'},
    },  
    {
        name: 'Project',
        // createdAt: 'September 19th 2022',
        status: true,
        // updatedAt: 'September 20th 2022'},   
    },  
    {
        name: 'Book Reading',
        // createdAt: 'September 20th 2022',
        status: false,
        // updatedAt: 'September 24th 2022'},  
    },  
    {
        name: 'Writing Journal',
        // createdAt: 'September 20th 2022',
        status: false,
        // updatedAt: 'September 24th 2022'},  
    },  
    {
        name: 'Phone Call',
        // createdAt: 'September 20th 2022',
        status: false,
        // updatedAt: 'September 24th 2022'},  
    },  
];
// ]).then(() => {
//     console.log("Data was asynchronously added")
// })
//Needs to be like the schema we passed in in the model

const seedDb = async () => {
    await Todo.deleteMany({});
    await Todo.insertMany(seedTodos);
};

seedDb().then(() => {
    mongoose.connection.close();
})