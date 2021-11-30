import React from "react";
import {reviews} from "./reviews.json";
import ReviewListItem from "./ReviewListItem";

import OwnerReview from "./OwnerReview";
import ReportedReview from "./ReportedReview";


const ReviewList = () => {
    return (
        <div>
        <ul className="list-group mt-3">
            {
                reviews.map(review => <ReviewListItem key={review.id} review={review} />)
            }

        </ul>

        <ul className="list-group mt-3">
        {
            reviews.map(review => <OwnerReview key={review.id} review={review} />)
        }

        </ul>

        <ul className="list-group mt-3">
        {
            reviews.map(review => <ReportedReview key={review.id} review={review} />)
        }

        </ul>
        </div>
    )

}

export default ReviewList;