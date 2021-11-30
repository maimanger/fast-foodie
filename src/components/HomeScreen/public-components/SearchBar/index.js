import React from "react";
import "./index.css";

const SearchBar = () => {
    return (
        <div className={"input-group homescreen-app-search-bar w-100"}>
            <label className={"input-group-text fw-bold"}
                   htmlFor={"homescreen-app-search-bar-restaurant"}>Find</label>
            <input type={"text"} className={"form-control"}
                   id="homescreen-app-search-bar-restaurant"
                   placeholder={"pizza, healthy, asian..."}/>
            <label className={"input-group-text fw-bold d-none d-lg-inline-flex"}
                   htmlFor={"homescreen-app-search-bar-location"}>Near</label>
            <input type={"text"} className={"form-control d-none d-lg-inline"}
                   id={"homescreen-app-search-bar-location"}
                   placeholder={"City, State"}/>
            <button type="button" className={"btn btn-primary shadow-none"}><i className="fas fa-search mx-3"/></button>
        </div>
    )
}

export default SearchBar;
