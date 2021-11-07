import React from "react";
import "./index.css";
import restaurants from "../../../../../reducers/data/restaurants/nyc.json";
import RestaurantCard from "../RestaurantCard";

const LocationRestaurants = () => {
    let threeRestaurants = [];
    for (let i=0; i<Math.min(6, restaurants.businesses.length); i++) {
        threeRestaurants.push(restaurants.businesses[i]);
    }

    return (
        <div className={"location-restaurants-container mb-3 d-flex justify-content-center"}>
            <div className={"sub-location-restaurants-container"}>
                {threeRestaurants.map(restaurant=><RestaurantCard restaurant={restaurant} />)}
            </div>
        </div>
    )
}

export default LocationRestaurants;