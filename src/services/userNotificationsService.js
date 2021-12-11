import {API_URL} from "../CONST";

// return a promise with the activities.json
export const fetchUserNotifications = (dispatch) => {
    return fetch(`${API_URL}/notifications`, {
        method: 'POST',
        credentials: 'include'
    })
        .then(res => res.json())
        .then(activities => {
            dispatch({
                         type: 'fetch-userNotifications',
                         activities
                     })
        })
}