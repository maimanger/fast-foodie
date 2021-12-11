import React, {useState} from "react";
import "../Admin.css";
import moment from "moment";
import {Link} from "react-router-dom";
import {Collapse} from "react-bootstrap";
import UserAvatarInfo from "../../ProfileScreen/UserAvatarInfo";
import ReviewStars from "../../ProfileScreen/ReviewStars";
import ReviewItem from "../../ProfileScreen/ReviewItem";
import RestaurantInfo from "../../ProfileScreen/RestaurantInfo";
import RestaurantStars from "../../ProfileScreen/RestaurantStars";

const AdminNotificationItem = ({notification}) => {
    const [on, setOn] = useState(false);

    return (
        <div className="list-group-item d-flex flex-nowrap bg-transparent py-3">
            <div className="me-3" style={{width: "100px"}}>
                {moment(notification.time_created).format("MM/DD/YYYY hh:mm:ss")}
            </div>

            {/*********************************Message-in Notification*****************************/}
           {/* {notification.type === "in-message" &&
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

                     <button className="btn ms-1 rounded-circle border-0 wd-rounded-btn"
                             onClick={() => setOn(!on)}>
                         <i className="fas fa-caret-down" style={{"font-size": "20px"}}></i>
                     </button>
                 </div>

                 <Collapse in={on}>
                     <Link to={`/messages/${notification.message._id}`}
                           className="wd-profile-content-hover text-black-50">
                         {notification.message.text.split(" ").slice(0, 30).join(" ")} ...
                     </Link>
                 </Collapse>
             </div>
            }*/}


            {/*********************************Review Notification*****************************/}
           {/* {notification.type === "report-review" &&
             <div
                 className="text-black flex-grow-1 d-flex flex-column flex-nowrap me-xl-3 me-xxl-5">

                 <div className="mb-2 d-flex justify-content-between align-items-center">
                     <div>
                         <i className="fas fa-ban me-3"></i>
                         <span>
                            <Link className="text-info wd-profile-link-text mx-1"
                                  to={`/profile/${notification.report.user._id}`}>
                             {notification.report.user.firstName} {notification.report.user.lastName}
                             </Link>
                             reported a review.
                        </span>
                         <div>
                             Report reason: {notification.report.reason}
                         </div>
                     </div>

                     <button className="btn ms-1 rounded-circle border-0 wd-rounded-btn"
                             onClick={() => setOn(!on)}>
                         <i className="fas fa-caret-down" style={{"font-size": "20px"}}></i>
                     </button>
                 </div>

                 <div className="d-flex flex-column">
                     <Collapse in={on}>
                         <Link to="#" className="wd-profile-content-hover text-black">
                             <UserAvatarInfo user={notification.report.review.user}/>
                             <ReviewStars review={notification.report.review}/>
                             <ReviewItem review={notification.report.review}/>
                         </Link>
                     </Collapse>
                 </div>
             </div>
            }*/}


            {/*********************************Claim Notification*****************************/}
            {notification.type === "new-claim" &&
             <div
                 className="text-black flex-grow-1 d-flex flex-column flex-nowrap me-xl-3 me-xxl-5">

                 <div className="mb-2 d-flex justify-content-between align-items-center">
                     <div>
                         <i className="fas fa-id-card me-3"></i>
                         <span>
                             <Link className="text-info wd-profile-link-text mx-1"
                                   to={`/profile/${notification.claimDetail.userDetail._id}`}>
                                 {notification.claimDetail.userDetail.firstName} {notification.claimDetail.userDetail.lastName}
                             </Link>
                             claimed a business
                     </span>
                     </div>

                     <button className="btn ms-1 rounded-circle border-0 wd-rounded-btn"
                             onClick={() => setOn(!on)}>
                         <i className="fas fa-caret-down" style={{fontSize: "20px"}}></i>
                     </button>
                 </div>


                 <Collapse in={on}>
                     <Link to={`/restaurant/${notification.claimDetail.restaurantDetail.id}`}
                           className="wd-profile-content-hover text-black-50">
                         <RestaurantInfo restaurant={notification.claimDetail.restaurantDetail}/>
                         <RestaurantStars restaurant={notification.claimDetail.restaurantDetail}/>
                     </Link>
                 </Collapse>

             </div>
            }

        </div>

    )
};

export default AdminNotificationItem;