import React from "react";
import {Link} from "react-router-dom";
import {HashLink} from "react-router-hash-link";
import "./Profile.css";

const ProfileHeader = ({profile, setEdit, edit}) => {

    return (
        <>
            <div className="row d-flex flex-nowrap align-items-end wd-profile-header">

                {/******************************Profile Header Avatar**************************/}

                <div className="col-4 col-lg-3 d-flex justify-content-center px-0">
                    <div className="wd-profile-avatar shadow card">
                        {profile.avatar &&
                        <img src={profile.avatar}
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
                        <Link className="col-6 col-md-4 col-lg-3 col-xxl-2 text-black p-0
                                         text-decoration-none d-none d-md-inline-block"
                              to="/profile/followings">
                            <span className="fw-bold me-1">
                                {profile.followingCount}
                            </span>
                            <span className="text-black wd-profile-link-text">Followings</span>
                        </Link>

                        <Link className="col-6 col-md-4 col-lg-3 col-xxl-2 text-black p-0 text-decoration-none"
                              to="/profile/followers">
                            <span className="fw-bold me-1">
                                {profile.followersCount}
                            </span>
                            <span className="text-black wd-profile-link-text">Followers</span>
                        </Link>

                        <Link className="col-md-4 col-lg-3 col-xxl-2 text-black p-0 text-decoration-none"
                              to="/profile/reviews">
                            <span className="fw-bold me-1">
                                {profile.reviewsCount}
                            </span>
                            <span className="text-black wd-profile-link-text">Reviews</span>
                        </Link>
                    </div>
                </div>

                {/***************************Profile Header Edit Btn************************/}
                <div className="col-auto d-flex flex-column pb-3 mb-4 justify-content-around ps-1 ">
                    {!edit &&
                    <button className="d-flex flex-nowrap align-items-center justify-content-start
                                           btn rounded-pill btn-outline-info"
                            onClick={() => setEdit(true)}>
                        <i className="fas fa-cog me-0 me-sm-2"></i>
                        <span className="d-none d-sm-inline">Update</span>
                    </button>
                    }


{/*                    <Link className="d-flex flex-nowrap align-items-center justify-content-center
                                           btn rounded-pill btn-outline-info"
                          to="#">
                        <i className="far fa-comment me-0 me-sm-2"></i>
                        <span className="d-none d-sm-inline">Message</span>
                    </Link>


                    <Link className="d-flex flex-nowrap align-items-center justify-content-center
                                           btn rounded-pill btn-outline-info"
                          to="#">
                        <i className="fas fa-user-plus me-0 me-sm-2"></i>
                        <span className="d-none d-sm-inline">Follow</span>

                    </Link>*/}


                </div>
            </div>


        </>
    )
}

export default ProfileHeader;