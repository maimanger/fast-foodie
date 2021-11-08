import React from "react";
import "./Profile.css";
import ProfileHeader from "./ProfileHeader";
import ProfileNavSidebar from "./ProfileNavSidebar";
import ProfileAboutMe from "./ProfileAboutMe";
import ProfileNotifications from "./ProfileNotifications";
import ProfileRecentActivities from "./ProfileRecentActivities";

const ProfileScreen = () => {
    return (
        <>
            {/**********************************Profile Header*********************************/}
            <div className="container-fluid vw-100 p-0">
                <div className="sticky-top">
                <div className="wd-profile-banner bg-secondary vw-100"></div>
                <ProfileHeader/>
                </div>

                <div className="row flex-nowrap">

                    {/****************************Profile NavSidebar**************************/}
                    <div className="col-4 col-lg-3 d-flex justify-content-center px-0">
                        <ProfileNavSidebar active="overview"/>
                    </div>


                    {/***************************Profile MainContent**************************/}
                    <div
                        className="col-7 col-lg-6 d-flex flex-column px-0">
                        <div className="mb-3">
                            <h3 className="text-danger fw-bold">Notifications</h3>
                            <ProfileNotifications/>
                        </div>

                        <div>
                            <h3 className="text-danger fw-bold">Recent Activities</h3>
                            <ProfileRecentActivities/>
                        </div>
                    </div>


                    {/***************************Profile RightSidebar****************************/}
                    <div
                        className="d-none d-lg-block col-xl-auto border-2 border-start ps-5">
                        <ProfileAboutMe/>
                    </div>

                </div>
            </div>


        </>
    )
};

export default ProfileScreen;