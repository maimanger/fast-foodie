import React from "react";
import restaurants from "../../reducers/data/restaurants/nyc.json"
import users from "../../reducers/data/profile/users.json"
import BusinessStars from "./BusinessStars";

const BusinessStatistics = ({restaurant}) => {
    const restaurantData = {...restaurant, "bookmarks_count": 250};

    return (
        <div className="d-flex flex-column">
            <h5 className="text-danger fw-bold mb-3">Statistics</h5>

             <div className="mb-3">
                 <h6 className="fw-bold">Rating</h6>
                 <BusinessStars restaurant={restaurantData}/>
             </div>

{/*             <div className="mb-3">
                 <h6 className="fw-bold">Reviews</h6>
                 {restaurant.review_count.toLocaleString()}
             </div>*/}

            <div className="mb-3">
                <h6 className="fw-bold">Bookmarks</h6>
                {restaurantData.bookmarks_count.toLocaleString()}
            </div>

        </div>
    )
}

export default BusinessStatistics;