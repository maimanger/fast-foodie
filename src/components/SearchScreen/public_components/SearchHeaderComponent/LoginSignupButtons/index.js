import React from "react";
import './index.css';

const LoginSignupButtons = () => {
    return (
        <div className={"d-flex flex-nowrap homescreen-h-fit"}>
            <button className={"btn btn-primary me-2 text-nowrap"}>Log In</button>
            <button className={"btn homepage-signup-button text-nowrap"}>Sign Up</button>
        </div>
    )
}

export default LoginSignupButtons;
