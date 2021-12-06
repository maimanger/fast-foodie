import React, {useState} from "react";
import {useSelector, useDispatch} from "react-redux";
import "./Profile.css";
import ProfileHeader from "./ProfileHeader";
import ProfileNavSidebar from "./ProfileNavSidebar";
import ProfileAboutMe from "./ProfileAboutMe";

import ProfileReviews from "../ProfileReviewsScreen/ProfileReviews";
import PublicBusinessProfile from "../BusinessProfileScreen/PublicBusinessProfile";
import users from "../../reducers/data/profile/users.json"
import {useParams} from "react-router-dom";

const PublicProfileScreen = () => {
    // Customer public profile
    const profile = users[0];

    const userId = useParams().id;
    let publicProfile = {
        followersList: []
    };
    let isFollowing = false;
    if (userId) {
        publicProfile = users.find(user => user._id === userId);
        let foundFollower = publicProfile.followersList.find(fl => fl === profile._id);
        if (foundFollower) isFollowing = true;
    }

// Test Business Public Profile
/*    const profile = users[users.length - 1];*/

    if (profile.role === "customer") {
        return (
            <>
                {/**********************************Profile Header*********************************/}
                <div className="container-fluid vw-100 p-0">
                    <div className="sticky-top">
                        <div className="wd-profile-banner bg-secondary vw-100"></div>
                        <ProfileHeader profile={publicProfile} isFollowing={isFollowing}/>
                    </div>

                    <div className="row flex-nowrap">

                        {/****************************Profile NavSidebar**************************/}

                        <div className="col-4 col-lg-3 d-flex justify-content-center px-0 mt-4">
                            <ProfileNavSidebar active="overview" visibility={publicProfile.visibility}/>
                        </div>


                        {/***************************Profile MainContent**************************/}
                        <div
                            className="col-7 col-lg-6 d-flex flex-column px-0">
                            <div className="mb-3">
                                <h3 className="text-danger fw-bold">Reviews</h3>
                                <ProfileReviews/>
                            </div>
                        </div>

                        <div
                            className="d-none d-lg-block col-xl-auto border-2 border-start ">
                            <ProfileAboutMe profile={publicProfile}/>
                        </div>


                    </div>
                </div>
            </>
        )
    } else if (profile.role === "business") {
        return (
            <PublicBusinessProfile profile={profile}/>
        )
    }

};

export default PublicProfileScreen;