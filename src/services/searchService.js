import React from "react";
import {API_URL} from "../CONST";
import {concatQueries} from "../components/CustomerHomeScreen/utils/url";

export const searchRestaurants = (params) => {
    const queries = {};
    Object.keys(params).map(key => {
        if (key !== "location") {
            queries[key] = params[key]
        }
    })

    return fetch(`${API_URL}/search/${params.location}${Object.keys(queries).length!==0 ? "?" : ""}${concatQueries(queries)}`)
        .then(res=>res.json())
}

export const matchRestaurant = (queries) => {
    return fetch(`${API_URL}/match${Object.keys(queries).length!==0 ? "?" : ""}${concatQueries(queries)}`)
        .then(res=>res.json())
}

export const searchOneRestaurantById = (restaurantId) => {
    return fetch(`${API_URL}/restaurants/${restaurantId}`)
        .then(res=>res.json())
}