import {React, useState, useEffect} from 'react';
import './DetailPage.css';
import axios from 'axios';
import {Link, useParams, useNavigate} from 'react-router-dom';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';

function DetailPage() {

    const MySwal = withReactContent(Swal)
    const [todo, setTodo] = useState([])
    let navigate = useNavigate()

    let todoId = useParams().id

    const [checked, setChecked] = useState()

    useEffect(() => {
        fetchTodo()
     }, [])
 
     let fetchTodo = () => {
         axios.get(`/todos/${todoId}`, {headers: {
            'x-api-key': 'testTESTtest'
        }})
         .then((res) => {
             setTodo(res.data) // for Axios
             // setTodos(res)
             setChecked(res.data.status)
         });
     }
     let deleteTodo = () => {
        axios.delete(`/todos/${todoId}`, {headers: {
            'x-api-key': 'testTESTtest'
        }})
        .then(res => console.log(res.data)) 
        .then(() =>  {MySwal.fire({
                title: <strong>Todo Deleted!</strong>,
                html: <i>Your Todo was deleted</i>,
                icon: 'success'
            })
        })
        .then(() => { navigate(`/home`)})
    }

    let handleClick = () => {
        setTodo({...todo, status: !todo.status})
        handleSubmit()
    }
    let handleSubmit = () => {
    console.log('form was submitted!')
    axios.patch(`/todos/${todoId}`, {...todo, status: !todo.status}, {headers: {
        'x-api-key': 'testTESTtest'
    }})
    .then((res) => {
     console.log(res.data)
     fetchTodo()
    })
    }

    return (
        <div className="detail-container">
        {todo ? (
  
            <article className="message is-link" key={todo._id}>
                <div className="message-header">
                    <p><strong>Task</strong></p>
                    <div className="buttons-container">
                    <button className="delete" aria-label="delete" onClick={() => {deleteTodo(todo._id)}}></button>
                    <form className="form-body" >
                <label>Completed?</label>
                <input className="status-input" name="status" type="checkbox" defaultChecked={checked} onClick={handleClick}></input>
                </form>
                    </div>
                </div>
                    <div className="message-body">
                    <p>{todo.name}</p>
                    </div>
                    <p className="date">Created at {todo.createdAt}</p>
                    <p className="date">Completed at {todo.updatedAt ? (todo.updatedAt) : null}</p>
            </article>
                ) : null
        }
    </div>)
};

export default DetailPage