import React from "react";
import ProfileNotificationItem from "./ProfileNotificationItem";

const ProfileNotifications = () => {
    return (
        <ul className="list-group list-group-flush">
            <ProfileNotificationItem/>
            <ProfileNotificationItem type="follower"/>
            <ProfileNotificationItem type="order"/>

        </ul>
    )

}

export default ProfileNotifications;