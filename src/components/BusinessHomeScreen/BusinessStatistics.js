import React, {useEffect, useState} from "react";
import restaurants from "../../reducers/data/restaurants/nyc.json"
import users from "../../reducers/data/profile/users.json"
import BusinessStars from "./BusinessStars";
import {API_URL} from "../../CONST";
import DecimalStar from "../ProfileScreen/stars/DecimalStar";

const BusinessStatistics = ({restaurant}) => {

    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        if (restaurant.id) {
            fetch(`${API_URL}/${restaurant.id}/reviews`)
                .then(res => res.json())
                .then(reviews => {
                    if (reviews && reviews.length !== 0){
                        setReviews(reviews);
                    }
                })}
        }, [restaurant]);


    return (
        <div className="d-flex flex-column">
            <h5 className="text-danger fw-bold mb-3">Statistics</h5>

            <div className="mb-3">
                 <h6 className="fw-bold">Rating</h6>
                <DecimalStar reviews={reviews} />
            </div>


            <div className="mb-3">
                <h6 className="fw-bold">Reviews</h6>
                {reviews.length}
            </div>

            {/*            <div className="mb-3">
                <h6 className="fw-bold">Bookmarks</h6>
                {restaurantData.bookmarks_count.toLocaleString()}
            </div>*/}

        </div>
    )
}

export default BusinessStatistics;