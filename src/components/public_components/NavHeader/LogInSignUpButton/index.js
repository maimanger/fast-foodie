import React from "react";
import "./index.css";

const LogInSignUp = () => {
    return (
        <div>
            <button className={"login-button btn fw-bold me-3"}>
                Log In
            </button>
            <button className={"sign-up-button btn btn-danger fw-bold"}>
                Sign Up
            </button>
        </div>


    )
}

export default LogInSignUp;