import React from "react";

const defaultProfile = {
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
}

const publicProfile = (state = defaultProfile, action) => {
    switch (action.type) {
        case 'fetch-publicProfile':
            return action.publicProfile;
            break;

        case 'follow-publicProfile':
            if (state['customerData']['followers'].includes(action.loginUserId)){
                return state;
            }
            const newFollowersAfterFollow = state['customerData']['followers'];
            newFollowersAfterFollow.push(action.loginUserId);
            return {
                ...state,
                customerData: {
                    ...state.customerData,
                    followers: newFollowersAfterFollow
                }
            }
            break;

        case 'unfollow-publicProfile':
            if (!state['customerData']['followers'].includes(action.loginUserId)) {
                return state;
            }
            const newFollowersAfterUnfollow = state['customerData']['followers'].filter(
                follower => follower !== action.loginUserId);

            return {
                ...state,
                customerData: {
                    ...state.customerData,
                    followers: newFollowersAfterUnfollow
                }
            }
            break;



        default:
            return state;
    }
}

export default publicProfile;