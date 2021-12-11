import React, {useEffect} from "react";
import './index.css';
import BrandName from "../../CustomerHomeScreen/public-components/BrandName";
import LoggedInHeaderButtons from "../../headers/SearchHeader/LoggedInHeaderButtons";
import LoginSignupButtons from "../../headers/SearchHeader/LoginSignupButtons";
import {useDispatch, useSelector} from "react-redux";
import {fetchProfile} from "../../../services/profileService";

const SimpleHeader = ({loggedIn=true}) => {
    const profile = useSelector(state => state.profile);
    const dispatch = useDispatch();
    useEffect(() => {
        fetchProfile(dispatch);
    }, []);


    return (
        <div className={"searchscreen-simple-header-container bg-white w-100 sticky-top"}>
        <div className={"w-100 d-flex justify-content-center align-items-center px-5 py-3 m-0 position-relative"}>
            <BrandName color={"primary"} />

            <div className={"searchscreen-search-header-buttons searchscreen-simple-header-buttons position-absolute"}>
                {(profile !== undefined && Object.keys(profile).length !== 0) ? <LoggedInHeaderButtons /> : <LoginSignupButtons />}
            </div>
        </div>
            </div>
    )
}

export default SimpleHeader;