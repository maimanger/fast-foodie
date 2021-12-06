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