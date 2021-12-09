import React from "react";
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


export const follow = (followeeId, dispatch) => {
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
                followeeId,
            })
        })
}

export const unfollow = (followeeId, dispatch) => {
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
            })
        })
}

export const isFollowing = (profile, followeeId) => {
    return profile !== undefined && Object.keys(profile).length !== 0 && profile['customerData']['followings'].includes(followeeId);
}
