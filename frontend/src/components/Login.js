import React, { useState } from 'react';

const Login = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const handleLogin = () => {
        console.warn(email, password)
    }
    return (
        <div className="login">
            <h1>
                Login
                <input className="inputBox" type="text" placeholder="Enter email"
                    onChange={(e) => setEmail(e.target.value)} value={email} />
                <input className="inputBox" type="password" placeholder="Enter password"
                    onChange={(e) => setPassword(e.target.value)} value={password} />
                <button onClick={handleLogin} classname="LoginButton" type="button">Login</button>
            </h1>
        </div>

    )
};

export default Login;