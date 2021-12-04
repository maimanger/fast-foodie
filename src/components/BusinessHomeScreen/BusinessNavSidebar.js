import React from "react";
import {Link} from "react-router-dom";
import "./Business.css"

const BusinessNavSidebar = ({active = "home", verified = true}) => {
    return (
        <ul className="list-group list-group-flush float-end w-50">

            <Link to={`${verified === true ? "/business" : "#"}`}
                  style={verified === true ? null : {pointerEvents: "none"}}
                  className={`list-group-item  border-top px-2 px-sm-3 text-nowrap
                  ${verified === true ? "" : "text-muted"}
                ${active === "home" ? "active" : ""}`
                  }>
                <i className="fas fa-home ms-3 ms-md-0 me-2 pe-1"></i>
                <span className="d-none d-md-inline">Home</span>
            </Link>

            <Link to="/business/profile"
                  className={`list-group-item  border-top px-2 px-sm-3 text-nowrap
                ${active === "profile" ? "active" : ""}`}>
                <i className="fas fa-user ms-3 ms-md-0 me-2 pe-2"></i>
                <span className="d-none d-md-inline">Profile</span>
            </Link>

            <Link to={`${verified === true ? "/business/orders" : "#"}`}
                  style={verified === true ? null : {pointerEvents: "none"}}
                  className={`list-group-item  border-top px-2 px-sm-3 text-nowrap
                  ${verified === true ? "" : "text-muted"}
                ${active === "orders" ? "active" : ""}`
                  }>
                <i className="fas fa-utensils ms-3 ms-md-0 me-2 pe-2"></i>
                <span className="d-none d-md-inline">
                Orders
                </span>
            </Link>

            <Link to={`${verified === true ? "/business/reviews" : "#"}`}
                  style={verified === true ? null : {pointerEvents: "none"}}
                  className={`list-group-item  border-top px-2 px-sm-3 text-nowrap
                  ${verified === true ? "" : "text-muted"}
                ${active === "reviews" ? "active" : ""}`
                  }>
                <i className="fas fa-comment ms-3 ms-md-0 me-2 pe-1"></i>
                <span className="d-none d-md-inline">
                Reviews
                </span>
            </Link>

            {/*            <Link to="/business/photos"
                  className={`list-group-item border-top px-2 px-sm-3 text-nowrap
               ${active === "photos" ? "active" : ""}`}>
                <i className="fas fa-camera ms-3 ms-md-0 me-2 pe-1"></i>
                <span className="d-none d-md-inline">
                Photos
                </span>
            </Link>*/}


            <Link to={`${verified === true ? "/messages" : "#"}`}
                  style={verified === true ? null : {pointerEvents: "none"}}
                  className={`list-group-item  border-top px-2 px-sm-3 text-nowrap
                  ${verified === true ? "" : "text-muted"}
                ${active === "messages" ? "active" : ""}`
                  }>
                <i className="fas fa-envelope ms-3 ms-md-0 me-2 pe-1"></i>
                <span className="d-none d-md-inline">
                Messages
                </span>
            </Link>

        </ul>

    )

}
export default BusinessNavSidebar;