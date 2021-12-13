import React, {useState} from "react";
import {Link} from "react-router-dom";
import {Collapse} from "react-bootstrap";
import moment from "moment";
import UserAvatarInfo from "../../ProfileScreen/UserAvatarInfo";
import OrderInfo from "../../ProfileScreen/OrderInfo";
import ReviewStars from "../../ProfileScreen/ReviewStars";
import ReviewItem from "../../ProfileScreen/ReviewItem";
import "../Business.css"
import {HashLink} from "react-router-hash-link";

const BusinessNotificationItem = ({notification}) => {
    const [on, setOn] = useState(false);

    return (
        <div className="list-group-item d-flex flex-nowrap bg-transparent py-3">
            <div className="me-3" style={{width: "100px"}}>
                {moment(notification.time_created).format("MM/DD/YYYY HH:mm:ss")}
            </div>

            {/*********************************Message-in Notification*****************************/}
{/*            {notification.type === "in-message" &&
             <div
                 className="text-black flex-grow-1 d-flex flex-column flex-nowrap me-xl-3 me-xxl-5">

                 <div className="mb-2 d-flex justify-content-between align-items-center">
                     <div>
                         <i className="fas fa-envelope me-3"></i>
                         <span>
                             You received a new message from
                             <Link className="text-info wd-profile-link-text mx-1"
                                   to={`/profile/${notification.message.sender._id}`}>
                                 {notification.message.sender.firstName} {notification.message.sender.lastName}
                             </Link>
                     </span>
                     </div>
                     ******************Collapse Btn**********************
                     <button className="btn ms-1 rounded-circle border-0 wd-rounded-btn"
                             onClick={() => setOn(!on)}>
                         <i className="fas fa-caret-down" style={{"font-size": "20px"}}></i>
                     </button>
                 </div>
                 ******************Collapse Content**********************
                 <Collapse in={on}>
                     <Link to={`/messages/${notification.message._id}`}
                           className="wd-profile-content-hover text-black-50">
                         {notification.message.text.split(" ").slice(0, 30).join(" ")} ...
                     </Link>
                 </Collapse>
             </div>
            }*/}

            {/*********************************Order Notification*****************************/}
 {/*           {notification.type === "new-order" &&
             <div
                 className="text-black flex-grow-1 d-flex flex-column flex-nowrap me-xl-3 me-xxl-5">

                 <div className="mb-2 d-flex justify-content-between align-items-center">
                     <div>
                     <i className="fas fa-utensils me-3"></i>
                     <span>
                     You have a new order from
                     <Link className="text-info wd-profile-link-text mx-1"
                           to={`/profile/${notification.order.user._id}`}>
                         {notification.order.user.firstName} {notification.order.user.lastName}
                     </Link>
                     </span>
                     </div>

                     ******************Collapse Btn**********************
                     <button className="btn ms-1 rounded-circle border-0 wd-rounded-btn"
                             onClick={() => setOn(!on)}>
                         <i className="fas fa-caret-down" style={{"font-size": "20px"}}></i>
                     </button>
                 </div>
                 ******************Collapse Content**********************
                 <Collapse in={on}>
                     <Link to={`/profile/orders/${notification.order._id}`}
                           className="wd-profile-content-hover">
                         <OrderInfo order={notification.order}/>
                     </Link>
                 </Collapse>
             </div>
            }*/}

            {/*********************************Review Notification*****************************/}
            {notification.type === "new-review" &&
             <div
                 className="text-black flex-grow-1 d-flex flex-column flex-nowrap me-xl-3 me-xxl-5">

                 <div className="mb-2 d-flex justify-content-between align-items-center">
                     <div>
                     <i className="fas fa-comment me-3"></i>
                     <span>
                     You have a new review from
                     <Link className="text-info wd-profile-link-text mx-1"
                           to={`/profile/${notification.reviewDetail.userDetail._id}`}>
                         {notification.reviewDetail.userDetail.firstName} {notification.reviewDetail.userDetail.lastName}
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
                         <HashLink to={`/restaurants/${notification.reviewDetail.restaurantDetail.id}/review#${notification.reviewDetail._id}`}
                                   className="wd-profile-content-hover text-black">
                             <UserAvatarInfo user={notification.reviewDetail.userDetail}/>
                             <ReviewStars review={notification.reviewDetail}/>
                             <ReviewItem review={notification.reviewDetail}/>
                         </HashLink>
                     </Collapse>
                     <Collapse in={on}>
                         <Link className="ms-auto me-2 btn btn-outline-info rounded-pill py-1 mt-1"
                               to="#">
                             Reply
                         </Link>
                     </Collapse>
                 </div>
             </div>
            }

            {/*********************************Bookmark Notification*****************************/}
  {/*          {notification.type === "new-bookmark" &&
             <div
                 className="text-black flex-grow-1 d-flex flex-column flex-nowrap me-xl-3 me-xxl-5">

                 <div className="mb-2 d-flex justify-content-between align-items-center">
                     <div>
                         <i className="fas fa-bookmark me-3"></i>
                         <span>
                             <Link className="text-info wd-profile-link-text mx-1"
                                   to={`/profile/${notification.bookmark.user._id}`}>
                                 {notification.bookmark.user.firstName} {notification.bookmark.user.lastName}
                             </Link>
                             bookmarked your restaurant
                     </span>
                     </div>
             </div>
             </div>
            }*/}

        </div>
    )
}

export default BusinessNotificationItem;