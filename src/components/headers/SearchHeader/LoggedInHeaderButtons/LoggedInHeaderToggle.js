import React from "react";
import {Link} from "react-router-dom";

const LoggedInHeaderToggle = ({logoutHandler}) => {
    return (
        <div className={"search-header-toggle-container d-flex rounded-circle dropdown p-2 rounded-circle justify-content-center align-items-center homescreen-h-fit"}
             data-bs-toggle="tooltip" data-bs-placement="bottom" title="Profile">
            <i className="fas fa-user text-black fa-lg" data-toggle="dropdown"/>
            <div className={"dropdown-menu dropdown-menu-right mt-3 p-1"}>
                <Link to={"/profile"} className={" dropdown-item"}>View Profile</Link>
                {/*<Link to={"#"} className={"dropdown-item"}>Account Settings</Link>*/}
                <div className={"homepage-banner-logout-button dropdown-item"} onClick={logoutHandler}>Log out</div>
            </div>
        </div>
    )
}

export default LoggedInHeaderToggle;