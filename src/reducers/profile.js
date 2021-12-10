import React from "react";
import users from "./data/profile/users.json"

/*const defaultProfile = {
    "role": "",
    "username": "",
    "password": "",
    "email": "",
    "firstName": "",
    "lastName": "",
    "image_url": "",
    "location": "",
    "birthday": "",
    "dateJoined": "",
    "customerData": {
        "reviews": [],
        "followings": [],
        "followers": [],
        "bookmarks": [],
        "visibility": {
            "location": true,
            "birthday": true,
            "bookmarks": true
        }
    },
    "businessData": {
        "verified": false,
        "restaurantId": ""
    }
};*/

const defaultProfile = {};

const profile = (state = {}, action) => {
    switch (action.type) {
        case 'fetch-profile':
            return action.profile;
            break;

        case 'edit-profile':
        case 'create-profile':
            const newProfile = {
                ...state,
                ...action.newProfile
            };
            return (newProfile);
            break;

        case 'delete-profile':
            return {};
            break;

        case 'follow':
            if (state['customerData']['followings'].includes(action.followeeId)){
                return state;
            }
            const newFollowings = state['customerData']['followings'];
            newFollowings.push(action.followeeId);
            return {
                ...state,
                customerData: {
                    ...state.customerData,
                    followings: newFollowings
                }
            }
            break;

        case 'unfollow':
            if (!state['customerData']['followings'].includes(action.followeeId)) {
                return state;
            }
            const newFollowingList = state['customerData']['followings'].filter(following => following !== action.followeeId);

            console.log(newFollowingList);

            return {
                ...state,
                customerData: {
                    ...state.customerData,
                    followings: newFollowingList
                }
            }
            break;


        default:
            return state;
    }
}

export default profile;