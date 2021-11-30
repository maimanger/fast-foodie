import React, {useEffect, useState} from "react";
import './index.css';
import RecentActivityCards from "./RecentActivityCards";
import RecentActivityNavigation from "./RecentActivityNavigation";
import allActivities from "./data/defaultActivities.json";
import nearbyActivities from "./data/nearbyActivities.json";
import followersActivities from "./data/followersActivities.json";
import followingsActivities from "./data/followingsActivities.json";

const whoActivities = {
    "all": allActivities,
    "Nearby": nearbyActivities,
    "Followers": followersActivities,
    "Followings": followingsActivities
}

// let count = 6;

const RecentActivityComponent = () => {

    const [who, setWho] = useState("all");


    // Logged in user initiate
    const isLoggedIn = () => {
        return window.location.href === "http://localhost:3000/home/logged-in";
    }
    const initWho = () => {
        if (isLoggedIn()) {
            setWho("Nearby");
        } else {
            setWho("all");
        }
    }
    useEffect(initWho, []);



    // Navigation handler
    const navigationClickHandler = (e) => {
        // count = 6;
        setWho(e.target.innerText);
    }

    //
    // // load more activities
    // const showMoreHandler = () => {
    //     count += 6;
    // }

    return (
        <div className={"homescreen-recent-activity-container text-center p-5"}>
            <h4 className={"text-danger fw-bold mb-5"}>Recent Activity</h4>

            {isLoggedIn() && <RecentActivityNavigation clickHandler={navigationClickHandler} content={<RecentActivityCards activities={whoActivities[who]}/>}/>}
            {!isLoggedIn() && <RecentActivityCards activities={whoActivities['all']} /> }
            <div className={"homescreen-recent-activity-show-more-container d-flex justify-content-center align-items-center"}>
                <i className="fas fa-chevron-down me-3" />
                <div className={"text-danger"}>Show More</div>
            </div>
        </div>

    )
}

export default RecentActivityComponent;