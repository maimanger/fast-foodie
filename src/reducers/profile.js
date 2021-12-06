import React from "react";
import users from "./data/profile/users.json"

const testProfile = users.find(p => p._id === "123");

const profile = (state = {}, action) => {
    switch (action.type) {
        case 'fetch-profile':
            return action.profile;
            break;

        case 'edit-profile':
            const newProfile = {
                ...state,
                ...action.newProfile
            };
            return (newProfile);
            break;

        case 'delete-profile':
            return {};
            break;

        default:
            return state;
    }
}

export default profile;