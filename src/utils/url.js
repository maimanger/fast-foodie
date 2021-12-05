import React from "react";

export const concatQueries = (queries) => {

    // const keysArr = Object.keys(queries).filter(key => key !== "location");
    // const arr = keysArr.map(key => `${key}=${queries[key]}`);

    const arr = Object.keys(queries).map(key => `${key}=${queries[key]}`)
    return arr.join('&');
}