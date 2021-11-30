import React from "react";
import "./index.css";
import {Link} from "react-router-dom";

const BrandName = ({color="white"}) => {
    return (
        <div className={`homescreen-brand text-${color} text-nowrap`}>
            <i className="fas fa-utensils homescreen-brand-logo me-4" />
            <span className={"text-nowrap"}>Fast Foodie</span>
        </div>
    )
}

export default BrandName;