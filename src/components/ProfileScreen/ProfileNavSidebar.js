import React from "react";
import {Link} from "react-router-dom";
import "./Profile.css"

const ProfileNavSidebar = ({active = "overview"}) => {
    return (
        <ul className="list-group list-group-flush float-end wd-profile-nav-sidebar
                       mt-4">
            <Link to="#"
               className={`list-group-item  border-top px-2 px-sm-3
                ${active === "overview" ? "active" : ""}`}>
                Overview
            </Link>
            <Link href="#"
               className={`list-group-item  border-top px-2 px-sm-3
               ${active === "reviews" ? "active" : ""}`}>
                Reviews
            </Link>

            <Link href="#"
                  className={`list-group-item  border-top px-2 px-sm-3
               ${active === "photos" ? "active" : ""}`}>
                Photos
            </Link>

            <Link href="#"
               className={`list-group-item  border-top px-2 px-sm-3
               ${active === "bookmarks" ? "active" : ""}`}>
                Bookmarks
            </Link>

            <Link href="#"
               className={`list-group-item  border-top px-2 px-sm-3
               ${active === "orders" ? "active" : ""}`}>
                Orders
            </Link>

            <Link href="#"
               className={`list-group-item  border-top px-2 px-sm-3
               ${active === "messages" ? "active" : ""}`}>
                Messages
            </Link>
        </ul>

    )

}
export default ProfileNavSidebar;