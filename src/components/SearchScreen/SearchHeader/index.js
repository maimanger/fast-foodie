import React, {useEffect} from "react";
import "./index.css";
import SearchBar from "../SearchBar";
import BrandName from "../../CustomerHomeScreen/public-components/BrandName";
import Dropdowns from "../../CustomerHomeScreen/public-components/Dropdowns";
import LoginSignupButtons from "./LoginSignupButtons";
import LoggedInHeaderButtons from "./LoggedInHeaderButtons";
import {useDispatch, useSelector} from "react-redux";
import {fetchProfile} from "../../../services/profileService";
import isLoggedIn from "../../CustomerHomeScreen/utils/isLoggedIn";

const SearchHeader = ({
                          profile,
                          params,
                          clickFunction,
}) => {


    return (
        <div className={"searchscreen-search-header-container bg-white w-100 px-5 py-4 m-0 justify-content-between align-items-top row sticky-top"}>
            <div className={"searchscreen-search-header-brand-container p-0 col-2"}>
                <BrandName color={"primary"}/>
            </div>
            <div className={"col-7"}>
                <div className={"searchscreen-search-header-searchbar-container"}>
                    <SearchBar profile={profile} params={params} clickFunction={clickFunction}/>
                </div>
                {/*<Dropdowns />*/}
            </div>
            <div className={"searchscreen-search-header-buttons col-2 d-flex justify-content-end align-items-center"}>
                {isLoggedIn(profile) ? <LoggedInHeaderButtons /> : <LoginSignupButtons />}
            </div>
        </div>

    )
}
export default SearchHeader;