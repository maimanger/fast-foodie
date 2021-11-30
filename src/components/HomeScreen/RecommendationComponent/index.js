import React from "react";
import "./index.css";
import RestaurantCards from "./RestaurantCards";

const RecommendationComponent = ({city="Seattle"}) => {
    return (
        <div className={"homescreen-recommendation-container text-center p-5 m-0"}>
            <h4 className={"text-danger fw-bold mb-5"}>Hot & New in {city}</h4>
            <div className={"mb-5"}>
                <RestaurantCards />
            </div>

            <div>
                <button className={"btn btn-light me-5"}>See More</button>
                <button className={"btn btn-light ms-5"}>Switch a City</button>
            </div>
        </div>
    )
}

export default RecommendationComponent;