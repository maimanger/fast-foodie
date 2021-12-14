import React, {useEffect, useState} from "react";
import "../BusinessHomeScreen/Business.css";
import {HashLink} from "react-router-hash-link";
import {Link, useHistory} from "react-router-dom";
import users from "../../reducers/data/profile/users.json"
import BusinessNavSidebar from "../BusinessHomeScreen/BusinessNavSidebar";
import BusinessProfile from "./BusinessProfile";
import BusinessEditProfile from "./BusinessEditProfile"
import BusinessHeader from "../BusinessHomeScreen/BusinessHeader";
import {useDispatch, useSelector} from "react-redux";
import {fetchProfile} from "../../services/profileService";
import SimpleLogoutHeader from "../headers/SimpleLogoutHeader";
import SimpleFooter from "../footers/SimpleFooter";

const BusinessProfileScreen = () => {

    const history = useHistory();
    const dispatch = useDispatch();
    // If no profile fetched (unlogin), go to login page
    const getProfile = () => {
        fetchProfile(dispatch)
            .catch(e => history.push('/login'))
    }
    useEffect(getProfile, [history])

    /**********************************Get the login profile data******************************/
        // Set up a sample profile to avoid undefined type error
    let profile = {
            "role": "",
            "username": "",
            "password": "",
            "email": "",
            "firstName": "",
            "lastName": "",
            "image_url": "",
            "location": "",
            "birthday": "",
            "dateJoined": "",
            "businessData": {
                "verified": false,
                "restaurant": {},
                "file_url": ""
            }
        };
    let fetchedProfile = useSelector(state => state.profile);
    profile = {...profile, ...fetchedProfile};
    if (profile.role === "customer" || profile.role === "admin") {
        history.push('/')
    }

    const [edit, setEdit] = useState(false);
    const isVerified = profile.businessData.verified;
    return (
        <div className={"app-window-container"}>
        <div className={"min-vh-100"}>

            {/**********************************Business Header*********************************/}
            <div className="container-fluid vw-100 p-0">
                <div className="">
                    <SimpleLogoutHeader />
                    <div className="wd-business-banner bg-secondary vw-100"></div>
                    <BusinessHeader user={profile}/>
                </div>
            </div>


            <div className="row flex-nowrap">
                {/**********************************Business Sidebar*********************************/}
                <div className="col-4 col-lg-3 d-flex justify-content-center px-0 mt-4">
                    <BusinessNavSidebar active="profile" verified={isVerified}/>
                </div>

                {/***************************Business Profile**************************/}
                <div className="col-7 col-lg-6 px-0">
                    {!edit && <BusinessProfile profile={profile} setEdit={setEdit}/>}
                    {edit && <BusinessEditProfile profile={profile} setEdit={setEdit}/>}
                </div>
            </div>


        </div>
        <SimpleFooter />
        </div>
    )
}

export default BusinessProfileScreen;