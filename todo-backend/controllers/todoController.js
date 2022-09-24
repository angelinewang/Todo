import Todo from "../models/todos.js";
import {CastError} from "mongoose";

async function getAllTodos(req,res,next) {
    try {
        const todos = await Todo.find();
        res.json(todos);
    } catch (error) {
        next(error);
    }
}

async function getSingleTodo(req, res, next) {
    try {
        const todo = await Todo.findById(req.params.id);

        if(todo) {
            res.json(todo);
        } else {
            res.json({error: true, message: "To-do not found."});
        }
    } catch (error) {
        if (error instanceof CastError) {
            res.status(400).send({error: "Invalid id"});
        } else {
            next(error);
        }
    }
}

async function updateTodo(req,res,next) {
    try {
        const updatedTodo = await Todo.findByIdAndUpdate(req.params.id,req.body, {
            new: true,
        });

        res.json(updatedTodo);
    } catch (error) {
        next(error);
    }
}

async function createTodo(req,res,next) {
    try {
        const createdTodo = await Todo.create(req.body);
        res.json(createdTodo); 
    } catch (error) {
        res 
        .status(400)
        .send({error:"You need to provide the name, created date, completed and completed date."});
    }
}

async function deleteTodo(req,res,next){
    try {
        await Todo.findByIdAndDelete(req.params.id);
        res.status(204).send();
    } catch (error) {
        next(error);
    }
}

export default {
    getAllTodos,
    getSingleTodo,
    updateTodo,
    deleteTodo,
    createTodo,
};