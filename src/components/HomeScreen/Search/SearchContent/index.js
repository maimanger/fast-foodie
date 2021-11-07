import React from "react";
import "./index.css"
import SearchTitle from "./SearchTitle";
import SearchBar from "../../public_components/SearchBar";

const SearchContent = () => {
    return (
        <div className={"search-content"}>
            <SearchTitle />
            <div className={"homepage-search-bar"}>
                <SearchBar />
            </div>

        </div>
    )
}

export default SearchContent;