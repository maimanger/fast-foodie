import React from "react";
import notifications from "../../../reducers/data/adminHome/adminNotifications.json";
import AdminNotificationItem from "./AdminNotificationItem";

const AdminNotifications = () => {
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