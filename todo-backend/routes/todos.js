import express from "express";
const router = express.Router();
import todoController from '../controllers/todoController.js';

// In here I want all to my routes.

const app = express();
import cors from 'cors';

app.use(cors())

router
  .route("/todos")
  .get(todoController.getAllTodos)
  .post(todoController.createTodo);

router
  .route("/todos/:id")
  .get(todoController.getSingleTodo)
  .patch(todoController.updateTodo)
  .delete(todoController.deleteTodo);

export default router
