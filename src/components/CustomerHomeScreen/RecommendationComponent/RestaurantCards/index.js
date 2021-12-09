import React, {useEffect, useState} from "react";
import "./index.css";
import restaurants from "../../../../reducers/data/restaurants/nyc.json";
import RestaurantCard from "./RestaurantCard";
import {searchRestaurants} from "../../../../services/searchService";

const RestaurantCards = ({location}) => {

    const [recommendationList, setRecommendationList] = useState([]);
    useEffect(() => {
        searchRestaurants({location: location, attributes: "hot_and_new", limit: 3})
            .then(restaurants => {
                setRecommendationList(restaurants)
            })
    }, [location]);

    return (
        <div className={"homescreen-recommendation-cards d-flex justify-content-center"}>
            {recommendationList.map(restaurant=>{return (
                <div className={"me-4"}>
                    <RestaurantCard restaurant={restaurant} />
                </div>
            )})}
        </div>
    )
}

export default RestaurantCards;