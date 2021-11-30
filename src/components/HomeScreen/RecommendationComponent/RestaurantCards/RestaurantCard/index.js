import React from "react";
import "./index.css";
import * as truncate from "../../../public-components/Utils/truncate";

const RestaurantCard = ({restaurant}) => {

    return (
        <div className={"card homescreen-recommendation-card"}>
            <img src={restaurant.image_url} className={"card-img-top"} alt={"img"} />
            <div className={"homescreen-recommendation-card-body p-3"}>
                <h6 className={"card-title text-danger fw-bold"}>{restaurant.name}</h6>
                <div className={"d-flex"}>
                    <div>Rating: {restaurant.rating}</div>
                    <div>&nbsp;|&nbsp;</div>
                    <div>{restaurant.review_count} reviews</div>
                </div>
                <div>
                    {truncate.arrayTruncate(restaurant.categories.map(category=>category.title), 42)}
                </div>
                <div>{restaurant.location.city}, {restaurant.location.state}</div>
            </div>
        </div>
    )
}

export default RestaurantCard;