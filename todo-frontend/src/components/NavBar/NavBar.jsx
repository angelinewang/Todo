import React from 'react';
import './NavBar.css';
import {Link} from 'react-router-dom';

function NavBar() {

    return (
     <div>
        <ul className="navbar-todo">
            <div className="right-side">
            <li className="title is-4"><Link to="/home">Todo App</Link></li>
            </div>
            <div className="left-side">
            <li><Link to="/create">Create Todo</Link></li>
            <li><Link to="/home">Home</Link></li>
            </div>
        </ul>
     </div>
    )

};

export default NavBar
