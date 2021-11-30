import React, {useState} from "react";
import {Link} from "react-router-dom";
import ReviewItem from "../ReviewItem";
import moment from "moment";
import RestaurantInfo from "../RestaurantInfo";
import RestaurantStars from "../RestaurantStars";
import UserAvatarInfo from "../UserAvatarInfo";
import "../Profile.css"
import ReviewStars from "../ReviewStars";

const ProfileRecentActivityItem = ({activity}) => {

    const [reviewVisible, setReviewVisible] = useState(false);
    const [replyReviewVisible, setReplyReviewVisible] = useState(false);

    return (
        <div className="list-group-item d-flex flex-nowrap bg-transparent py-3">
            <div className="me-3">
                <img className=" rounded-circle" src={activity.user.image_url}
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
                         <button
                             className="btn rounded-circle border-0 float-end position-relative wd-rounded-btn"
                             style={{bottom: "5px"}}
                             onClick={() => {
                                 if (reviewVisible === true) {
                                     setReviewVisible(false);
                                 } else {
                                     setReviewVisible(true);
                                 }
                             }
                             }>
                             <i className="fas fa-caret-down" style={{"font-size": "22px"}}></i>
                         </button>

                         <RestaurantInfo restaurant={activity.review.restaurant}/>

                         <ReviewStars review={activity.review}/>

                         {reviewVisible && <ReviewItem review={activity.review}/>}
                     </Link>
                     <Link className="ms-auto me-2 btn btn-outline-info rounded-pill py-1 mt-1"
                           to="#">
                         Edit
                     </Link>
                 </div>
             </div>
            }

            {/*******************************Reply Review************************************/}
            {activity.type === "reply-review" &&
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
                     <div className="text-muted fst-italic text-nowrap d-none d-md-block">
                         {moment(activity.time_created).fromNow()}
                     </div>
                 </div>

                 <div className="d-flex flex-column">
                     <Link to="#" className="wd-profile-content-hover text-black">

                         <button
                             className="btn rounded-circle border-0 float-end position-relative wd-rounded-btn"
                             style={{bottom: "5px"}}
                             onClick={() => {
                                 if (replyReviewVisible === true) {
                                     setReplyReviewVisible(false);
                                 } else {
                                     setReplyReviewVisible(true);
                                 }
                             }
                             }>
                             <i className="fas fa-caret-down" style={{"font-size": "22px"}}></i>
                         </button>

                         <UserAvatarInfo user={activity.review.user}/>
                         <ReviewStars review={activity.review}/>
                         {replyReviewVisible && <ReviewItem review={activity.review}/>}

                         <div className="text-black opacity-75 mt-3 ms-5 ps-3 border-start border-4">
                             <span className="text-black-50">{moment(activity.time_created).format("L")}</span>
                             <br/>
                             <span>{activity.review.text.split(" ").slice(0, 30).join(" ")} ...</span>
                         </div>
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
                             {activity.bookmark.restaurant.name}
                         </Link>
                     </div>
                     <div className="text-muted fst-italic text-nowrap d-none d-md-block">
                         {moment(activity.time_created).fromNow()}
                     </div>
                 </div>
                 <Link to="#" className="text-black wd-profile-content-hover">
                     <RestaurantInfo restaurant={activity.bookmark.restaurant}/>
                     <RestaurantStars restaurant={activity.bookmark.restaurant}/>
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
                               to={`/profile/${activity.follow.followee._id}`}>
                             Mike Shah</Link>
                     </div>
                     <div className="text-muted fst-italic text-nowrap d-none d-md-block">
                         {moment(activity.time_created).fromNow()}
                     </div>
                 </div>
                 <Link to={`/profile/${activity.follow.followee._id}`}
                       className="wd-profile-content-hover">
                     <UserAvatarInfo user={activity.follow.followee}/>
                 </Link>
             </div>
            }


        </div>
    )
}
;

export default ProfileRecentActivityItem;