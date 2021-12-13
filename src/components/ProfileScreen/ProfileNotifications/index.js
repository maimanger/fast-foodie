import React from "react";
import ProfileNotificationItem from "./ProfileNotificationItem";
import {useSelector} from "react-redux";



const ProfileNotifications = ({notifications, profile}) => {
/*    const notifications = useSelector(state => state.notifications);*/
    if (notifications) {
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
    } else {
        return (
            <h4>
                No new notification at this time.
            </h4>
        )
    }


}

export default ProfileNotifications;