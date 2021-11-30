import React from "react";

const RestaurantStars = ({restaurant}) => {
    let solidStars = [];
    let emptyStars = [];
    let halfStars = [];
    let sCount = 1;
    while (sCount <= restaurant.rating) {
        solidStars.push(1);
        sCount++;
    }
    let eRating = 5 - restaurant.rating;
    let eCount = 1;
    while (eCount <= eRating) {
        emptyStars.push(1);
        eCount++;
    }
    if (eCount - eRating > 0) {
        halfStars.push(1);
    }

    return (
        <div className="text-primary mb-2">
            {solidStars.map(c => <i className="fas fa-star fs-5 text-warning"></i>)}
            {halfStars.map(c => <i className="fas fa-star-half-alt fs-5 text-warning"></i>)}
            {emptyStars.map(c => <i className="far fa-star fs-5 text-warning"></i>)}

            <span className="text-muted ms-2">
                {restaurant.review_count} reviews
            </span>
        </div>
    )

}

export default RestaurantStars;