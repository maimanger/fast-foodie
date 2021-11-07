import React from "react";
import "./index.css";
import LocationNav from "./LocationNav";
import LocationRestaurants from "./LocationRestaurants";
import SeeMore from "./SeeMore";

const LocationsExplore = () => {
    return (
        <div className={"locations-explore-container text-center pt-5 m-0 mb-5"}>
            <h4 className={"text-danger fw-bold mb-3"}>Find the Best Restaurant in Town</h4>
            <LocationNav />
            <LocationRestaurants />
            <SeeMore text={"Explore More Local Restaurant"}/>
        </div>
    )
}

export default LocationsExplore;