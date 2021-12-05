import React from "react";
import {Collapse} from "react-bootstrap";
import {Link} from "react-router-dom";
import RestaurantInfo from "../ProfileScreen/RestaurantInfo";
import ReviewStars from "../ProfileScreen/ReviewStars";
import ReviewItem from "../ProfileScreen/ReviewItem";
import UserAvatarInfo from "../ProfileScreen/UserAvatarInfo";

const ProfileFollowerItem = ({follower}) => {

    return (
        <>
            <div className="list-group-item d-flex flex-column bg-transparent py-3 pe-xl-3 pe-xxl-5">
                <Link to={`/profile/${follower._id}`} className="wd-profile-content-hover text-black">
                    <UserAvatarInfo user={follower}/>
                </Link>
            </div>

        </>

    )

}
export default ProfileFollowerItem;