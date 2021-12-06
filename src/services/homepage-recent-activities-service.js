import React from "react";
import allActivities from "../components/HomeScreen/RecentActivityComponent/data/defaultActivities.json";
import nearbyActivities from "../components/HomeScreen/RecentActivityComponent/data/nearbyActivities.json";
import followingsActivities from "../components/HomeScreen/RecentActivityComponent/data/followingsActivities.json"
import {API_URL} from "../CONST";

const getHomepageAllRecentActivities = () => {
    return fetch(`${API_URL}/activities/all`)
        .then(res=>res.json())
}

const getHomepageNearbyRecentActivities = () => {
    return fetch(`${API_URL}/activities/nearby`)
        .then(res=>res.json())
}

const getHomepageFollowingRecentActivities = () => {
    return fetch(`${API_URL}/activities/following`)
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