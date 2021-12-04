import React from "react";
import shake_shack from "./data/business_detail/shake_shack.json"

const restaurant = (state = shake_shack, action) => {
    switch (action.type) {
        case 'fetch-restaurant':
            return action.restaurant;
        default:
            return state;
    }
}

export default restaurant;
