import React, {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import ProfileHeader from "../ProfileScreen/ProfileHeader";
import ProfileNavSidebar from "../ProfileScreen/ProfileNavSidebar";
import EditProfile from "../ProfileScreen/EditProfile";
import ProfileAboutMe from "../ProfileScreen/ProfileAboutMe";
import ProfileFollowings from "./ProfileFollowings";
import {useHistory} from "react-router-dom";
import {fetchAllFollowings, fetchProfile} from "../../services/profileService";
import SimpleHeader from "../headers/SimpleHeader";
import CustomerPrivateProfileHeader from "../headers/CustomerPrivateProfileHeader";
import SimpleLogoutHeader from "../headers/SimpleLogoutHeader";
import SimpleFooter from "../footers/SimpleFooter";

const ProfileFollowingsScreen = () => {

    const history = useHistory();
    const dispatch = useDispatch();
    const [followingsInfo, setFollowingsInfo] = useState([]);
    const [edit, setEdit] = useState(false);

    // If no profile fetched (unlogin), go to login page
    const getProfile = () => {
        fetchProfile(dispatch)
            .catch(e => history.push('/login'))
    }

    const getFollowings = () => {
        fetchAllFollowings()
            .then(followings => setFollowingsInfo(followings))
            .catch(e => console.log(e))
    }

    const loadData = () => {
        getProfile();
        getFollowings();
    }

    useEffect(loadData, [history])

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
        <div className={"app-window-container"}>
        <div className={"min-vh-100"}>
            {/**********************************Profile Header*********************************/}
            <div className="container-fluid vw-100 p-0">
                <div className="">
                    <SimpleLogoutHeader />
                    <div className="wd-profile-banner bg-secondary vw-100"></div>
                    <ProfileHeader profile={profile} setEdit={setEdit} edit={edit}/>
                </div>

                <div className="row flex-nowrap">

                    {/****************************Profile NavSidebar**************************/}
                    <div className="col-4 col-lg-3 d-flex justify-content-center px-0 mt-4">
                        <ProfileNavSidebar active="followings"
                                           visibility={profile.customerData.visibility}/>
                    </div>

                    {/***************************Profile MainContent**************************/}
                    {!edit &&
                     <div
                         className="col-7 col-lg-6 d-flex flex-column px-0">
                         <div className="mb-3">
                             <h3 className="text-danger fw-bold">Followings</h3>
                             <ProfileFollowings followings={followingsInfo}/>
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

        </div>
        <SimpleFooter />
        </div>

    )

}
export default ProfileFollowingsScreen;