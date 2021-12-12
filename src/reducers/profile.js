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
        case 'update-profile-reviews':
            state.customerData.reviews.push(action.reviewId);
            return state;
        case 'delete-profile-review':
            state.customerData.reviews = state.customerData.reviews.filter(id => id !== action.reviewId)
            console.log(state.customerData.reviews)
            return state
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

        case 'claim-approved':
            const profileAfterApproved = {
                ...state,
                businessData: {
                    "verified": true,
                    "restaurant": action.claim.restaurant,
                    "file_url": action.claim.file_url
                }
            }
            return profileAfterApproved;
        default:
            return state;
    }
}

export default profile;