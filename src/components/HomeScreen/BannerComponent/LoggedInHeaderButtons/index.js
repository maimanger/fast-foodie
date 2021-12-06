import React from "react";
import './index.css';
import Dropdown from "../../public-components/Dropdowns/Dropdown";
import {Link} from "react-router-dom";
import {placeholderLogout} from "../../../../services/login-service";

const LoggedInHeaderButtons = () => {
    return (
        <div className={"homepage-banner-logged-in-header-container d-flex align-items-center justify-content-start"}>
            <i className="fas fa-bell text-white fa-lg me-3" data-bs-toggle="tooltip" data-bs-placement="bottom" title="Notifications"/>
            <i className="fas fa-comment text-white fa-lg me-3" data-bs-toggle="tooltip" data-bs-placement="bottom" title="Messages"/>
            <div className={"dropdown"}  data-bs-toggle="tooltip" data-bs-placement="bottom" title="Profile">
                <i className="fas fa-user-circle text-white fa-lg" data-toggle="dropdown"/>
                <div className={"dropdown-menu dropdown-menu-right mt-3 p-1"}>
                    <Link to={"/profile"} className={" dropdown-item"}>View Profile</Link>
                    {/*<Link to={"#"} className={"dropdown-item"}>Account Settings</Link>*/}
                    <div className={"homepage-banner-logout-button dropdown-item"} onClick={placeholderLogout}>Log out</div>
                </div>
            </div>
        </div>
    )
}

export default LoggedInHeaderButtons;