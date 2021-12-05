import React, {useState} from "react";
import {useSelector} from "react-redux";


import ProfileHeader from "../ProfileScreen/ProfileHeader";
import ProfileNavSidebar from "../ProfileScreen/ProfileNavSidebar";
import EditProfile from "../ProfileScreen/EditProfile";
import ProfileAboutMe from "../ProfileScreen/ProfileAboutMe";
import ProfileBookmarks from "./ProfileBookmarks";

const ProfileBookmarksScreen = () => {
    const profile = useSelector(state => state.profile);
    const [edit, setEdit] = useState(false);

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
                        <ProfileNavSidebar active="bookmarks" visibility={profile.visibility}/>
                    </div>

                    {/***************************Profile MainContent**************************/}
                    {!edit &&
                     <div
                         className="col-7 col-lg-6 d-flex flex-column px-0">
                         <div className="mb-3">
                             <h3 className="text-danger fw-bold">Bookmarks</h3>
                             <ProfileBookmarks/>
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
export default ProfileBookmarksScreen;