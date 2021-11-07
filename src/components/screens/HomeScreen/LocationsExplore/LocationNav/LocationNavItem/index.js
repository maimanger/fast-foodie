import React from "react";
import "./index.css"

const LocationNavItem = ({city}) => {

    const createMarkup = () => {
        return {__html: city};
    }
    return (
        <li className="nav-item nav-item-location">
            <a className="nav-link text-dark" href="#" dangerouslySetInnerHTML={createMarkup()}></a>
        </li>
    )
}

export default LocationNavItem;