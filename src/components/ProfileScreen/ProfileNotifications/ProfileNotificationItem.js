import React, {useState} from "react";
import {Link} from "react-router-dom";
import "../Profile.css";
import UserAvatarInfo from "../UserAvatarInfo";
import OrderInfo from "../OrderInfo";
import moment from "moment";
import {Collapse} from "react-bootstrap";

const ProfileNotificationItem = ({notification, profile}) => {
    const [on, setOn] = useState(false);

    return (
        <div className="list-group-item d-flex flex-nowrap bg-transparent py-3">
            <div className="me-3">
                <img className="rounded-circle" src={profile.image_url}
                     width="48px" height="48px"/>
            </div>

            {/*********************************Message-in Notification*****************************/}
 {/*           {notification.type === "in-message" &&
             <div className="text-black flex-grow-1 d-flex flex-column flex-nowrap me-xl-3 me-xxl-5">
                 <div className="mb-2 d-flex justify-content-between">
                     <div>
                         You received a new message from
                         <Link className="text-info wd-profile-link-text mx-1"
                               to={`/profile/${notification.message.sender._id}`}>
                             {notification.message.sender.firstName} {notification.message.sender.lastName}
                         </Link>
                     </div>
                     <div className="text-muted fst-italic text-nowrap">
                         <span className="d-none d-md-inline">
                         {moment(notification.time_created).fromNow()}
                         </span>
                         <button className="btn ms-1 rounded-circle border-0 wd-rounded-btn"
                                 onClick={() => setOn(!on)}>
                             <i className="fas fa-caret-down" style={{fontSize: "20px"}}></i>
                         </button>
                     </div>
                 </div>
                 <Collapse in={on}>
                 <Link to={`/messages/${notification.message._id}`} className="wd-profile-content-hover text-black-50">
                     {notification.message.text.split(" ").slice(0, 30).join(" ")} ...
                 </Link>
                 </Collapse>
             </div>
            }*/}

            {/*********************************Follower Notification*****************************/}
            {notification.type === "new-follower" &&
             <div
                 className="text-black flex-grow-1 d-flex flex-column flex-nowrap me-xl-3 me-xxl-5">
                 <div className="mb-2 d-flex justify-content-between">
                     <div>
                         You have a new follower
                         <Link className="text-info wd-profile-link-text mx-1 text-nowrap"
                               to={`/profile/${notification.followerDetail._id}`}>
                             {notification.followerDetail.firstName} {notification.followerDetail.lastName}
                         </Link>
                     </div>
                     <div className="text-muted fst-italic text-nowrap">
                         <span className="d-none d-md-inline">
                         {moment(notification.time_created).fromNow()}
                         </span>
                         <button className="btn ms-1 rounded-circle border-0 wd-rounded-btn"
                                 onClick={() => setOn(!on)}>
                             <i className="fas fa-caret-down" style={{fontSize: "20px"}}></i>
                         </button>
                     </div>
                 </div>
                 <Collapse in={on}>
                 <Link to={`/profile/${notification.followerDetail._id}`} className="wd-profile-content-hover">
                 <UserAvatarInfo user={notification.followerDetail}/>
                 </Link>
                 </Collapse>


             </div>
            }

            {/*********************************Order Notification*****************************/}
 {/*           {notification.type === "update-order" &&
             <div
                 className="text-black flex-grow-1 d-flex flex-column flex-nowrap me-xl-3 me-xxl-5">
                 <div className="mb-2 d-flex justify-content-between">
                     <div>
                         Your order from
                         <Link className="text-info wd-profile-link-text mx-1"
                               to={`/restaurants/${notification.order.restaurant.id}`}>
                             {notification.order.restaurant.name}
                         </Link>
                         has been updated
                     </div>
                     <div className="text-muted fst-italic text-nowrap">
                         <span className="d-none d-md-inline">
                         {moment(notification.time_created).fromNow()}
                         </span>
                         <button className="btn ms-1 rounded-circle border-0 wd-rounded-btn"
                                 onClick={() => setOn(!on)}>
                             <i className="fas fa-caret-down" style={{fontSize: "20px"}}></i>
                         </button>
                     </div>
                 </div>
                 ************************Order Content************************
                 <Collapse in={on}>
                 <Link to={`/profile/orders/${notification.order._id}`}
                       className="wd-profile-content-hover">
                 <OrderInfo order={notification.order}/>
                 </Link>
                 </Collapse>
             </div>
            }*/}
        </div>
    )
};

export default ProfileNotificationItem;