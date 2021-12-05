import React from "react";
import './index.css';
import {Link} from "react-router-dom";

const LoggedInHeaderButtons = () => {

    return (
        <div className={"searchscreen-logged-in-header-buttons-container d-flex justify-content-start align-items-top homescreen-h-fit"}>
            <div className={"p-2 rounded-circle d-flex justify-content-center align-items-center me-1 homescreen-h-fit"} data-bs-toggle="tooltip" data-bs-placement="bottom" title="Notifications">
                <i className="far fa-bell text-black fa-lg"/>
            </div>
            <div className={"p-2 rounded-circle d-flex justify-content-center align-items-center me-1 homescreen-h-fit"} data-bs-toggle="tooltip" data-bs-placement="bottom" title="Messages">
                <i className="far fa-comment text-black fa-lg"/>
            </div>
            <div className={"dropdown p-2 rounded-circle d-flex justify-content-center align-items-center homescreen-h-fit"} data-bs-toggle="tooltip" data-bs-placement="bottom" title="Profile">
                <i className="fas fa-user text-black fa-lg" data-toggle="dropdown"/>
                <div className={"dropdown-menu dropdown-menu-right mt-3 p-1"}>
                    <Link to={"/profile"} className={" dropdown-item"}>View Profile</Link>
                    <Link to={"#"} className={"dropdown-item"}>Account Settings</Link>
                    <Link to={"#"} className={"dropdown-item"}>Log out</Link>
                </div>
            </div>
        </div>
    )
}

export default LoggedInHeaderButtons;