
import {API_URL} from "../CONST";

// return a promise with the profile.json
export const login = (user) => {
    return fetch(`${API_URL}/login`, {
        method: 'POST',
        body: JSON.stringify(user),
        credentials: 'include',
        headers: {
            'content-type': 'application/json'
        }
    })
        .then(res => res.json())
}

// return a promise with the fetch status
export const logout = () => {
    return fetch(`${API_URL}/logout`, {
        method: 'POST',
        credentials: 'include'
    })
}

// return a promise with the profile.json
// if return an error, we can catch it in the component page and redirect to "/login"
export const fetchProfile = (dispatch) => {
    return fetch(`${API_URL}/profile`, {
        method: 'POST',
        credentials: 'include'
    })
        .then(res => res.json())
        .then(profile => {
            dispatch({
                         type: "fetch-profile",
                         profile
                     });
        })
}

// return a promise with the register status
export const register = (user) => {
    return fetch(`${API_URL}/register`, {
        method: 'POST',
        body: JSON.stringify(user),
        credentials: 'include',
        headers: {
            'content-type': 'application/json'
        }
    })
}

export const follow = (followeeId, loginUserId, dispatch) => {
    fetch(`${API_URL}/follow`, {
        method: 'PUT',
        credentials: 'include',
        body: JSON.stringify({followeeId}),
        headers: {
            'content-type': 'application/json'
        }
    })
        .then(res => {
            dispatch({
                         type: 'follow',
                         followeeId
                     });
            dispatch({
                         type: 'follow-publicProfile',
                         loginUserId
                     });
        })
}

export const unfollow = (followeeId, loginUserId, dispatch) => {
    fetch(`${API_URL}/unfollow`, {
        method: 'PUT',
        credentials: 'include',
        body: JSON.stringify({followeeId}),
        headers: {
            'content-type': 'application/json'
        }
    })
        .then(res => {
            dispatch({
                         type: 'unfollow',
                         followeeId,
                     });
            dispatch({
                         type: 'unfollow-publicProfile',
                         loginUserId
                     });
        })

}

export const isFollowing = (profile, followeeId) => {
    return profile !== undefined && Object.keys(profile).length !== 0
           && profile['customerData']['followings'].includes(followeeId);
}


export const findUserById = (userId, dispatch) => {
    return fetch(`${API_URL}/users/${userId}`, {
        credentials: 'include',
        headers: {
            'content-type': 'application/json'
        }
    }).then(res => res.json())
        .then(publicProfile => {
            dispatch({
                         type: 'fetch-publicProfile',
                         publicProfile: {...publicProfile}
                     })
        }).catch(err => {console.log(err)})
}

export const findOneUserById = (userId) => {
    return fetch(`${API_URL}/users/${userId}`)
        .then(res => res.json())
}

export const fetchAllFollowings = () => {
    return fetch(`${API_URL}/allFollowings`, {
        method: 'POST',
        credentials: 'include'
    }).then(res => res.json())
}

export const fetchAllFollowers = () => {
    return fetch(`${API_URL}/allFollowers`, {
        method: 'POST',
        credentials: 'include'
    }).then(res => res.json())
}