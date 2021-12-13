import React, {useEffect} from "react";
import './index.css';
import BrandName from "../../CustomerHomeScreen/public-components/BrandName";
import LoggedInHeaderButtons from "../../headers/SearchHeader/LoggedInHeaderButtons";
import LoginSignupButtons from "../../headers/SearchHeader/LoginSignupButtons";
import {useDispatch, useSelector} from "react-redux";
import {fetchProfile, logout} from "../../../services/profileService";
import LoggedInHeaderPillButtons from "../SearchHeader/LoggedInHeaderButtons/LoggedInHeaderPillButtons";
import LoggedInHeaderToggle from "../SearchHeader/LoggedInHeaderButtons/LoggedInHeaderToggle";
import {Link, useHistory} from "react-router-dom";

const LoginScreenHeader = ({loggedIn = true}) => {
    const profile = useSelector(state => state.profile);
    const dispatch = useDispatch();
    useEffect(() => {
        fetchProfile(dispatch);
    }, []);


    const logoutHandler = () => {
        logout()
            .then(res => {
                dispatch({
                    type: "delete-profile"
                })
            });
    }


    return (
        <div className={"searchscreen-simple-header-container bg-white w-100 sticky-top"}>
            <div className={"w-100 d-flex justify-content-between align-items-center px-5 py-2 m-0"}>
                <BrandName color={"primary"}/>

                {(profile !== undefined && Object.keys(profile).length !== 0) &&
                <div>
                    <div className={"flex-nowrap"}>
                        <Link to={"/profile"}
                              className={"btn btn-outline-primary rounded-pill me-2 text-nowrap"}>
                            View Profile
                        </Link>
                        <button className={"btn btn-outline-secondary rounded-pill"}
                                onClick={logoutHandler}>
                            Logout
                        </button>
                    </div>
                </div>}

            </div>
        </div>
    )
}

export default LoginScreenHeader;