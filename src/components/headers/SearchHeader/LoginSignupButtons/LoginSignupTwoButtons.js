import React from "react";
import {Link} from "react-router-dom";

const LoginSignupTwoButtons = () => {
    return (
        <div className={"d-flex flex-nowrap"}>
            <Link to={"/login"}>
                <button className={"btn btn-primary me-2 text-nowrap"}>Log In</button>
            </Link>
            <Link to={"/register"}>
                <button className={"btn homepage-signup-button text-nowrap"}>Sign Up</button>
            </Link>
        </div>
    )

}

export default LoginSignupTwoButtons;