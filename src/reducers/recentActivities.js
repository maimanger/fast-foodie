import React from "react";

const recentActivities = (state = [], action) => {
    switch(action.type) {
        case 'fetch-userActivities':
            return action.activities;
            break;
    }

    return state;
}

export default recentActivities;