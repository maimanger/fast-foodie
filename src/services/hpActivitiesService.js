import React from "react";
import {API_URL} from "../CONST";

const getHomepageAllRecentActivities = () => {
    return fetch(`${API_URL}/activities/all`)
        .then(res=>res.json())
}

const getHomepageNearbyRecentActivities = () => {
    return fetch(`${API_URL}/activities/nearby`, {
        credentials: 'include'
    })
        .then(res=>res.json())
}

const getHomepageFollowingRecentActivities = () => {
    return fetch(`${API_URL}/activities/following`, {
        credentials: 'include'
    })
        .then(res=>res.json())
}

const getHomepageRecentActivities = (who) => {
    if (who === "all") {
        return getHomepageAllRecentActivities();
    } else if (who === "Nearby") {
        return getHomepageNearbyRecentActivities();
    } else if (who === "Following") {
        return getHomepageFollowingRecentActivities();
    }
}

export default getHomepageRecentActivities;