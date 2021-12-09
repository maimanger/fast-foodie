import React from "react";
import users from "./data/profile/users.json"

const testProfile = users.find(p => p._id === "123");

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

        case 'unfollow':
            if (!state['customerData']['followings'].includes(action.followeeId)) {
                return state;
            }
            const newFollowingList = state['customerData']['followings'].filter(following => following !== action.followeeId);

            return {
                ...state,
                customerData: {
                    ...state.customerData,
                    followings: newFollowingList
                }
            }


        default:
            return state;
    }
}

export default profile;