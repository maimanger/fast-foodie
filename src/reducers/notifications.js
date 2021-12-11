import React from "react";
import notificationsData from "./data/profile/notifications.json";

const notifications = (state = notificationsData, action) => {
    switch(action.type) {
        case 'fetch-userNotifications':
            return action.notifications;
            break;

        case 'new-userNotifications':
            return [...state, action.newNotification];
            break;

        default:
            return state;
    }
}

export default notifications;