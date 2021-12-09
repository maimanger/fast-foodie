import React from "react";
import './index.css';
import {Link} from "react-router-dom";

const LoginSignupButtons = () => {
    return (
        <div>
            <Link to={"/login"}>
                <button className={"btn btn-primary me-2"}>Log In</button>
            </Link>
            <Link to={"/register"}>
                <button className={"btn text-white homepage-signup-button"}>Sign Up</button>
            </Link>
        </div>
    )
}

export default LoginSignupButtons;
