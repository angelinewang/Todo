// var express = require('express');
// const TodoCtrl = require('../controllers/todoController.js')

// // In here I want all to my routes.

// const app = express();
// import cors from 'cors';

// app.use(cors())

// var router = express.Router();

// router 
//   .route('/')
//   .get(function(req,res) {
//     res.redirect('/todos')
//   });

// router
//   .route("/todos")
//   .get(todoController.getAllTodos)
//   .post(todoController.createTodo);

// router
//   .route("/todos/:id")
//   .get(todoController.getSingleTodo)
//   .patch(todoController.updateTodo)
//   .delete(todoController.deleteTodo);

// export default router

var express = require('express');
var router = express.Router();
const TodoCtrl = require('../controllers/todoController.js')

/* GET home page. */

router.get('/', function(req, res) {
  res.redirect('/todos')
});

//Get ALL Route
router.get('/todos', TodoCtrl.getAllTodos)

//Delete Tweet Route
router.delete('/todos/:id', TodoCtrl.deleteTodo)

router.get('/todos/:id', TodoCtrl.getSingleTodo)

router.post('/todos', TodoCtrl.createTodo)

router.patch('/todos/:id', TodoCtrl.updateTodo)

module.exports = router;
