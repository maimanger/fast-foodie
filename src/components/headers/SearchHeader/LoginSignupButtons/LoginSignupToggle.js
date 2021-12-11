import React from "react";
import {Link} from "react-router-dom";

const LoginSignupToggle = () => {
    return (
        <div className={"search-header-toggle-container d-flex rounded-circle dropdown p-2 justify-content-center align-items-center homescreen-h-fit"}
             data-bs-toggle="tooltip" data-bs-placement="bottom" title="Profile">
            <img src={"https://cdn.icon-icons.com/icons2/1659/PNG/512/3844438-hamburger-menu-more-navigation_110319.png"}
                 className="search-header-toggle-icon" data-toggle="dropdown"/>
            <div className={"dropdown-menu dropdown-menu-right mt-3 p-1"}>
                <Link to={"/login"} className={" dropdown-item"}>Log In</Link>
                {/*<Link to={"#"} className={"dropdown-item"}>Account Settings</Link>*/}
                <Link className={"dropdown-item"} to={"/register"}>Sign Up</Link>
            </div>
        </div>
    )
}

export default LoginSignupToggle;