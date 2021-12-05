import React, {useState} from "react";
import "../BusinessHomeScreen/Business.css";
import {HashLink} from "react-router-hash-link";
import {Link} from "react-router-dom";
import users from "../../reducers/data/profile/users.json"
import BusinessNavSidebar from "../BusinessHomeScreen/BusinessNavSidebar";
import BusinessProfile from "./BusinessProfile";
import BusinessEditProfile from "./BusinessEditProfile"
import BusinessHeader from "../BusinessHomeScreen/BusinessHeader";

const BusinessProfileScreen = () => {
    const user = users[users.length - 1];

    const [edit, setEdit] = useState(false);

    return (
        <>
            {/**********************************Business Header*********************************/}
            <div className="container-fluid vw-100 p-0">
                <div className="sticky-top">
                    <div className="wd-business-banner bg-secondary vw-100"></div>
                    <BusinessHeader user={user}/>
                </div>
            </div>


            <div className="row flex-nowrap">
            {/**********************************Business Sidebar*********************************/}
                <div className="col-4 col-lg-3 d-flex justify-content-center px-0 mt-4">
                    <BusinessNavSidebar active="profile" verified={user.verified}/>
                </div>

                {/***************************Business Profile**************************/}
                <div className="col-7 col-lg-6 px-0">
                    {!edit && <BusinessProfile profile={user} setEdit={setEdit}/>}
                    {edit && <BusinessEditProfile profile={user} setEdit={setEdit}/>}
                </div>
            </div>


        </>
    )
}

export default BusinessProfileScreen;