import React from "react";
import "./index.css";
import SearchImage from "./SearchImage";
import SearchContent from "./SearchContent";

const Search = () => {
    return (
        <div className={"search position-relative"}>
            <SearchImage />
            <SearchContent />
        </div>
    )
}

export default Search;