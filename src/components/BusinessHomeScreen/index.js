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
import {fetchUserActivities} from "../../services/userActivitiesService";
import {fetchUserNotifications} from "../../services/userNotificationsService";
import SimpleLogoutHeader from "../headers/SimpleLogoutHeader";
import SimpleFooter from "../footers/SimpleFooter";

const BusinessHomeScreen = () => {

    const history = useHistory();
    const dispatch = useDispatch();
    // If no profile fetched (unlogin), go to login page
    const getProfile = () => {
        fetchProfile(dispatch)
            .catch(e => history.push('/login'))
    }

    const getActivities = () => {
        fetchUserActivities(dispatch)
            .catch(e => console.log(e))
    }

    const getNotifications = () => {
        fetchUserNotifications(dispatch)
            .catch(e => console.log(e))
    }

    const loadData = async () => {
        await getProfile();
        await getActivities();
        await getNotifications();
    }
    useEffect(loadData, [history])


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

    const fetchedActivities = useSelector(state => state.recentActivities);
    // console.log(fetchedActivities.reviewDetail);
    const fetchedNotifications = useSelector(state => state.notifications);



if (fetchedActivities !== undefined && fetchedNotifications !== undefined) {
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

                <div className="row flex-nowrap">

                    {/****************************Business NavSidebar**************************/}
                    <div className="col-4 col-lg-3 d-flex justify-content-center px-0 mt-4">
                        <BusinessNavSidebar active="home"/>
                    </div>

                    {/***************************Business MainContent**************************/}
                    <div className="col-7 col-lg-6 d-flex flex-column px-0">
                        <div className="mb-3">
                            <h3 className="text-danger fw-bold">Notifications</h3>
                            {Object.keys(fetchedNotifications).length !== 0 &&
                             <BusinessNotifications notifications={fetchedNotifications}/>
                            }
                        </div>
                        <hr className="mb-4 mt-0"/>
                        <div>
                            <h3 className="text-danger fw-bold">Recent Activities</h3>
                            {fetchedActivities &&
                            <BusinessActivities activities={fetchedActivities}/>
                            }
                        </div>
                    </div>

                    <div
                        className="d-none d-lg-block col-xl-auto border-2 border-start ">
                        {profile.businessData.restaurant &&
                        <BusinessStatistics restaurant={profile.businessData.restaurant}/>
                        }
                    </div>

                </div>
{/*                {JSON.stringify(fetchedNotifications)}
                {JSON.stringify(fetchedActivities)}*/}
                {/*{console.log(profile)}*/}

            </div>


        </div>
        <SimpleFooter />
        </div>
    )
} else {
    return (
        <h1>
            Opps! Something went wrong...
        </h1>
    )
}
}

export default BusinessHomeScreen;