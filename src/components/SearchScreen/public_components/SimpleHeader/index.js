import React from "react";
import './index.css';
import BrandName from "../../../HomeScreen/public-components/BrandName";
import LoggedInHeaderButtons from "../../SearchHeader/LoggedInHeaderButtons";
import LoginSignupButtons from "../../SearchHeader/LoginSignupButtons";

const SimpleHeader = ({loggedIn=true}) => {
    return (
        <div className={"searchscreen-search-header-container searchscreen-simple-header-container bg-white w-100 sticky-top"}>
        <div className={"w-100 d-flex justify-content-center align-items-center px-5 py-3 m-0 position-relative"}>
            <BrandName color={"primary"} />

            <div className={"searchscreen-search-header-buttons searchscreen-simple-header-buttons position-absolute"}>
                {loggedIn ? <LoggedInHeaderButtons /> : <LoginSignupButtons />}
            </div>
        </div>
            </div>
    )
}

export default SimpleHeader;