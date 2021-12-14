import React, {useState} from "react";
import {Link} from "react-router-dom";
import ReviewItem from "../ReviewItem";
import moment from "moment";
import RestaurantInfo from "../RestaurantInfo";
import RestaurantStars from "../stars/RestaurantStars";
import UserAvatarInfo from "../UserAvatarInfo";
import "../Profile.css"
import ReviewStars from "../stars/ReviewStars";
import {Collapse} from "react-bootstrap";
import BusinessStars from "../../BusinessHomeScreen/BusinessStars";
import {HashLink} from "react-router-hash-link";

const ProfileRecentActivityItem = ({activity, profile}) => {
    const [on, setOn] = useState(false);

    return (
        <div className="list-group-item d-flex flex-nowrap bg-transparent py-3">
            <div className="me-3">
                <img className=" rounded-circle" src={profile.image_url}
                     width="48px" height="48px"/>
            </div>

            {/*******************************Review Activity************************************/}
            {activity.type === "review" && Object.keys(activity.reviewDetail).length !== 0 &&
             <div
                 className="text-black flex-grow-1 d-flex flex-column flex-nowrap me-xl-3 me-xxl-5">
                 <div className="mb-2 d-flex justify-content-between">
                     <div className="pt-1">
                         You wrote a review for
                         {activity.reviewDetail.restaurantInfo &&
                         <Link className="text-info wd-profile-link-text mx-1 text-nowrap"
                               to={`/restaurants/${activity.reviewDetail.restaurant}`}>
                             {activity.reviewDetail.restaurantInfo.name}
                         </Link>
                         }
                     </div>
                     <div className="text-muted fst-italic text-nowrap ">
                         <span className="d-none d-md-inline">
                         {moment(activity.time_created).fromNow()}
                         </span>
                         <button className="btn ms-1 rounded-circle border-0 wd-rounded-btn"
                                 onClick={() => setOn(!on)}>
                             <i className="fas fa-caret-down" style={{fontSize: "20px"}}></i>
                         </button>
                     </div>
                 </div>

                 {/*******************************Review content******************************/}
                 <div className="d-flex flex-column">
                     <Collapse in={on}>
                     <HashLink to={`/restaurants/${activity.reviewDetail.restaurant}/review#${activity.reviewDetail._id}`}
                           className="wd-profile-content-hover text-black">
                         <RestaurantInfo restaurant={activity.reviewDetail.restaurantInfo}/>
                         <ReviewStars review={activity.reviewDetail}/>
                         <ReviewItem review={activity.reviewDetail}/>
                     </HashLink>
                     </Collapse>
                     <Collapse in={on}>
                     <HashLink className="ms-auto me-2 btn btn-outline-info rounded-pill py-1 mt-1"
                           to={`/restaurants/${activity.reviewDetail.restaurant}/review#${activity.reviewDetail._id}`}>
                         Edit
                     </HashLink>
                     </Collapse>
                 </div>

             </div>
            }

            {/*******************************Reply Review************************************/}
         {/*   {activity.type === "reply-review" &&
             <div
                 className="text-black flex-grow-1 d-flex flex-column flex-nowrap me-xl-3 me-xxl-5">
                 <div className="mb-2 d-flex justify-content-between">
                     <div>
                         You replied to the review of
                         <Link className="text-info wd-profile-link-text mx-1"
                               to={`/profile/${activity.review.user._id}`}>
                             {activity.review.user.firstName} {activity.review.user.lastName}
                         </Link>
                     </div>
                     <div className="text-muted fst-italic text-nowrap">
                         <span className="d-none d-md-inline">
                         {moment(activity.time_created).fromNow()}
                         </span>
                         <button className="btn ms-1 rounded-circle border-0 wd-rounded-btn"
                                 onClick={() => setOn(!on)}>
                             <i className="fas fa-caret-down" style={{fontSize: "20px"}}></i>
                         </button>
                     </div>
                 </div>


                     <div className="d-flex flex-column">
                         <Collapse in={on}>
                         <Link to="#" className="wd-profile-content-hover text-black">
                             <UserAvatarInfo user={activity.review.user}/>
                             <ReviewStars review={activity.review}/>
                             <ReviewItem review={activity.review}/>
                             <div
                                 className="text-black opacity-75 mt-3 ms-5 ps-3 border-start border-4">
                             <span className="text-black-50">{moment(activity.time_created)
                                 .format("L")}</span>
                                 <br/>
                                 <span>
                                     {activity.review.replies
                                         .find(reply => reply.user._id === activity.user._id).reply
                                         .split(" ").slice(0, 30).join(" ")} ...
                                 </span>
                             </div>
                         </Link>
                         </Collapse>
                         <Collapse in={on}>
                         <Link className="ms-auto me-2 btn btn-outline-info rounded-pill py-1 mt-1"
                               to="#">
                             Edit
                         </Link>
                         </Collapse>

                     </div>

             </div>
            }
            */}


            {/*******************************Bookmark Activity************************************/}
         {/*   {activity.type === "bookmark" &&
             <div
                 className="text-black flex-grow-1 d-flex flex-column flex-nowrap me-xl-3 me-xxl-5">
                 <div className="mb-2 d-flex justify-content-between align-content-center">
                     <div>
                         You bookmarked
                         <Link className="text-info wd-profile-link-text mx-1"
                               to={`/restaurants/${activity.bookmark.restaurant.id}`}>
                             {activity.bookmark.restaurant.name}
                         </Link>
                     </div>
                     <div className="text-muted fst-italic text-nowrap">
                         <span className="d-none d-md-inline">
                         {moment(activity.time_created).fromNow()}
                         </span>
                         <button className="btn ms-1 rounded-circle border-0 wd-rounded-btn"
                                 onClick={() => setOn(!on)}>
                             <i className="fas fa-caret-down" style={{fontSize: "20px"}}></i>
                         </button>
                     </div>

                 </div>
                 <Collapse in={on}>
                     <Link to={`/restaurants/${activity.bookmark.restaurant.id}`} className="text-black wd-profile-content-hover">
                         <RestaurantInfo restaurant={activity.bookmark.restaurant}/>
                         <BusinessStars restaurant={activity.bookmark.restaurant}/>
                     </Link>
                 </Collapse>

             </div>
            }
            */}

            {/*********************************Follow Activity*****************************/}
            {activity.type === "follow" && Object.keys(activity.followDetail).length !== 0 &&
             <div
                 className="text-black flex-grow-1 d-flex flex-column flex-nowrap me-xl-3 me-xxl-5">
                 <div className="mb-2 d-flex justify-content-between">
                     <div className="pt-1">
                         You followed
                         <Link className="text-info wd-profile-link-text mx-1 text-nowrap"
                               to={`/profile/${activity.followDetail._id}`}>
                             {activity.followDetail.firstName} {activity.followDetail.lastName}</Link>
                     </div>
                     <div className="text-muted fst-italic text-nowrap">
                         <span className="d-none d-md-inline">
                         {moment(activity.time_created).fromNow()}
                         </span>
                         <button className="btn ms-1 rounded-circle border-0 wd-rounded-btn"
                                 onClick={() => setOn(!on)}>
                             <i className="fas fa-caret-down" style={{fontSize: "20px"}}></i>
                         </button>
                     </div>
                 </div>
                 <Collapse in={on}>
                     <Link to={`/profile/${activity.followDetail._id}`}
                           className="wd-profile-content-hover">
                         <UserAvatarInfo user={activity.followDetail}/>
                     </Link>
                 </Collapse>
             </div>
            }


        </div>
    )
};

export default ProfileRecentActivityItem;