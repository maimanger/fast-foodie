import React from "react";
import {Link} from "react-router-dom";
import ReviewItem from "../ReviewItem";
import moment from "moment";
import RestaurantInfo from "../RestaurantInfo";
import RestaurantStars from "../RestaurantStars";
import UserAvatarInfo from "../UserAvatarInfo";

const ProfileRecentActivityItem = ({activity}) => {

    return (
        <div className="list-group-item d-flex flex-nowrap bg-transparent py-3">
            <div className="me-3">
                <img className=" rounded-circle" src={activity.profile.avatar}
                     width="48px" height="48px"/>
            </div>

            {/*******************************Review Activity************************************/}
            {activity.type === "review" &&
             <div
                 className="text-black flex-grow-1 d-flex flex-column flex-nowrap me-xl-3 me-xxl-5">
                 <div className="mb-2 d-flex justify-content-between">
                     <div>
                         You wrote a review for
                         <Link className="text-info wd-profile-link-text mx-1"
                               to="#">
                             {activity.review.restaurant.name}
                         </Link>
                     </div>
                     <div className="text-muted fst-italic text-nowrap d-none d-md-block">
                         {moment(activity.time_created).fromNow()}
                     </div>
                 </div>


                 <div className="d-flex flex-column">
                     <Link to="#" className="wd-profile-content-hover text-black">
                         <ReviewItem review={activity.review}/>
                     </Link>
                     <Link className="ms-auto me-2 btn btn-outline-info rounded-pill py-1 mt-1"
                           to="#">
                         Edit
                     </Link>
                 </div>
             </div>
            }

            {/*******************************Bookmark Activity************************************/}
            {activity.type === "bookmark" &&
             <div
                 className="text-black flex-grow-1 d-flex flex-column flex-nowrap me-xl-3 me-xxl-5">
                 <div className="mb-2 d-flex justify-content-between">
                     <div>
                         You bookmarked
                         <Link className="text-info wd-profile-link-text mx-1"
                               to="#">
                             {activity.restaurant.name}
                         </Link>
                     </div>
                     <div className="text-muted fst-italic text-nowrap d-none d-md-block">
                         {moment(activity.time_created).fromNow()}
                     </div>
                 </div>
                 <Link to="#" className="text-black wd-profile-content-hover">
                 <RestaurantInfo restaurant={activity.restaurant}/>
                 <RestaurantStars restaurant={activity.restaurant}/>
                 </Link>

             </div>
            }

            {/*********************************Follow Activity*****************************/}
            {activity.type === "follow" &&
             <div
                 className="text-black flex-grow-1 d-flex flex-column flex-nowrap me-xl-3 me-xxl-5">
                 <div className="mb-2 d-flex justify-content-between">
                     <div>
                         You followed
                         <Link className="text-info wd-profile-link-text mx-1"
                               to="#">
                             Mike Shah</Link>
                     </div>
                     <div className="text-muted fst-italic text-nowrap d-none d-md-block">
                         2 hours ago
                     </div>
                 </div>
                 <Link to={`/profile/${activity.followWhom._id}`} className="wd-profile-content-hover">
                     <UserAvatarInfo user={activity.followWhom}/>
                 </Link>
             </div>
            }


        </div>
    )
}

export default ProfileRecentActivityItem;