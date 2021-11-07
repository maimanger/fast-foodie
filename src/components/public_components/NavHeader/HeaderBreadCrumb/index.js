import React from "react";
import "./index.css";
import breadcrumbs from "./headerBreadcrumbs.json";
import HeaderBreadbrumbItem from "./HeaderBreadcrumbItem";

const HeaderBreadcrumb = () => {
    return (
        <ol className="breadcrumb mb-0 sign-in-and-sign-up-link">
            {breadcrumbs.map(item => <HeaderBreadbrumbItem item={item} />)}
        </ol>
    )
}

export default HeaderBreadcrumb;