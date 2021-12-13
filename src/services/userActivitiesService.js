import {API_URL} from "../CONST";

// return a promise with the activities.json
export const fetchUserActivities = (dispatch) => {
    return fetch(`${API_URL}/activities`, {
        method: 'POST',
        credentials: 'include'
    })
        .then(res => res.json())
        .then(activities => {
            dispatch({
                         type: 'fetch-userActivities',
                         activities
                     })
        })
}

