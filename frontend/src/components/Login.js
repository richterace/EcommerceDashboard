import React, { useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom"

const Login = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
    useEffect(() => {
        const auth = localStorage.getItem('user')
        if (auth) {
            navigate('/')
        }
    })
    const handleLogin = async () => {
        let result = await fetch("http://localhost:5000/login", {
            method: 'post',
            body: JSON.stringify({ email, password }),
            headers: {
                'Content-Type': 'application/json'
            }
        });
        result = await result.json();
        console.warn(result)
        if (result.name) {
            localStorage.setItem("user", JSON.stringify(result))
            navigate('/')
        } else {
            alert('Please enter valid details.')
        }

    }
    return (
        <div className="login">
            <h1>
                Login
                <input className="inputBox" type="text" placeholder="Enter email"
                    onChange={(e) => setEmail(e.target.value)} value={email} />
                <input className="inputBox" type="password" placeholder="Enter password"
                    onChange={(e) => setPassword(e.target.value)} value={password} />
                <button onClick={handleLogin} className="LoginButton" type="button">Login</button>
            </h1>
        </div>

    )
};

export default Login;