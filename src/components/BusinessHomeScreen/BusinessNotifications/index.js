import React from "react";
import {useSelector} from "react-redux";
import ProfileNotificationItem from "../../ProfileScreen/ProfileNotifications/ProfileNotificationItem";

const ProfileNotifications = () => {
    const notifications = {

    }

    return (
        <ul className="list-group list-group-flush">
            {notifications.map(notification => {
                return (
                    <ProfileNotificationItem notification={notification}/>
                )
            })}
        </ul>
    )

}

export default ProfileNotifications;