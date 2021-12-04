import React from "react";
import {Link} from "react-router-dom";
import moment from "moment";
import RestaurantInfo from "./RestaurantInfo";
import ReviewStars from "./ReviewStars";

const ReviewItem = ({review}) => {
    let solidStars = [];
    for (let i = 1; i <= review.rating; i++) {
        solidStars.push(1);
    }
    let emptyStars = [];
    for (let j = 1; j <= 5 - review.rating; j++) {
        emptyStars.push(1);
    }

    return (
        <>
            {/************************Review Text**************************/}
            <p className="mb-2 text-opacity-75 text-black">
                {review.text}
            </p>

            {/************************Review Img**************************/}
            <div className="d-lg-flex gap-3 col-8 col-sm-7 col-md-6 col-lg-10 col-xl-8">
                {review.img.map(i => {
                    return (
                        <div className="card text-white wd-profile-review-card">
                            <img src={i.url}
                                 className="card-img-top img-fluid"/>
                            <div
                                className="card-img-overlay d-flex py-0 px-0 flex-column justify-content-end w-auto h-auto">
                             <span className="bg-black bg-opacity-50 px-2">
                             {i.text}
                             </span>
                            </div>
                        </div>
                    )
                })}
            </div>
            </>


    )
}

export default ReviewItem;