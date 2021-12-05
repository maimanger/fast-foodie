import React from "react";
import "./index.css";
import SearchBar from "../../../HomeScreen/public-components/SearchBar";
import BrandName from "../../../HomeScreen/public-components/BrandName";
import Dropdowns from "../../../HomeScreen/public-components/Dropdowns";
import LoginSignupButtons from "./LoginSignupButtons";
import LoggedInHeaderButtons from "./LoggedInHeaderButtons";

const SearchHeader = ({
                          loggedIn = false,
                          params = {
                              loggedIn: false,
                              location: "San Fransisco, CA",
                              term: ""
                          },
                          clickFunction
}) => {



    return (
        <div className={"searchscreen-search-header-container bg-white w-100 px-5 py-4 m-0 justify-content-between align-items-top row sticky-top"}>
            <div className={"searchscreen-search-header-brand-container p-0 col-2"}>
                <BrandName color={"primary"}/>
            </div>
            <div className={"col-7"}>
                <div className={"searchscreen-search-header-searchbar-container"}>
                    <SearchBar params={params} clickFunction={clickFunction}/>
                </div>
                {/*<Dropdowns />*/}
            </div>
            <div className={"searchscreen-search-header-buttons col-2 d-flex justify-content-end align-items-center"}>
                {loggedIn ? <LoggedInHeaderButtons /> : <LoginSignupButtons />}
            </div>
        </div>

    )
}
export default SearchHeader;