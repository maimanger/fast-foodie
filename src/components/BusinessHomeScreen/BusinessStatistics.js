import React, {useEffect, useState} from "react";
import restaurants from "../../reducers/data/restaurants/nyc.json"
import users from "../../reducers/data/profile/users.json"
import BusinessStars from "./BusinessStars";
import {API_URL} from "../../CONST";

const BusinessStatistics = ({restaurant}) => {

    const [reviewsCount, setReviewsCount] = useState(0);
    console.log(restaurant.id);

    useEffect(() => {
        if (restaurant.id) {
            fetch(`${API_URL}/${restaurant.id}/reviews`)
                .then(res => res.json())
                .then(reviews => {
                    if (reviews && reviews.length !== 0) {
                        setReviewsCount(reviews.length);
                    }
                })
        }
    }, [restaurant]);

    return (
        <div className="d-flex flex-column">
            <h5 className="text-danger fw-bold mb-3">Statistics</h5>

            {/*             <div className="mb-3">
                 <h6 className="fw-bold">Rating</h6>
                 <BusinessStars restaurant={restaurantData}/>
             </div>*/}

            <div className="mb-3">
                <h6 className="fw-bold">Reviews</h6>
                {reviewsCount}
            </div>

            {/*            <div className="mb-3">
                <h6 className="fw-bold">Bookmarks</h6>
                {restaurantData.bookmarks_count.toLocaleString()}
            </div>*/}

        </div>
    )
}

export default BusinessStatistics;