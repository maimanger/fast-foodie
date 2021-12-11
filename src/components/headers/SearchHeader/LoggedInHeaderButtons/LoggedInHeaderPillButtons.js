import React from "react";
import {Link} from "react-router-dom";

const LoggedInHeaderPillButtons = ({logoutHandler}) => {
    return (
        <div className={"d-none d-md-flex flex-nowrap"}>
            <Link to={"/profile"}
                  className={"btn btn-outline-primary rounded-pill me-2 text-nowrap"}>
                View Profile
            </Link>
            <button className={"btn btn-outline-secondary rounded-pill"}
                    onClick={logoutHandler}>
                Logout
            </button>
        </div>
    )
}

export default LoggedInHeaderPillButtons;