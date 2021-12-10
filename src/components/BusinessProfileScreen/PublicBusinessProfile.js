import React, {useState} from "react";
import "../BusinessHomeScreen/Business.css";
import {HashLink} from "react-router-hash-link";
import {Link, useLocation} from "react-router-dom";
import users from "../../reducers/data/profile/users.json"
import BusinessNavSidebar from "../BusinessHomeScreen/BusinessNavSidebar";
import BusinessProfile from "./BusinessProfile";
import BusinessEditProfile from "./BusinessEditProfile"

const PublicBusinessProfile = ({profile}) => {
    const currentURL = useLocation().pathname;

    return (
        <>
            {/**********************************Business Header*********************************/}
            <div className="container-fluid vw-100 p-0">
                <div className="sticky-top">
                    <div className="wd-business-banner bg-secondary vw-100"></div>
                    <div className="row d-flex flex-nowrap align-items-end wd-business-header">

                        <div className="col-4 col-lg-3 d-flex justify-content-center px-0 mt-4">
                            <div className="wd-business-avatar shadow card bg-transparent">
                                <img src={profile.image_url}
                                     className="img-thumbnail bg-light" alt="..."/>
                            </div>
                        </div>

                        <div className="col-5 col-lg-4 d-flex flex-column
                               pb-3 px-0 mb-4 justify-content-end">
                            <div className="d-flex align-items-center">
                                <HashLink smooth to={`${currentURL}#top`}
                                          className="wd-business-back-top fs-1 text-nowrap">
                                    {profile.firstName} {profile.lastName}
                                </HashLink>
                            </div>
                        </div>

                        <div className="col-auto d-flex flex-column pb-3 mb-4 justify-content-around ps-1 ">
                            <button className="d-flex flex-nowrap align-items-center justify-content-start
                                           btn rounded-pill btn-outline-info">
                                <i className="fas fa-envelope me-0 me-sm-2"></i>
                                <span className="d-none d-sm-inline">Message</span>
                            </button>
                        </div>

                    </div>
                </div>
            </div>

            <div className="row flex-nowrap">

                <div className="col-4 col-lg-3 d-flex justify-content-center px-0 mt-4">
                </div>

                {/***************************Business Profile**************************/}
                <div className="col-7 col-lg-6 px-0">
                    <BusinessProfile profile={profile}/>
                </div>

                {JSON.stringify(profile)}
            </div>


        </>
    )
}

export default PublicBusinessProfile;