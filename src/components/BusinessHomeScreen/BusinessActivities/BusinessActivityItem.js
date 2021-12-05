import React, {useState} from "react";
import {Link} from "react-router-dom";
import {Collapse} from "react-bootstrap";
import moment from "moment";
import UserAvatarInfo from "../../ProfileScreen/UserAvatarInfo";
import OrderInfo from "../../ProfileScreen/OrderInfo";
import ReviewStars from "../../ProfileScreen/ReviewStars";
import ReviewItem from "../../ProfileScreen/ReviewItem";
import "../Business.css"

const BusinessActivityItem = ({activity}) => {
    const [on, setOn] = useState(false);

    return (
        <div className="list-group-item d-flex flex-nowrap bg-transparent py-3">
            <div className="me-3" style={{width: "100px"}}>
                {moment(activity.time_created).format("MM/DD/YYYY hh:mm:ss")}
            </div>

            {/*********************************Review activity*****************************/}
            {activity.type === "reply-review" &&
             <div
                 className="text-black flex-grow-1 d-flex flex-column flex-nowrap me-xl-3 me-xxl-5">

                 <div className="mb-2 d-flex justify-content-between align-items-center">
                     <div>
                     <i className="fas fa-comment me-3"></i>
                     <span>
                     You replied to the review of
                     <Link className="text-info wd-profile-link-text mx-1"
                           to={`/profile/${activity.review.user._id}`}>
                         {activity.review.user.firstName} {activity.review.user.lastName}
                     </Link>
                     </span>
                     </div>

                     {/*******************Collapse Btn***********************/}
                     <button className="btn ms-1 rounded-circle border-0 wd-rounded-btn"
                             onClick={() => setOn(!on)}>
                         <i className="fas fa-caret-down" style={{"font-size": "20px"}}></i>
                     </button>

                 </div>
                 {/*******************Collapse Content***********************/}
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
                                     {activity.review.replies &&
                                      activity.review.replies.find(reply => reply.user._id === activity.user._id).reply
                                         .split(" ").slice(0, 30).join(" ")}  ...
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
        </div>
    )
};

export default BusinessActivityItem;