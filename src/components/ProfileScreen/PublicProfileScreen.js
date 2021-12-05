import React, {useState} from "react";
import {useSelector, useDispatch} from "react-redux";
import "./Profile.css";
import ProfileHeader from "./ProfileHeader";
import ProfileNavSidebar from "./ProfileNavSidebar";
import ProfileAboutMe from "./ProfileAboutMe";
import ProfileNotifications from "./ProfileNotifications";
import ProfileRecentActivities from "./ProfileRecentActivities";
import EditProfile from "./EditProfile";
import ProfileReviews from "../ProfileReviewsScreen/ProfileReviews";

const PublicProfileScreen = () => {
    const profile = useSelector(state => state.profile);

    if (profile.role === "customer") {
        return (
            <>
                {/**********************************Profile Header*********************************/}
                <div className="container-fluid vw-100 p-0">
                    <div className="sticky-top">
                        <div className="wd-profile-banner bg-secondary vw-100"></div>
                        <ProfileHeader profile={profile} isPublic={true}/>
                    </div>

                    <div className="row flex-nowrap">

                        {/****************************Profile NavSidebar**************************/}

                        <div className="col-4 col-lg-3 d-flex justify-content-center px-0 mt-4">
                            <ProfileNavSidebar active="overview" visibility={profile.visibility}
                                               isPublic={true}/>
                        </div>


                        {/***************************Profile MainContent**************************/}
                        <div
                            className="col-7 col-lg-6 d-flex flex-column px-0">
                            <div className="mb-3">
                                <h3 className="text-danger fw-bold">Reviews</h3>
                                <ProfileReviews isPublic={true}/>
                            </div>
                        </div>

                        <div
                            className="d-none d-lg-block col-xl-auto border-2 border-start ">
                            <ProfileAboutMe profile={profile}/>
                        </div>


                    </div>
                </div>
            </>
        )
    } else if (profile.role === "business") {
        return (
            <>

            </>
        )
    }

};

export default PublicProfileScreen;