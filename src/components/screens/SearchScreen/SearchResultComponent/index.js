import React from "react";
import "./index.css";
import restaurants from "../../../../reducers/data/restaurants/nyc.json";
import RestaurantCard from "../../HomeScreen/LocationsExplore/RestaurantCard";

const SearchResultComponent = () => {
    return (
        <div>
            <div className={"search-path text-dark mb-2"}>
                Seattle > Restaurants
            </div>
            <h5 className={"fw-bold mb-4"}>The Best Restaurants in Seattle, WA</h5>
            <div className={"search-results"}>
                {restaurants.businesses.map(restaurant => <RestaurantCard restaurant={restaurant}/>)}
            </div>
        </div>
    )
}

export default SearchResultComponent;