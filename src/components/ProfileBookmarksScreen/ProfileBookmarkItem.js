import React from "react";
import {Collapse} from "react-bootstrap";
import {Link} from "react-router-dom";
import RestaurantInfo from "../ProfileScreen/RestaurantInfo";
import ReviewStars from "../ProfileScreen/ReviewStars";
import ReviewItem from "../ProfileScreen/ReviewItem";
import UserAvatarInfo from "../ProfileScreen/UserAvatarInfo";
import BusinessStars from "../BusinessHomeScreen/BusinessStars";

const ProfileBookmarkItem = ({bookmark}) => {

    return (
        <>
            <div className="list-group-item d-flex flex-column bg-transparent py-3 pe-xl-3 pe-xxl-5">
                <Link to={`/restaurant/:${bookmark.restaurant.id}`} className="wd-profile-content-hover text-black">
                    <RestaurantInfo restaurant={bookmark.restaurant}/>
                    <BusinessStars restaurant={bookmark.restaurant}/>
                </Link>
            </div>

        </>

    )

}
export default ProfileBookmarkItem;