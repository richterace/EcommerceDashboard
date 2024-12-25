import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => {
    const auth = localStorage.getItem("user");
    return (
        <div>
            <ul class="nav-ul">
                <li><Link to="/">Products</Link></li>
                <li><Link to="/add"> Add Products</Link></li>
                <li><Link to="/update">Update Products</Link></li>
                <li><Link to="/profile">Profile</Link></li>
                <li>{auth ? <Link to="/logout">Logout</Link> : <Link to="/signup">Sign Up</Link>}</li>
            </ul>
        </div>
    )
}

// we need to export it
export default Nav;