import React from "react";

const HeaderBreadcrumbItem = ({item}) => {
    return (<li className="breadcrumb-item"><a href={item.address}>{item.text}</a></li>)
}

export default HeaderBreadcrumbItem;