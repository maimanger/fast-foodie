import React from "react";
import {API_URL} from "../CONST";
import {concatQueries} from "../utils/url";

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

