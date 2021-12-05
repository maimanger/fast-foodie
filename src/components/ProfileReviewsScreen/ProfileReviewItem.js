import React from "react";
import {Collapse} from "react-bootstrap";
import {Link} from "react-router-dom";
import RestaurantInfo from "../ProfileScreen/RestaurantInfo";
import ReviewStars from "../ProfileScreen/ReviewStars";
import ReviewItem from "../ProfileScreen/ReviewItem";

const ProfileReviewItem = ({review, isPublic=false}) => {

    return (
        <>
            <div className="list-group-item d-flex flex-column bg-transparent py-3 pe-xl-3 pe-xxl-5">

                    <Link to="#" className="wd-profile-content-hover text-black">
                        <RestaurantInfo restaurant={review.restaurant}/>
                        <ReviewStars review={review}/>
                        <ReviewItem review={review}/>
                    </Link>

                {isPublic  &&
                    <Link className="ms-auto me-2 btn btn-outline-info rounded-pill py-1 mt-1"
                          to="#">
                         Reply
                    </Link>
                }

                {!isPublic  &&
                 <Link className="ms-auto me-2 btn btn-outline-info rounded-pill py-1 mt-1"
                       to="#">
                     Edit
                 </Link>
                }

            </div>

        </>

    )

}
export default ProfileReviewItem;