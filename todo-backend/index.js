import express from "express";
import { connectToDB } from "./db/helpers.js";
import {apikey} from './middlewares/apikey.js';
import errorHandling from './middlewares/errorHandling.js';
import logger from './middlewares/logger.js';

import router from './routes/todos.js';

// Middleware ...
// How do handle errors?

// fetch().then().then().catch()

// syntatic sugar

async function startServer() {
    try {
      const app = express(); // Create our server
    
      app.use(apikey);
  
      app.use(express.json()); // Teach JSON
      app.use(logger);
  
      app.use(router); // Use some routes.
  
      await connectToDB(); // Connect to the DB .. pause til we're done
  
      console.log("Connected to Database");
  
      app.use(errorHandling);
      app.listen(3000, () => {
        console.log("Server listening on port 3000.");
      }); // Listening
    } catch (error) {
      console.log(error);
    }
  }
  
  startServer();