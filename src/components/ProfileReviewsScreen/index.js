import React, {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";

import reviews from "../../reducers/data/profile/reviews.json"
import ProfileHeader from "../ProfileScreen/ProfileHeader";
import ProfileNavSidebar from "../ProfileScreen/ProfileNavSidebar";
import ProfileNotifications from "../ProfileScreen/ProfileNotifications";
import ProfileRecentActivities from "../ProfileScreen/ProfileRecentActivities";
import EditProfile from "../ProfileScreen/EditProfile";
import ProfileAboutMe from "../ProfileScreen/ProfileAboutMe";
import ProfileReviews from "./ProfileReviews";
import {useHistory} from "react-router-dom";
import {fetchProfile} from "../../services/profileService";
import {fetchAllReviewsByProfile} from "../../services/reviewService";

const ProfileReviewsScreen = () => {

    const [edit, setEdit] = useState(false);
    const [reviewsInfo, setReviewsInfo] = useState([]);

    const history = useHistory();
    const dispatch = useDispatch();

    // If no profile fetched (unlogin), go to login page
    const getProfile = () => {
        fetchProfile(dispatch)
            .catch(e => history.push('/login'))
    }

    const getReviews = () => {
        fetchAllReviewsByProfile()
            .then(reviews => setReviewsInfo(reviews))
            .catch(e => console.log(e))
    }

    const loadData = () => {
        getProfile();
        getReviews();
    }

    useEffect(loadData, [reviewsInfo])

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
    }
    let fetchedProfile = useSelector(state => state.profile);
    profile = {...profile, ...fetchedProfile};


    if (profile.role === "business") {
        history.push('/business/profile');
    } else if (profile.role === "admin") {
        history.push('/admin');
    }


    return (
        <>

            {/**********************************Profile Header*********************************/}
            <div className="container-fluid vw-100 p-0">
                <div className="sticky-top">
                    <div className="wd-profile-banner bg-secondary vw-100"></div>
                    <ProfileHeader profile={profile} setEdit = {setEdit} edit={edit}/>
                </div>

                <div className="row flex-nowrap">

                    {/****************************Profile NavSidebar**************************/}
                    <div className="col-4 col-lg-3 d-flex justify-content-center px-0 mt-4">
                        <ProfileNavSidebar active="reviews" visibility={profile.visibility}/>
                    </div>

                    {/***************************Profile MainContent**************************/}
                    {!edit &&
                     <div
                         className="col-7 col-lg-6 d-flex flex-column px-0">
                         <div className="mb-3">
                             <h3 className="text-danger fw-bold">Reviews</h3>
                             <ProfileReviews reviews={reviewsInfo}/>
                         </div>
                     </div>
                    }

                    {/***************************Profile Edit**************************/}
                    {edit &&
                     <div className="col-7 col-lg-6 d-flex flex-column px-0">
                         <EditProfile profile={profile} setEdit={setEdit}/>
                     </div>
                    }

                    {/***************************Profile RightSidebar****************************/}
                    {!edit &&
                     <div
                         className="d-none d-lg-block col-xl-auto border-2 border-start ">
                         <ProfileAboutMe profile={profile}/>
                     </div>
                    }

                </div>
            </div>

        </>

    )

}
export default ProfileReviewsScreen;