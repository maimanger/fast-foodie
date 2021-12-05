import React from "react";
import {Collapse} from "react-bootstrap";
import {Link} from "react-router-dom";
import RestaurantInfo from "../ProfileScreen/RestaurantInfo";
import ReviewStars from "../ProfileScreen/ReviewStars";
import ReviewItem from "../ProfileScreen/ReviewItem";
import UserAvatarInfo from "../ProfileScreen/UserAvatarInfo";

const ProfileFollowingItem = ({following}) => {

    return (
        <>
            <div className="list-group-item d-flex flex-column bg-transparent py-3 pe-xl-3 pe-xxl-5">
                <Link to={`/profile/${following._id}`} className="wd-profile-content-hover text-black">
                    <UserAvatarInfo user={following}/>
                </Link>
            </div>

        </>

    )

}
export default ProfileFollowingItem;