import React from "react";
import "./index.css";
import SearchBar from "../../../HomeScreen/public_components/SearchBar";
import BrandName from "../../../HomeScreen/public_components/BrandName";
import LogInSignUpButton from "../../../HomeScreen/public_components/NavHeader/LogInSignUpButton";

const SearchHeader = () => {
    return (
        <div className={"searchscreen-search-header d-flex justify-content-between px-5 py-3 align-items-center"}>
            <div className={"d-flex"}>
                <div className={"mt-2 me-3"}>
                    <BrandName/>
                </div>
                <div className={"searchscreen-search-header-bar"}>
                    <SearchBar/>
                </div>
            </div>
            <div>
                <div className={"searchscreen-search-header-buttons"}>
                    <LogInSignUpButton/>
                </div>
            </div>

        </div>

    )
}
export default SearchHeader;