import React from "react";
import {Link} from "react-router-dom";
import "./Profile.css";

const ProfileNotificationItem = ({type = "message-in"}) => {
    return (
        <div className="list-group-item d-flex flex-nowrap bg-transparent py-3">
            <div className="me-3">
                <img className=" rounded-circle" src="/images/ProfilePage/avatar_img2.jpg"
                     width="48px" height="48px"/>
            </div>

            {/*********************************Message-in Notification*****************************/}
            {type === "message-in" &&
             <Link className="wd-profile-notification-hover text-black flex-grow-1 d-flex flex-column flex-nowrap me-xl-3 me-xxl-5"
                   to="#">
                 <div className="mb-2 d-flex justify-content-between">
                     <div>
                         You received a new message from
                         <Link className="text-info wd-profile-link-text mx-1"
                               to="#">
                             Mike Shah</Link>
                     </div>
                     <div className="text-muted fst-italic text-nowrap d-none d-md-block">
                         2 hours ago
                     </div>
                 </div>
                 <div className="text-secondary">
                     Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                     incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
                     nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat...
                 </div>
             </Link>
            }

            {/*********************************Follower Notification*****************************/}
            {type === "follower" &&
             <Link className="wd-profile-notification-hover text-black flex-grow-1 d-flex flex-column flex-nowrap me-xl-3 me-xxl-5"
                   to="#">
                 <div className="mb-2 d-flex justify-content-between">
                     <div>
                         You have a new follower
                         <Link className="text-info wd-profile-link-text mx-1"
                               to="#">
                             Mike Shah</Link>
                     </div>
                     <div className="text-muted fst-italic text-nowrap d-none d-md-block">
                         2 hours ago
                     </div>
                 </div>
             </Link>
            }

            {/*********************************Order Notification*****************************/}
            {type === "order" &&
             <Link className="wd-profile-notification-hover text-black flex-grow-1 d-flex flex-column flex-nowrap me-xl-3 me-xxl-5"
                   to="#">
                 <div className="mb-2 d-flex justify-content-between">
                     <div>
                         Your order from
                         <Link className="text-info wd-profile-link-text mx-1"
                               to="#">
                             Shake Shack</Link>
                         has been updated
                     </div>
                     <div className="text-muted fst-italic text-nowrap d-none d-md-block">
                         2 hours ago
                     </div>
                 </div>
                 {/*************************Order Content*************************/}
                 <div className="card border-0 bg-transparent">
                     <div className="row g-0">
                         <div className="col-4 col-md-3 col-xl-2">
                             <img className="img-fluid rounded-start" src="/images/ProfilePage/shake_shack.jpg"/>
                         </div>
                         <div className="col-8">
                             <div className="card-body py-1">
                                 <h5 className="card-title">Shake Shack</h5>
                                 <div className="card-text text-secondary">
                                     This is a wider card with supporting text
                                     below as a natural lead-in to additional content. This content
                                     is a little bit longer.
                                 </div>
                             </div>
                         </div>

                     </div>
                 </div>
             </Link>
            }
        </div>
    )
};

export default ProfileNotificationItem;