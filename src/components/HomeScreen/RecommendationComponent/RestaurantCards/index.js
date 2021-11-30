import React from "react";
import "./index.css";
import restaurants from "../../../../reducers/data/restaurants/nyc.json";
import RestaurantCard from "./RestaurantCard";

const RestaurantCards = () => {
    let threeRestaurants = [restaurants.businesses[0], restaurants.businesses[1], restaurants.businesses[2]];

    return (
        <div className={"homescreen-recommendation-cards d-flex justify-content-center"}>
            {threeRestaurants.map(restaurant=>{return (
                <div className={"me-4"}>
                    <RestaurantCard restaurant={restaurant} />
                </div>
            )})}
        </div>
    )
}

export default RestaurantCards;