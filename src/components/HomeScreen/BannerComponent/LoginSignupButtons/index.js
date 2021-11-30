import React from "react";
import './index.css';

const LoginSignupButtons = () => {
    return (
        <div>
            <button className={"btn btn-primary me-2"}>Log In</button>
            <button className={"btn text-white homepage-signup-button"}>Sign Up</button>
        </div>
    )
}

export default LoginSignupButtons;
