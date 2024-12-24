import React, { useState } from "react";
import { useNavigate } from "react-router-dom"


const SignUp = () => {
    // decalre the useStates variable to be used for getting the necessary inputs
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();
    const collectData = async () => {
        console.warn(name, email, password);
        let result = await fetch("http://localhost:5000/register", {
            method: 'post',
            body: JSON.stringify({ name, email, password }), // we need to change and use json.stringify when usiong mongodb
            headers: {
                'Content-Type': 'application/json'
            }
        });
        result = await result.json();
        console.warn(result);
        navigate('/');
    }

    return (
        <div className="register">
            <h1>
                Register
                <input className="inputBox" type="text" placeholder="Enter Name"
                    value={name} onChange={(event) => setName(event.target.value)}

                />
                <input className="inputBox" type="text" placeholder="Enter Email Address"
                    value={email} onChange={(event) => setEmail(event.target.value)}

                />
                <input className="inputBox" type="password" placeholder="Enter Password"
                    value={password} onChange={(event) => setPassword(event.target.value)}
                />

                <button onClick={collectData} className="SignButton" type="button">SIGN UP</button>
            </h1>
        </div>
    )
}

export default SignUp;