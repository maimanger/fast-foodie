import React from "react";
import breadcrumbs from "./rightNavs.json";
import HeaderBreadbrumbItem from "./RightNavItem";

const RightNavs = () => {
    return (
        <ol className="breadcrumb mb-0 sign-in-and-sign-up-link">
            {breadcrumbs.map(item => <HeaderBreadbrumbItem item={item} />)}
        </ol>
    )
}

export default RightNavs;