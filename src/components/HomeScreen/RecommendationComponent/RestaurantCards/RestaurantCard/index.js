import React from "react";
import "./index.css";
import * as truncate from "../../../utils/truncate";
import {Link} from "react-router-dom";
import ReviewStars from "../../../../ProfileScreen/ReviewStars";
import BusinessStars from "../../../../BusinessHomeScreen/BusinessStars";

const RestaurantCard = ({restaurant}) => {

    return (
        <Link className={"card homescreen-recommendation-card text-decoration-none text-black"} to={`/restaurants/${restaurant.id}`}>
            <img src={restaurant.image_url} className={"card-img-top"} alt={"img"} />
            <div className={"homescreen-recommendation-card-body p-3"}>
                <h6 className={"card-title text-danger fw-bold"}>{restaurant.name}</h6>
                <div className={"d-flex"}>
                    <div className={"me-2"}><BusinessStars restaurant={restaurant} /></div>
                    <div>{restaurant.review_count} reviews</div>
                </div>
                <div>
                    {truncate.arrayTruncate(restaurant.categories.map(category=>category.title), 42)}
                </div>
                <div>{restaurant.location.city}, {restaurant.location.state}</div>
            </div>
        </Link>
    )
}

export default RestaurantCard;