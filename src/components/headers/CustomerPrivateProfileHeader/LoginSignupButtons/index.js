import React from "react";
import './index.css';
import {Link} from "react-router-dom";
import LoginSignupToggle from "./LoginSignupToggle";
import LoginSignupTwoButtons from "./LoginSignupTwoButtons";

const LoginSignupButtons = () => {
    return (
        <div className={"d-flex flex-nowrap homescreen-h-fit"}>
            <div className={"d-none d-md-flex"}>
                <LoginSignupTwoButtons />
            </div>

            <div className={"d-flex d-md-none"}>
                <LoginSignupToggle />
            </div>
        </div>
    )
}

export default LoginSignupButtons;
