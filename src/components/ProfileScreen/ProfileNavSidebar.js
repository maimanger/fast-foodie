import React from "react";
import {Link} from "react-router-dom";
import "./Profile.css"

const ProfileNavSidebar = ({active = "overview"}) => {
    return (
        <ul className="list-group list-group-flush float-end wd-profile-nav-sidebar w-50 mt-4">
            <Link to="/profile"
                  className={`list-group-item  border-top px-2 px-sm-3 text-nowrap
                ${active === "overview" ? "active" : ""}`}>
                <i className="fas fa-user ms-3 ms-md-0 me-2 pe-1"></i>
                <span className="d-none d-md-inline">Overview</span>
            </Link>

            <Link to="/profile/reviews"
                  className={`list-group-item  border-top px-2 px-sm-3 text-nowrap
               ${active === "reviews" ? "active" : ""}`}>
                <i className="fas fa-comment ms-3 ms-md-0 me-2 pe-1"></i>
                <span className="d-none d-md-inline">
                Reviews
                </span>
            </Link>

            <Link to="/profile/photos"
                  className={`list-group-item border-top px-2 px-sm-3 text-nowrap
               ${active === "photos" ? "active" : ""}`}>
                <i className="fas fa-camera ms-3 ms-md-0 me-2 pe-1"></i>
                <span className="d-none d-md-inline">
                Photos
                </span>
            </Link>

            <Link to="/profile/bookmarks"
                  className={`list-group-item border-top px-2 px-sm-3 text-nowrap
               ${active === "bookmarks" ? "active" : ""}`}>
                <i className="fas fa-bookmark ms-3 ms-md-0 me-2 pe-2"></i>
                <span className="d-none d-md-inline">
                Bookmarks
                </span>
            </Link>

            <Link to="/profile/orders"
                  className={`list-group-item  border-top px-2 px-sm-3 text-nowrap
               ${active === "orders" ? "active" : ""}`}>
                <i className="fas fa-utensils ms-3 ms-md-0 me-2 pe-2"></i>
                <span className="d-none d-md-inline">
                Orders
                </span>
            </Link>

            <Link to="/profile/messages"
                  className={`list-group-item  border-top px-2 px-sm-3 text-nowrap
               ${active === "messages" ? "active" : ""}`}>
                <i className="fas fa-comments ms-3 ms-md-0 me-2 pe-1"></i>
                <span className="d-none d-md-inline">
                Messages
                </span>
            </Link>

            <Link to="/profile/followings"
                  className={`list-group-item  border-top px-2 px-sm-3 text-nowrap
               ${active === "messages" ? "active" : ""}`}>
                <i className="fas fa-user-tag ms-3 ms-md-0 me-2 pe-1"></i>
                <span className="d-none d-md-inline">
                Followings
                </span>
            </Link>

            <Link to="/profile/followers"
                  className={`list-group-item  border-top px-2 px-sm-3 text-nowrap
               ${active === "messages" ? "active" : ""}`}>
                <i className="fas fa-user-friends ms-3 ms-md-0 me-2 pe-1"></i>
                <span className="d-none d-md-inline">
                Followers
                </span>
            </Link>
        </ul>

    )

}
export default ProfileNavSidebar;