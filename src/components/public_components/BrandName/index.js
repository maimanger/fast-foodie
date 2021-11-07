import React from "react";
import "./index.css";

const BrandName = () => {
    return (
        <a className="navbar-brand app-brand" href="#">
            <span className={"me-1"}>Restaurant Explorer</span>
            <img src="./assets/brand.png" alt="img" className={"brand-img"}/>
        </a>
    )
}

export default BrandName;