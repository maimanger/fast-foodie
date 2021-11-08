import React from "react";
import {Link} from "react-router-dom";
import ReviewItem from "./ReviewItem";

const ProfileRecentActivityItem = ({type = "review"}) => {
    return (
        <div className="list-group-item d-flex flex-nowrap bg-transparent py-3">
            <div className="me-3">
                <img className=" rounded-circle" src="/images/ProfilePage/avatar_img.jpg"
                     width="48px" height="48px"/>
            </div>

            {/*******************************Review Activity************************************/}
            {type === "review" &&
             <Link
                 className="wd-profile-notification-hover text-black flex-grow-1 d-flex flex-column flex-nowrap me-xl-3 me-xxl-5"
                 to="#">
                 <div className="mb-2 d-flex justify-content-between">
                     <div>
                         You wrote a review for
                         <Link className="text-info wd-profile-link-text mx-1"
                               to="#">
                             Shake Shack</Link>
                     </div>
                     <div className="text-muted fst-italic text-nowrap d-none d-md-block">
                         2 hours ago
                     </div>
                 </div>

                 <ReviewItem/>
             </Link>
            }


            {/*******************************Bookmark Activity************************************/}
            {type === "bookmark" &&
             <Link
                 className="wd-profile-notification-hover text-black flex-grow-1 d-flex flex-column flex-nowrap me-xl-3 me-xxl-5"
                 to="#">
                 <div className="mb-2 d-flex justify-content-between">
                     <div>
                         You bookmarked
                         <Link className="text-info wd-profile-link-text mx-1"
                               to="#">
                             Shake Shack</Link>
                     </div>
                     <div className="text-muted fst-italic text-nowrap d-none d-md-block">
                         2 hours ago
                     </div>
                 </div>

                 {/*****************************Restaurant Component***********************/}
                 <div className="row g-3 mb-2">
                     {/************************Restaurant Avatar**************************/}
                     <div className="col-4 col-md-2">
                         <img src="/images/ProfilePage/shake_shack.jpg" className="img-fluid rounded-3"/>
                     </div>
                     {/************************Restaurant Info**************************/}
                     <div className="col-12 col-md-8 d-flex flex-column">
                         <div className="fw-bold text-info wd-profile-link-text">
                             Shake Shack
                         </div>
                         <div className="text-info font-weight-light">
                             $$
                             <span className="ms-1">•</span>
                             <span className="wd-profile-link-text ms-1">Burgers</span>,
                             <span className="wd-profile-link-text ms-1">Ice Cream & Frozen Yogurt</span>,
                             <span
                                 className="wd-profile-link-text ms-1">American(Traditional)</span>
                         </div>
                         <div>
                             92 Winthrop St
                         </div>
                         <div>
                             Cambridge, MA 02138
                         </div>
                     </div>
                 </div>
                 {/************************Review Stars**************************/}
                 <div className="text-primary mb-2">
                     <i className="fas fa-star fs-5"></i>
                     <i className="fas fa-star fs-5"></i>
                     <i className="fas fa-star fs-5"></i>
                     <i className="fas fa-star-half-alt fs-5"></i>
                     <i className="far fa-star fs-5"></i>
                     <span className="text-muted ms-2">
                           22 reviews
                         </span>
                 </div>
             </Link>
            }

            {/*******************************Message-out Activity************************************/}
            {type === "message-out" &&
             <Link className="wd-profile-notification-hover text-black flex-grow-1 d-flex flex-column flex-nowrap me-xl-3 me-xxl-5"
                   to="#">
                 <div className="mb-2 d-flex justify-content-between">
                     <div>
                         You sent a new message to
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

            {/*********************************Follow Activity*****************************/}
            {type === "follow" &&
             <Link className="wd-profile-notification-hover text-black flex-grow-1 d-flex flex-column flex-nowrap me-xl-3 me-xxl-5"
                   to="#">
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
             </Link>
            }







        </div>
    )
};


export default ProfileRecentActivityItem;