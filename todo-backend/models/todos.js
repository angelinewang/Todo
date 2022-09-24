import mongoose from "mongoose";

const todoSchema = new mongoose.Schema({
  name: { type: String, required: true },
  createdDate: { type: String, required: true },
  completed: {type: Boolean, required: false},
  completedDate: {type: String, required: true}
}, {
    timestamps: true
});

//CREATE Only be able to add Name and createdDate is auto-added with timestamp of right now

//GET ALL Gets everything, marked completed or no, and has 2 buttons: 1. Delete 2. Mark completed

//GET SINGLE Gets the todo clicked on, has 2 buttons: 1. Delete 2. Mark as completed

//DELETE Once button is clicked, deletes and brings user back to home page and gets all todos, no matter where the origin of the delete query was

//UPDATE Should only be able to update completed section, and upon update, the completed time is auto-added with the timestamp

const todoModel = mongoose.model("Todo", todoSchema);

export default todoModel;
