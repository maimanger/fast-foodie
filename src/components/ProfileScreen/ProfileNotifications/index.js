import React from "react";
import ProfileNotificationItem from "./ProfileNotificationItem";
import {useSelector} from "react-redux";



const ProfileNotifications = () => {
    const notifications = useSelector(state => state.notifications);

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