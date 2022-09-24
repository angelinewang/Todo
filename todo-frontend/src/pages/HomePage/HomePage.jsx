import React, {useEffect, useState} from 'react'
import './HomePage.css'
import axios  from 'axios'
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import {Link, useNavigate} from 'react-router-dom'

// Can use axios
function HomePage() {

    const MySwal = withReactContent(Swal)
    const [todos, setTodos] = useState([])
    let navigate = useNavigate()

    useEffect(() => {
       fetchTodos()
    }, [])

    let fetchTodos = () => {
        axios.get("/todos", {
            headers: {
                'x-api-key': 'testTESTtest'
            }
        })
        .then((res) => {
            setTodos(res.data) // for Axios
            // settodos(res)
        });
    }

    let deleteTodo = (id) => {
        axios.delete(`/todos/${id}`, {headers: {
            'x-api-key': 'testTESTtest'
        }})
        .then(res => console.log(res.data)) 
        .then(() =>  {MySwal.fire({
                title: <strong>Task Deleted!</strong>,
                html: <i>Your task was deleted</i>,
                icon: 'success'
            })
        })
        .then(() => fetchTodos())
    }

    // let handleClick = (e) => {
    //     let id = e.target._id
    //      let fetchTodo = () => {
    //          axios.get(`/todos/${id}`)
    //          .then((res) => {
    //              setTodo(res.data) // for Axios
    //              // setTweets(res)
    //          });
    //      }

    //     console.log(id)
    //     fetchTodo();

    //     setTodo({...todo, [e.target.name]: !e.target.value})
    //     e.preventDefault()
    //     console.log('form was submitted!')
    //     handleSubmit(id)
    //  }

    //  let handleSubmit = (id) => {
    //     axios.patch(`/todos/${id}`, {...todo}, {headers: {
    //         'x-api-key': 'testTESTtest'
    //     }})
    //     .then((res) => {
    //      console.log(res.data)
    //      navigate(`/todos`)
    //     })
    //  }


    // let handleClick = (id) => {
    //     setTodo({...todo, status: !todo.status})
    //     handleSubmit()
    // }
    let handleSubmit = (todoId) => {
    console.log('form was submitted!')
        axios.get(`/todos/${todoId}`, {headers: {
           'x-api-key': 'testTESTtest'
       }})
        .then((res) => {
            axios.patch(`/todos/${todoId}`, {...res.data, status: !res.data.status}, {headers: {
                'x-api-key': 'testTESTtest'
            }})
            .then((res) => {
            console.log(res.data)
            fetchTodos()
            })
        });
    }

  return (
    <div className="todo-container">
        <h1 className="title">Tasks</h1>
        {todos.map((todo, idx) => (
            todo ? (
        <article className="message is-link" key={todo._id}>
          
            <div className="message-header">
                <p><strong>Task</strong></p>
                <div className="buttons-container">
                <button className="delete" aria-label="delete" onClick={() => {deleteTodo(todo._id)}}></button>
                <form className="form-body" >
                <label>Completed?</label>
                <input className="status-input" name="status" type="checkbox" defaultChecked={todo.status} onClick={() => {handleSubmit(todo._id)}}></input>
                </form>
                </div>
            </div>
                <div className="message-body">
                <Link to={`/detail/${todo._id}`}>
                <p>{todo.name}</p>
                </Link>
                </div>
                <p className="date">Created at {todo.createdAt}</p>
                <p className="date">Completed at {todo.updatedAt ? (todo.updatedAt) : null}</p>
       
        </article>
            ) : null
        ))}
    </div>
  )
}

export default HomePage