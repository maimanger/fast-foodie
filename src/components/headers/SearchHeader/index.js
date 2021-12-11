import React, {useEffect, useState} from "react";
import "./index.css";
import SearchBar from "./SearchBar";
import BrandName from "../../CustomerHomeScreen/public-components/BrandName";
import Dropdowns from "../../CustomerHomeScreen/public-components/Dropdowns";
import LoginSignupButtons from "./LoginSignupButtons";
import LoggedInHeaderButtons from "./LoggedInHeaderButtons";
import {useDispatch, useSelector} from "react-redux";
import {fetchProfile} from "../../../services/profileService";
import isLoggedIn from "../../CustomerHomeScreen/utils/isLoggedIn";
import SearchHeaderBrandName from "./SearchHeaderBrandName";

const SearchHeader = () => {
    const dispatch = useDispatch();
    const profile = useSelector(state=>state.profile);
    useEffect(()=>{
        fetchProfile(dispatch);
    }, [])



    return (
        <div className={"searchscreen-search-header-container bg-white w-100 px-5 py-4 m-0 justify-content-between align-items-top row sticky-top"}>
            <div className={"searchscreen-search-header-brand-container p-0 col-lg-2 col-sm-1 col-1"}>
                <SearchHeaderBrandName color={"primary"}/>
            </div>
            <div className={"col-xl-7 col-lg-6 col-md-7 col-sm-9 col-9"}>
                <div className={"searchscreen-search-header-searchbar-container"}>
                    <SearchBar profile={profile}/>
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