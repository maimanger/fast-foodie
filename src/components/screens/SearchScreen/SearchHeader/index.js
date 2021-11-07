import React from "react";
import "./index.css";
import SearchBar from "../../../public_components/SearchBar";
import BrandName from "../../../public_components/BrandName";
import LogInSignUp from "../../../public_components/NavHeader/LogInSignUpButton";

const SearchHeader = () => {
    return (
        <div className={"search-header d-flex justify-content-between px-5 py-3 align-items-center"}>
            <div className={"d-flex"}>
                <div className={"mt-2 me-3"}>
                    <BrandName/>
                </div>
                <div className={"search-header-bar"}>
                    <SearchBar/>
                </div>
            </div>
            <div>
                <div className={"search-header-buttons"}>
                    <LogInSignUp/>
                </div>
            </div>

        </div>

    )
}
export default SearchHeader;