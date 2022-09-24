import {React, useState, useEffect} from 'react';
import './CreatePage.css';
import axios from 'axios';
import {useNavigate} from 'react-router-dom';

function CreatePage() {

    const [todo, setTodo] = useState({
        name: ''
    })

    let navigate = useNavigate()

    let handleChange = (e) => {
        setTodo({...todo, [e.target.name]: e.target.value})
    }

    let handleSubmit = (e) => {
        e.preventDefault()
        console.log('form was submitted!')
        axios.post('/todos', {...todo}, {headers: {
            'x-api-key': 'testTESTtest'
        }})
        .then((res) => {
            console.log(res.data)
            navigate(`/detail/${res.data._id}`)
        })
    }
return (
    <div>
        <div className="form-container">
            <form onSubmit={handleSubmit} className="form-body">
                <label>Enter Task</label>
                <textarea className="name-input" name="name" value={todo.name} onChange={handleChange}></textarea>
                <button type="Submit" value="Add Task">Add Task!</button>
            </form>
        </div>
    </div>
)
}

export default CreatePage