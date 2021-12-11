import React from "react";
import AdminNotificationItem from "./AdminNotificationItem";

const AdminNotifications = ({notifications}) => {
    return (
        <>
            {notifications.length === 0 && <div>No new notification at this time.</div>}

            <ul className="list-group list-group-flush">
                {notifications.map(notification => {
                    return (
                        <AdminNotificationItem notification={notification}/>
                    )
                })}
            </ul>
        </>
    )
}

export default AdminNotifications;