import React from "react";
import {Collapse} from "react-bootstrap";
import {Link, useParams} from "react-router-dom";
import RestaurantInfo from "../ProfileScreen/RestaurantInfo";
import ReviewStars from "../ProfileScreen/ReviewStars";
import ReviewItem from "../ProfileScreen/ReviewItem";
import {HashLink} from "react-router-hash-link";

const ProfileReviewItem = ({review, isBusinessLogin}) => {
    const userId = useParams().id;
    const isPublic = userId && true;

    return (
        <>
            <div className="list-group-item d-flex flex-column bg-transparent py-3 pe-xl-3 pe-xxl-5">

                    <HashLink to={`/restaurants/${review.restaurantDetail.id}/review#${review._id}`}
                              className="wd-profile-content-hover text-black">
                        <RestaurantInfo restaurant={review.restaurantDetail}/>
                        <ReviewStars review={review}/>
                        <ReviewItem review={review}/>
                    </HashLink>

                {isPublic && isBusinessLogin &&
                    <HashLink className="ms-auto me-2 btn btn-outline-info rounded-pill py-1 mt-1"
                          to={`/restaurants/${review.restaurantDetail.id}/review#${review._id}`}>
                         Reply
                    </HashLink>
                }

                {!isPublic  &&
                 <HashLink className="ms-auto me-2 btn btn-outline-info rounded-pill py-1 mt-1"
                       to={`/restaurants/${review.restaurantDetail.id}/review#${review._id}`}>
                     Edit
                 </HashLink>
                }

            </div>

        </>

    )

}
export default ProfileReviewItem;