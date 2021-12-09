import React, {useEffect, useState} from "react";
import "./Business.css"
import BusinessHeader from "./BusinessHeader";
import BusinessNavSidebar from "./BusinessNavSidebar";
import BusinessStatistics from "./BusinessStatistics";
import BusinessNotifications from "./BusinessNotifications";
import BusinessActivities from "./BusinessActivities";
import users from "../../reducers/data/profile/users.json";
import {useHistory} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {fetchProfile} from "../../services/profileService";

const BusinessHomeScreen = () => {
    const user = users[users.length - 1];

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

    const isVerified = profile.businessData.verified;


    return (
        <>
            {/**********************************Business Header*********************************/}
            <div className="container-fluid vw-100 p-0">
                <div className="sticky-top">
                    <div className="wd-business-banner bg-secondary vw-100"></div>
                    <BusinessHeader user={profile}/>
                </div>

                <div className="row flex-nowrap">

                    {/****************************Business NavSidebar**************************/}
                    <div className="col-4 col-lg-3 d-flex justify-content-center px-0 mt-4">
                        <BusinessNavSidebar active="home"/>
                    </div>

                    {/***************************Business MainContent**************************/}
                    <div className="col-7 col-lg-6 d-flex flex-column px-0">
                        <div className="mb-3">
                            <h3 className="text-danger fw-bold">Notifications</h3>
                            <BusinessNotifications/>
                        </div>
                        <hr className="mb-4 mt-0"/>
                        <div>
                            <h3 className="text-danger fw-bold">Recent Activities</h3>
                            <BusinessActivities/>
                        </div>
                    </div>

                    <div
                        className="d-none d-lg-block col-xl-auto border-2 border-start ">
                        <BusinessStatistics restaurant={profile.businessData.restaurant}/>
                    </div>

                </div>

            </div>






        </>
    )
}

export default BusinessHomeScreen;