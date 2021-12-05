import React from "react";
import moment from "moment";

const ReviewStars = ({review}) => {
    let solidStars = [];
    let emptyStars = [];
    let sCount = 1;
    while (sCount <= review.rating) {
        solidStars.push(1);
        sCount++;
    }

    let eRating = 5.0 - review.rating;
    let eCount = 1;
    while (eCount <= eRating) {
        emptyStars.push(1);
        eCount++;
    }

    return (
        <div className="text-primary mb-2">
            {solidStars.map(c => <i className="fas fa-star fs-5 text-warning"></i>)}
            {emptyStars.map(c => <i className="far fa-star fs-5 text-warning"></i>)}

            <span className="text-muted ms-2">
                {moment(review.time_created).format("L")}
            </span>
        </div>
    )

}

export default ReviewStars;