import React from "react";

export const textTruncate = (text, numOfCharLimit) => {
    if (text.length <= numOfCharLimit) {
        return text;
    } else {
        let res = "";
        for (let i=0; i<numOfCharLimit; i++) {
            if (i===numOfCharLimit - 1) {
                return res + text[i] + '...';
            } else {
                res += text[i];
            }
        }
    }
}

export const arrayTruncate = (array, numOfCharLimit) => {
    if (array.join(', ').length <= numOfCharLimit) {
        return array.join(', ');
    }
    let res = '';
    for (let i=0; i<array.length; i++) {
        if ((res+ ', ' + array[i]).length >= numOfCharLimit) {
            return res + '...';
        } else {
            res = array.slice(0, i+1).join(', ');
        }
    }
}
