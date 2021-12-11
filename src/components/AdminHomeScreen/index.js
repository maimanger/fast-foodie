import React, {useEffect, useState} from "react";

import AdminNavSidebar from "./AdminNavSidebar";
import AdminStatistics from "./AdminStatistics";
import AdminNotifications from "./AdminNotifications";
import {useHistory} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {fetchProfile} from "../../services/profileService";
import {fetchUserActivities} from "../../services/userActivitiesService";
import {fetchUserNotifications} from "../../services/userNotificationsService";

const AdminHomeScreen = () => {
    const history = useHistory();
    const dispatch = useDispatch();

    // If no profile fetched (unlogin), go to login page
    const getProfile = () => {
        fetchProfile(dispatch)
            .catch(e => history.push('/login'))
    }

    const getNotifications = () => {
        fetchUserNotifications(dispatch)
            .catch(e => console.log(e))
    }

    const loadData = () => {
        getProfile();
        getNotifications();
    }

    useEffect(loadData, [history])

    let fetchedProfile = useSelector(state => state.profile);
    if (fetchedProfile.role !== "admin") {
        history.push('/login')
    }
    const fetchedNotifications = useSelector(state => state.notifications);

    return (
        <>
            <div className="container-fluid vw-100 p-0">

                <div className="row flex-nowrap">
                    {/****************************Admin NavSidebar************************/}
                    <div className="col-4 col-lg-3 d-flex justify-content-center px-0">
                        <AdminNavSidebar active="home"/>
                    </div>

                    {/****************************Admin MainContent************************/}
                    <div className="col-7 col-lg-6 d-flex flex-column px-0">
                        <h3 className="text-danger fw-bold">Notifications</h3>
                        <AdminNotifications notifications={fetchedNotifications}/>
                    </div>


                    {/****************************Admin Productivity statistics************************/}
                    <div
                        className="d-none d-lg-block col-xl-auto border-2 border-start ">
                        <AdminStatistics notifications={fetchedNotifications}/>
                    </div>

                </div>


            </div>
        </>

    )
}

export default AdminHomeScreen;