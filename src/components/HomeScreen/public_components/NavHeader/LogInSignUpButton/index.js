import React from "react";
import "./index.css";

const LogInSignUpButton = () => {
    return (
        <div>
            <button className={"homescreen-header-login-button btn fw-bold me-3"}>
                Log In
            </button>
            <button className={"sign-up-button btn btn-danger fw-bold"}>
                Sign Up
            </button>
        </div>


    )
}

export default LogInSignUpButton;