import React from "react";
import "./index.css";

const SearchBar = () => {
    return (
        <div className={"input-group search-bar"}>
            <span className={"input-group-text"}>Find</span>
            <input type={"text"} className={"form-control search-input-restaurant"} placeholder={"pizza, healthy, asian..."} />
            <input type={"text"} className={"form-control search-input-location d-none d-lg-inline"} placeholder={"City State"} />
            <button type="button" className={"btn btn-danger shadow-none"}><i className="fas fa-search mx-3"></i></button>
        </div>
    )
}

export default SearchBar;
