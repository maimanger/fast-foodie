import React from "react";
import './index.css';
import {Link, useHistory} from "react-router-dom";
import {logout} from "../../../../services/profileService";
import {useDispatch} from "react-redux";
import LoggedInHeaderToggle from "./LoggedInHeaderToggle";
import LoggedInHeaderPillButtons from "./LoggedInHeaderPillButtons";

const LoggedInHeaderButtons = () => {
    const dispatch = useDispatch();
    let history = useHistory();

    const logoutHandler = () => {
        logout()
            .then(res => {
                dispatch({
                    type: "delete-profile"
                })
            });
    }

    return (



        <div className={"searchbar-header-logged-in-header-buttons-container d-flex justify-content-start align-items-top homescreen-h-fit"}>
            {/*<div className={"p-2 rounded-circle d-flex justify-content-center align-items-center me-1 homescreen-h-fit"} data-bs-toggle="tooltip" data-bs-placement="bottom" title="Notifications">*/}
            {/*    <i className="far fa-bell text-black fa-lg"/>*/}
            {/*</div>*/}
            {/*<div className={"p-2 rounded-circle d-flex justify-content-center align-items-center me-1 homescreen-h-fit"} data-bs-toggle="tooltip" data-bs-placement="bottom" title="Messages">*/}
            {/*    <i className="far fa-comment text-black fa-lg"/>*/}
            {/*</div>*/}


            {/*************   Two buttons: view profile, log out  **************/}
            <div className={"d-none d-md-inline"}>
                <LoggedInHeaderPillButtons logoutHandler={logoutHandler} />
            </div>

            {/*************   Dropdown when window size is small  **************/}
            <div className={"d-inline d-md-none"}>
                <LoggedInHeaderToggle logoutHandler={logoutHandler} />
            </div>


        </div>
    )
}

export default LoggedInHeaderButtons;