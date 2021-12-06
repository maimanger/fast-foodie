import React from "react";

const loginVerification = (state = true, action) => {
    switch (action.type) {
        case "change-isValid":
            return action.isValid;
            break;

        default:
            return state;
    }
}

export default loginVerification;