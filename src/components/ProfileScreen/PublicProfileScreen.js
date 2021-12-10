import React, {useEffect, useState} from "react";
import {useSelector, useDispatch} from "react-redux";
import "./Profile.css";
import ProfileHeader from "./ProfileHeader";
import ProfileNavSidebar from "./ProfileNavSidebar";
import ProfileAboutMe from "./ProfileAboutMe";

import ProfileReviews from "../ProfileReviewsScreen/ProfileReviews";
import PublicBusinessProfile from "../BusinessProfileScreen/PublicBusinessProfile";
import users from "../../reducers/data/profile/users.json"
import {useHistory, useParams} from "react-router-dom";
import {fetchProfile, findUserById} from "../../services/profileService";

const PublicProfileScreen = () => {
    // Get current login user and the public user profile
    const dispatch = useDispatch();
    const userId = useParams().id;

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
        "customerData": {
            "reviews": [],
            "followings": [],
            "followers": [],
            "bookmarks": [],
            "visibility": {
                "location": true,
                "birthday": true,
                "bookmarks": true
            }
        },
        "businessData": {
            "verified": false,
            "restaurantId": ""
        }
    };
    let publicProfile = {
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
        "customerData": {
            "reviews": [],
            "followings": [],
            "followers": [],
            "bookmarks": [],
            "visibility": {
                "location": true,
                "birthday": true,
                "bookmarks": true
            }
        },
        "businessData": {
            "verified": false,
            "restaurantId": ""
        }
    }

    const fetchedProfile = useSelector(state => state.profile);
    profile = {...profile, ...fetchedProfile};
    const fetchedPublicProfile = useSelector(state => state.publicProfile);
    publicProfile = {...publicProfile, ...fetchedPublicProfile};


    const getProfiles = () => {
        findUserById(userId, dispatch);
        fetchProfile(dispatch)
            .catch(err => console.log(err))
    }
    useEffect(getProfiles, [])



    let isFollowing = false;
    if (Object.keys(profile).length !== 0
        && profile.customerData.followings.includes(userId)) {
        isFollowing = true;
    }

    if (publicProfile.role === "customer") {
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
                            <ProfileNavSidebar active="overview"
                                               visibility={publicProfile.customerData.visibility}/>
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

                    {/*{JSON.stringify(publicProfile)}*/}
                </div>
            </>
        )
    } else if (publicProfile.role === "business") {
        return (
            <PublicBusinessProfile profile={publicProfile}/>
        )
    } else {
        return (
            <>
                <h1> Error of fetching the public profile!</h1>
                {JSON.stringify(fetchedPublicProfile)}
            </>
        )
    }
};

export default PublicProfileScreen;