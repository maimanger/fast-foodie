import React from "react";
import {Link} from "react-router-dom";
import {HashLink} from "react-router-hash-link";
import "./Profile.css";

const ProfileHeader = ({profile, setEdit, edit, isPublic=false}) => {

    return (
        <>
            <div className="row d-flex flex-nowrap align-items-end wd-profile-header">

                {/******************************Profile Header Avatar**************************/}

                <div className="col-4 col-lg-3 d-flex justify-content-center px-0">
                    <div className="wd-profile-avatar shadow card">
                        {profile.image_url &&
                        <img src={profile.image_url}
                             className="img-thumbnail bg-light" alt="..."/>
                        }
                    </div>
                </div>

                {/******************************Profile Header Title**************************/}
                <div className="col-6 col-sm-5 col-lg-6 d-flex flex-column
                               pb-3 px-0 mb-4 justify-content-end">
                    <HashLink smooth to="/profile#top" className="wd-profile-back-top">
                        {profile.firstName && profile.lastName &&
                    <h1 className="mb-2"> {profile.firstName} {profile.lastName}</h1>
                        }
                    </HashLink>

                    <div className="row p-0 m-0 d-flex flex-nowrap gap-xxl-4 ">
                        <div className="col-6 col-md-4 col-lg-3 col-xxl-2 text-black p-0
                                         text-decoration-none d-none d-md-inline-block">
                            <span className="fw-bold me-1">
                                {profile.followingCount}
                            </span>
                            <span className="text-black">Followings</span>
                        </div>

                        <div className="col-6 col-md-4 col-lg-3 col-xxl-2 text-black p-0 text-decoration-none">
                            <span className="fw-bold me-1">
                                {profile.followersCount}
                            </span>
                            <span className="text-black">Followers</span>
                        </div>

                        <div className="col-md-4 col-lg-3 col-xxl-2 text-black p-0 text-decoration-none">
                            <span className="fw-bold me-1">
                                {profile.reviewsCount}
                            </span>
                            <span className="text-black">Reviews</span>
                        </div>
                    </div>
                </div>

                {/***************************Profile Header Edit Btn************************/}
                <div className="col-auto d-flex flex-column pb-3 mb-4 justify-content-around ps-1 ">
                    {(!edit && !isPublic) &&
                    <button className="d-flex flex-nowrap align-items-center justify-content-start
                                           btn rounded-pill btn-outline-info"
                            onClick={() => setEdit(true)}>
                        <i className="fas fa-cog me-0 me-sm-2"></i>
                        <span className="d-none d-sm-inline me-1">Update</span>
                        <span className="d-none d-md-inline">Profile</span>
                    </button>
                    }

                    {isPublic &&
                     <button className="d-flex flex-nowrap align-items-center justify-content-center
                                           btn rounded-pill btn-outline-info py-1 mb-2">
                         <i className="fas fa-envelope me-0 me-sm-2"></i>
                         <span className="d-none d-sm-inline">Message</span>
                     </button>
                    }

                    {isPublic &&
                    <button className="d-flex flex-nowrap align-items-center justify-content-center
                                           btn rounded-pill btn-outline-info py-1">
                        <i className="fas fa-user-plus me-0 me-sm-2"></i>
                        <span className="d-none d-sm-inline">Follow</span>
                    </button>
                    }

                </div>
            </div>


        </>
    )
}

export default ProfileHeader;