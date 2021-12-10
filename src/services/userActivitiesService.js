import {API_URL} from "../CONST";

// return a promise with the activities.json
// if return an error, we can catch it in the component page and redirect to "/login"
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