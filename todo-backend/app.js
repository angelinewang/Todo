// import express from "express";
// import { connectToDB } from "./db/helpers.js";
// import "./db/helpers.js";
// import {apikey} from './middlewares/apikey.js';
// import errorHandling from './middlewares/errorHandling.js';
// import logger from './middlewares/logger.js';
// var createError = require('http-errors');
// var path = require('path');
// var cookieParser = require('cookie-parser');
// var logger = require('morgan');

// import router from './routes/todos.js';

// Middleware ...
// How do handle errors?

// fetch().then().then().catch()

// syntatic sugar

// async function startServer() {
//     try {
//       const app = express(); // Create our server
    
//       app.use(apikey);
  
//       app.use(express.json()); // Teach JSON
//       app.use(logger);
  
//       app.use(router); // Use some routes.
  
//       await connectToDB(); // Connect to the DB .. pause til we're done
  
//       console.log("Connected to Database");
//       app.use('/', router);
//       app.use(errorHandling);
//       app.listen(3000, () => {
//         console.log("Server listening on port 3000.");
//       }); // Listening
//     } catch (error) {
//       console.log(error);
//     }
//   }
  
//   startServer();

var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

// const cors = require('cors');
// app.use(cors({
//     origin: ['https://localhost:3001']
// }));

var router = require('./routes/todos');
// var usersRouter = require('./routes/users');


var app = express();

//dotenv needs to be before the database file, becasue database file needs the .env file
// require("dotenv").config()
require('./db/helpers.js')

require('./middlewares/cors.js')

//Equivalent to copy and pasting the info inside database.js file

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', router);
// app.use('/users', usersRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;