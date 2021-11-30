import React, {useState} from "react";
import "./Business.css"
import BusinessHeader from "./BusinessHeader";
import BusinessNavSidebar from "./BusinessNavSidebar";
import ProfileNotifications from "../ProfileScreen/ProfileNotifications";
import ProfileRecentActivities from "../ProfileScreen/ProfileRecentActivities";
import ProfileAboutMe from "../ProfileScreen/ProfileAboutMe";
import BusinessHomeStatics from "./BusinessHomeStatics";
import BusinessNotificationItem from "./BusinessNotifications/BusinessNotificationItem";
import BusinessNotifications from "./BusinessNotifications";
import BusinessActivities from "./BusinessActivities";

const BusinessHomeScreen = () => {
    return (
        <>
            {/**********************************Business Header*********************************/}
            <div className="container-fluid vw-100 p-0">
                <div className="sticky-top">
                    <div className="wd-business-banner bg-secondary vw-100"></div>
                    <BusinessHeader/>
                </div>

                <div className="row flex-nowrap">

                    {/****************************Business NavSidebar**************************/}

                    <div className="col-4 col-lg-3 d-flex justify-content-center px-0">
                        <BusinessNavSidebar active="home"/>
                    </div>

                    {/***************************Business MainContent**************************/}
                    <div
                        className="col-7 col-lg-6 d-flex flex-column px-0">
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
                        <BusinessHomeStatics/>
                    </div>

                </div>





            </div>





        </>
    )
}

export default BusinessHomeScreen;