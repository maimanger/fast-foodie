import React from "react";
import "./index.css";
import RestaurantCards from "./RestaurantCards";
import {Link} from "react-router-dom";
import {concatQueries} from "../../../utils/url";

const RecommendationComponent = ({location}) => {

    return (
        <div className={"homescreen-recommendation-container text-center p-5 m-0"}>
            <h4 className={"text-danger fw-bold mb-5"}>Hot & New in {location}</h4>
            <div className={"mb-5"}>
                <RestaurantCards location={location}/>
            </div>

            <Link to={`/search?${concatQueries({location:location, attributes: "hot_and_new"})}`}>
                <button className={"btn btn-light"}>See More</button>
            </Link>
        </div>
    )
}

export default RecommendationComponent;