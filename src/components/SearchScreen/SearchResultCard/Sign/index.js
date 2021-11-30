import React from "react";
import YesSign from "./YesSign";
import NoSign from "./NoSign";

const Sign = ({bool=true}) => {
    return bool ? <YesSign /> : <NoSign />
}

export default Sign;