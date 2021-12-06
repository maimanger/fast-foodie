import React from "react";

const profileVerification = (state = true, action) => {
    switch (action.type) {
        case "change-isValid":
            return action.isValid;
            break;

        default:
            return state;
    }
}

export default profileVerification;