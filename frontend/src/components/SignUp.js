import React, { useState } from "react";

const SignUp = () => {
    // decalre the useStates variable to be used for getting the necessary inputs
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const collectData = () => {
        console.warn(name, email, password);
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