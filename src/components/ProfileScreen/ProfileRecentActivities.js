import React from "react";
import ProfileRecentActivityItem from "./ProfileRecentActivityItem"

const ProfileRecentActivities = () => {
    return (
        <ul className="list-group list-group-flush">
            <ProfileRecentActivityItem/>
            <ProfileRecentActivityItem type="bookmark"/>
            <ProfileRecentActivityItem type="message-out"/>
            <ProfileRecentActivityItem type="follow"/>
        </ul>
    )

}

export default ProfileRecentActivities;