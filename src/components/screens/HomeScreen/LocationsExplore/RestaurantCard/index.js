import React from "react";
import "./index.css";

const RestaurantCard = ({restaurant}) => {
    const restaurant_category = [];
    for (let i=0; i<Math.min(3, restaurant.categories.length); i++) {
        restaurant_category.push(restaurant.categories[i].title)
    }

    console.log(restaurant_category);
    return (
        <div className={"card card-explore-restaurant"}>
            <div className={"location-explore-img"}>
                <img src={restaurant.image_url} className={"card-img-top"} alt={"..."} />
            </div>
            <div className={"card-body-explore-restaurant p-2"}>
                <h6 className={"card-title text-blue fw-bold text-primary"}>{restaurant.name}</h6>
                <div>
                    <span>Ratings: {restaurant.rating}</span> <span> | </span> <span>Reviews: {restaurant.review_count}</span>
                </div>
                <div>{restaurant_category.join(", ")}</div>
            </div>
        </div>
    )
}

export default RestaurantCard;