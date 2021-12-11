import React from "react";
import ProfileNotificationItem from "./ProfileNotificationItem";
import {useSelector} from "react-redux";



const ProfileNotifications = ({notifications, profile}) => {

    return (
        <>
            {notifications.length === 0 && <div>No new notification at this time.</div>}

        <ul className="list-group list-group-flush">
            {notifications.map(notification => {
                return (
                    <ProfileNotificationItem notification={notification} profile={profile}/>
                )
            })}
        </ul>
        </>
    )

}

export default ProfileNotifications;