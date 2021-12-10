import React from "react";
import ProfileRecentActivityItem from "./ProfileRecentActivityItem"
import {useSelector} from "react-redux";

const defaultProfile = {
    "role": "",
    "username": "",
    "password": "",
    "email": "",
    "firstName": "",
    "lastName": "",
    "image_url": "",
    "location": "",
    "birthday": "",
    "dateJoined": "",
    "customerData": {
        "reviews": [],
        "followings": [],
        "followers": [],
        "bookmarks": [],
        "visibility": {
            "location": true,
            "birthday": true,
            "bookmarks": true
        }
    },
    "businessData": {
        "verified": false,
        "restaurantId": ""
    }
}

const ProfileRecentActivities = ({
                                     recentActivities = [],
                                     profile = defaultProfile
                                 }) => {

    return (
        <>
            {recentActivities.length === 0 && <div>No new activity at this time.</div>}

            <ul className="list-group list-group-flush">
                {recentActivities.map(activity => {
                    return (
                        <ProfileRecentActivityItem activity={activity} profile={profile}/>
                    )
                })}

            </ul>
        </>
    )

};

export default ProfileRecentActivities;