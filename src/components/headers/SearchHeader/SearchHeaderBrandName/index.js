import React from "react";
import "./index.css";
import {Link} from "react-router-dom";

const SearchHeaderBrandName = ({color="white"}) => {
    return (
        <Link className={`homescreen-brand text-${color} text-nowrap text-decoration-none`} to={"/home"}>
            <i className="fas fa-utensils homescreen-brand-logo me-4" />
            <span className={"text-nowrap d-none d-lg-inline"}>Fast Foodie</span>
        </Link>
    )
}

export default SearchHeaderBrandName;