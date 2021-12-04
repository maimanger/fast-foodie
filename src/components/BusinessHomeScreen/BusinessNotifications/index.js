import React from "react";
import {useSelector} from "react-redux";

import BusinessNotificationItem from "./BusinessNotificationItem";
import notifications from "../../../reducers/data/businessHome/businessNotifications.json"


const BusinessNotifications = () => {

    return (
        <>
            {notifications.length === 0 && <div>No new notification at this time.</div>}

        <ul className="list-group list-group-flush">
            {notifications.map(notification => {
                return (
                    <BusinessNotificationItem notification={notification}/>
                )
            })}
        </ul>
        </>
    )

}

export default BusinessNotifications;