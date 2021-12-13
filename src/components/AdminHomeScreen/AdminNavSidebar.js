import React from "react";
import {Link} from "react-router-dom";
import "./Admin.css"

const AdminNavSidebar = ({active = "home"}) => {
    return (
        <ul className="list-group list-group-flush float-end w-50">

            <Link to="/admin"
                  className={`list-group-item  border-top px-2 px-sm-3 text-nowrap
                ${active === "home" ? "active" : ""}`}>
                <i className="fas fa-home ms-3 ms-md-0 me-2 pe-1"></i>
                <span className="d-none d-md-inline">Home</span>
            </Link>

            <Link to="/admin/claims"
                  className={`list-group-item  border-top px-2 px-sm-3 text-nowrap
               ${active === "claims" ? "active" : ""}`}>
                <i className="fas fa-id-card ms-3 ms-md-0 me-2 pe-1"></i>
                <span className="d-none d-md-inline">
                    Claims
                </span>
            </Link>

{/*            <Link to="/admin/reports"
                  className={`list-group-item  border-top px-2 px-sm-3 text-nowrap
               ${active === "reports" ? "active" : ""}`}>
                <i className="fas fa-ban ms-3 ms-md-0 me-2 pe-1"></i>
                <span className="d-none d-md-inline">
                Reports
                </span>
            </Link>*/}


{/*            <Link to="/admin/inbox"
                  className={`list-group-item  border-top px-2 px-sm-3 text-nowrap
               ${active === "inbox" ? "active" : ""}`}>
                <i className="fas fa-envelope ms-3 ms-md-0 me-2 pe-1"></i>
                <span className="d-none d-md-inline">
                Inbox
                </span>
            </Link>*/}

        </ul>

    )

}
export default AdminNavSidebar;