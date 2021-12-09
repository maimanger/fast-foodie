import React from "react";

export const concatQueries = (queries) => {

    // const keysArr = Object.keys(queries).filter(key => key !== "location");
    // const arr = keysArr.map(key => `${key}=${queries[key]}`);

    const keyArr = Object.keys(queries).filter(key=>queries[key] !== '');

    const arr = keyArr.map(key => `${key}=${queries[key]}`)
    return arr.join('&');
}