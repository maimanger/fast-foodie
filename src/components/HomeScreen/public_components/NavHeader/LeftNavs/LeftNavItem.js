import React from "react";

const LeftNavItem = ({item}) => {
    return (
        <li className="nav-item">
            <a className="nav-link" href={item.address}>{item.text}</a>
        </li>
    )
}

export default LeftNavItem;