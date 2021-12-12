import React from "react";

const recentActivities = (state = [], action) => {
    switch(action.type) {
        case 'fetch-userActivities':
            return action.activities;
            break;

        case 'new-userActivity':

            return [...state, action.newActivity];
            break;

        default:
            return state;
    }
}

export default recentActivities;