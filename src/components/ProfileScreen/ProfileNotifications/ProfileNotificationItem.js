import React from "react";
import {Link} from "react-router-dom";
import "../Profile.css";
import UserAvatarInfo from "../UserAvatarInfo";
import OrderInfo from "../OrderInfo";
import moment from "moment";

const ProfileNotificationItem = ({notification}) => {
    return (
        <div className="list-group-item d-flex flex-nowrap bg-transparent py-3">
            <div className="me-3">
                <img className="rounded-circle" src={notification.profile.avatar}
                     width="48px" height="48px"/>
            </div>

            {/*********************************Message-in Notification*****************************/}
            {notification.type === "in-message" &&
             <div className="text-black flex-grow-1 d-flex flex-column flex-nowrap me-xl-3 me-xxl-5">
                 <div className="mb-2 d-flex justify-content-between">
                     <div>
                         You received a new message from
                         <Link className="text-info wd-profile-link-text mx-1"
                               to={`/profile/${notification.fromWhom._id}`}>
                             {notification.fromWhom.firstName} {notification.fromWhom.lastName}
                         </Link>
                     </div>
                     <div className="text-muted fst-italic text-nowrap d-none d-md-block">
                         {moment(notification.time_created).fromNow()}
                     </div>
                 </div>
             </div>
            }

            {/*********************************Follower Notification*****************************/}
            {notification.type === "new-follower" &&
             <div
                 className="text-black flex-grow-1 d-flex flex-column flex-nowrap me-xl-3 me-xxl-5">
                 <div className="mb-2 d-flex justify-content-between">
                     <div>
                         You have a new follower
                         <Link className="text-info wd-profile-link-text mx-1"
                               to={`/profile/${notification.fromWhom._id}`}>
                             {notification.fromWhom.firstName} {notification.fromWhom.lastName}
                         </Link>
                     </div>
                     <div className="text-muted fst-italic text-nowrap d-none d-md-block">
                         {moment(notification.time_created).fromNow()}
                     </div>
                 </div>
                 <Link to={`/profile/${notification.fromWhom._id}`} className="wd-profile-content-hover">
                 <UserAvatarInfo user={notification.fromWhom}/>
                 </Link>


             </div>
            }

            {/*********************************Order Notification*****************************/}
            {notification.type === "update-order" &&
             <div
                 className="text-black flex-grow-1 d-flex flex-column flex-nowrap me-xl-3 me-xxl-5">
                 <div className="mb-2 d-flex justify-content-between">
                     <div>
                         Your order from
                         <Link className="text-info wd-profile-link-text mx-1"
                               to="#">
                             {notification.order.restaurant}
                         </Link>
                         has been updated
                     </div>
                     <div className="text-muted fst-italic text-nowrap d-none d-md-block">
                         {moment(notification.time_created).fromNow()}
                     </div>
                 </div>
                 {/*************************Order Content*************************/}
                 <Link to={`/profile/orders/${notification.order._id}`}
                       className="wd-profile-content-hover">
                 <OrderInfo order={notification.order}/>
                 </Link>
             </div>
            }
        </div>
    )
}

export default ProfileNotificationItem;