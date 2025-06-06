import React from "react";
import { Navigate, Outlet } from 'react-router-dom';

// to navigate and authneticate if the user logged in
const PrivateComponent = () => {
    const auth = localStorage.getItem("user");
    return auth ? <Outlet /> : <Navigate to="signup" />
}

export default PrivateComponent