import React from "react";
import './index.css';
import {Link} from "react-router-dom";

const LoginSignupButtons = () => {
    return (
        <div className={"d-flex flex-nowrap homescreen-h-fit"}>
            <Link to={"/login"}>
                <button className={"btn btn-primary me-2 text-nowrap"}>Log In</button>
            </Link>
            <Link to={"/register"}>
                <button className={"btn homepage-signup-button text-nowrap"}>Sign Up</button>
            </Link>
        </div>
    )
}

export default LoginSignupButtons;
