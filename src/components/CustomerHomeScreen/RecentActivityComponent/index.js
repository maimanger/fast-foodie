import React, {useEffect, useState} from "react";
import './index.css';
import RecentActivityCards from "./RecentActivityCards";
import RecentActivityNavigation from "./RecentActivityNavigation";

import getHomepageRecentActivities from "../../../services/homepage-recent-activities-service";
import {useSelector} from "react-redux";

// let count = 6;
// who: "all" or "Nearby" or "Following

const RecentActivityComponent = () => {
    const profile = useSelector(state => state.profile);
    const isLoggedIn = Object.keys(profile).length !== 0;
    const defaultWho = isLoggedIn ? "Nearby" : "all";

    const [who, setWho] = useState(defaultWho);
    const [activities, setActivities] = useState([]);

    // Navigation handler
    const navigationClickHandler = (e) => {
        // count = 6;
        setWho(e.target.innerText);
    }

    useEffect(() => {
        if (Object.keys(profile).length !== 0) {
            setWho('Nearby');
        } else {
            setWho('all');
        }
    }, [profile])


    useEffect(() => {
        getHomepageRecentActivities(who)
            .then(res => {
                setActivities(res)
            })
            .catch(e => {
                setActivities([]);
            })
    }, [who]);
    //
    // // load more activities
    // const showMoreHandler = () => {
    //     count += 6;
    // }


    return (
        <div className={"homescreen-recent-activity-container text-center p-5"}>
            <h4 className={"text-danger fw-bold mb-5"}>Recent Activity</h4>

            {isLoggedIn && <RecentActivityNavigation clickHandler={navigationClickHandler}
                                                     content={<RecentActivityCards activities={activities}/>}/>}
            {!isLoggedIn && <RecentActivityCards activities={activities}/>}

            {/*************  show more pagination  **************/}
            {/*<div className={"homescreen-recent-activity-show-more-container d-flex justify-content-center align-items-center"}>*/}
            {/*    <i className="fas fa-chevron-down me-3" />*/}
            {/*    <div className={"text-danger"}>Show More</div>*/}
            {/*</div>*/}
        </div>

    )

}

export default RecentActivityComponent;