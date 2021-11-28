import React from "react";
import users from "./data/profile/users.json"

const profileData = users.find(p => p._id === "123");

const profile = (state = profileData, action) => {
    switch (action.type) {
        case 'edit-profile':
            const newProfile = {
                ...state,
                ...action.newProfile
            };
            return (newProfile);
            break;

        default:
            return state;
    }
}

export default profile;