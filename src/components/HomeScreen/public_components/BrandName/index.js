import React from "react";
import "./index.css";

const BrandName = () => {
    return (
        <a className="navbar-brand homescreen-app-brand" href="#">
            <span className={"me-1"}>Restaurant Explorer</span>
            <img src="./images/homepage/brand.png" alt="img" className={"homescreen-brand-img"}/>
        </a>
    )
}

export default BrandName;