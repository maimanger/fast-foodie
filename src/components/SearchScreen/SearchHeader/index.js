import React, {useEffect} from "react";
import "./index.css";
import SearchBar from "../SearchBar";
import LoginSignupButtons from "../../headers/SearchHeader/LoginSignupButtons";
import LoggedInHeaderButtons from "../../headers/SearchHeader/LoggedInHeaderButtons";
import {useDispatch, useSelector} from "react-redux";
import isLoggedIn from "../../CustomerHomeScreen/utils/isLoggedIn";
import SearchHeaderBrandName from "../../headers/SearchHeader/SearchHeaderBrandName";

const SearchHeader = ({
                          profile,
                          params,
                          clickFunction,
}) => {


    return (
        <div className={"searchscreen-search-header-container bg-white w-100 px-5 py-4 m-0 justify-content-between align-items-top row sticky-top"}>
            <div className={"searchscreen-search-header-brand-container p-0 col-lg-2 col-sm-1 col-1"}>
                <SearchHeaderBrandName color={"primary"}/>
            </div>
            <div className={"col-xl-7 col-lg-6 col-md-7 col-sm-9 col-9"}>
                <div className={"searchscreen-search-header-searchbar-container"}>
                    <SearchBar profile={profile} params={params} clickFunction={clickFunction}/>
                </div>
                {/*<Dropdowns />*/}
            </div>
            <div className={"searchscreen-search-header-buttons d-flex justify-content-end align-items-center col-lg-2 col-md-4 col-sm-2 col-1"}>
                {isLoggedIn(profile) ? <LoggedInHeaderButtons /> : <LoginSignupButtons />}
            </div>
        </div>

    )
}
export default SearchHeader;