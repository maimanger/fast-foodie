import React from "react";
import {Link} from "react-router-dom";

import moment from "moment";
import UserAvatarInfo from "../../ProfileScreen/UserAvatarInfo";
import OrderInfo from "../../ProfileScreen/OrderInfo";

const BusinessNotificationItem = ({notification}) => {
    return (
        <div className="list-group-item d-flex flex-nowrap bg-transparent py-3">

            {/*********************************Message-in Notification*****************************/}
            {notification.type === "in-message" &&
             <>
                 <div className="me-3">
                     {moment(notification.time_created).format("MM/DD/YYYY hh:mm:ss")}
                 </div>


                 <div
                     className="text-black flex-grow-1 d-flex flex-column flex-nowrap me-xl-3 me-xxl-5">

                     {/**********************Notification Text*******************************/}
                     <div className="mb-2">
                             <i className="fas fa-envelope me-2"></i>
                             You received a new message from
                             <Link className="text-info wd-profile-link-text mx-1"
                                   to={`/profile/${notification.message.sender._id}`}>
                                 {notification.message.sender.firstName} {notification.message.sender.lastName}
                             </Link>
                     </div>

                     {/**********************Notification Content*******************************/}
                     <Link to={`/messages/${notification.message._id}`}
                           className="wd-profile-content-hover text-black-50">
                         {notification.message.text.split(" ").slice(0, 30).join(" ")} ...
                     </Link>

                 </div>
             </>
            }

            {/*********************************Follower Notification*****************************/}
            {/*            {notification.type === "new-follower" &&
             <div
                 className="text-black flex-grow-1 d-flex flex-column flex-nowrap me-xl-3 me-xxl-5">
                 <div className="mb-2 d-flex justify-content-between">
                     <div>
                         You have a new follower
                         <Link className="text-info wd-profile-link-text mx-1"
                               to={`/profile/${notification.follow.follower._id}`}>
                             {notification.follow.follower.firstName} {notification.follow.follower.lastName}
                         </Link>
                     </div>
                     <div className="text-muted fst-italic text-nowrap d-none d-md-block">
                         {moment(notification.time_created).fromNow()}
                     </div>
                 </div>
                 <Link to={`/profile/${notification.follow.follower._id}`} className="wd-profile-content-hover">
                     <UserAvatarInfo user={notification.follow.follower}/>
                 </Link>


             </div>
            }*/}

            {/*********************************Order Notification*****************************/}
            {/*            {notification.type === "update-order" &&
             <div
                 className="text-black flex-grow-1 d-flex flex-column flex-nowrap me-xl-3 me-xxl-5">
                 <div className="mb-2 d-flex justify-content-between">
                     <div>
                         Your order from
                         <Link className="text-info wd-profile-link-text mx-1"
                               to="#">
                             {notification.order.restaurant.name}
                         </Link>
                         has been updated
                     </div>
                     <div className="text-muted fst-italic text-nowrap d-none d-md-block">
                         {moment(notification.time_created).fromNow()}
                     </div>
                 </div>
                 ************************Order Content************************
                 <Link to={`/profile/orders/${notification.order._id}`}
                       className="wd-profile-content-hover">
                     <OrderInfo order={notification.order}/>
                 </Link>
             </div>
            }*/}
        </div>
    )
};

export default BusinessNotificationItem;