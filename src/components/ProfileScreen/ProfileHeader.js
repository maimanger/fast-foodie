import React from "react";
import {Link, useLocation, useParams} from "react-router-dom";
import {HashLink} from "react-router-hash-link";
import "./Profile.css";
import users from "../../reducers/users";
import {fetchProfile, follow, unfollow} from "../../services/profileService";
import {useDispatch, useSelector} from "react-redux";
import {Redirect} from "react-router";

const ProfileHeader = ({profile, setEdit=null, edit=null, isFollowing=false}) => {

    let loginUser = useSelector(state => state.profile);

    /*NOTED:
    * If userId params exists, this is a public profile
    * The profile data doesn't belong to the argument profile user, but the profile of userId
    * So We must fetch the real profile data by the userId
    * */
    const userId = useParams().id;
    const isPublic = userId && true;
    const currentURL = useLocation().pathname;

    const dispatch = useDispatch();
    const followHandler = () => {
        if (!loginUser.role) {
            fetchProfile(dispatch)
                .catch(e => {
                    return (
                        <Redirect to={"/login"}/>
                    )
                })

        }
        follow(userId, loginUser._id, dispatch);
    }

    const unFollowHandler = () => {
        if (!loginUser.role) {
            fetchProfile(dispatch)
                .catch(e => {
                    return (
                        <Redirect to={"/login"}/>
                    )
                })
        }
        unfollow(userId, loginUser._id, dispatch);
    }

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
                    <HashLink smooth to={isPublic ? `${currentURL}#top` : `${currentURL}#top`}
                              className="wd-profile-back-top">
                        {profile.firstName && profile.lastName &&
                    <h1 className="mb-2"> {profile.firstName} {profile.lastName}</h1>
                        }
                    </HashLink>

                    <div className="row p-0 m-0 d-flex flex-nowrap gap-xxl-4 ">
                        <div className="col-6 col-md-4 col-lg-3 col-xxl-2 text-black p-0
                                         text-decoration-none d-none d-md-inline-block">

                            {profile.customerData.followings &&
                            <span className="fw-bold me-1">
                                {profile.customerData.followings.length}
                            </span>
                            }

                            <span className="text-black">Followings</span>
                        </div>

                        <div className="col-6 col-md-4 col-lg-3 col-xxl-2 text-black p-0 text-decoration-none">

                            {profile.customerData.followers &&
                             <span className="fw-bold me-1">
                                {profile.customerData.followers.length}
                            </span>
                            }

                            <span className="text-black">Followers</span>
                        </div>

                        <div className="col-md-4 col-lg-3 col-xxl-2 text-black p-0 text-decoration-none">

                            <span className="fw-bold me-1">
                                {profile.customerData.reviews.length}
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

{/*                    {isPublic &&
                     <button className="d-flex flex-nowrap align-items-center justify-content-center
                                           btn rounded-pill btn-outline-info py-1 mb-2">
                         <i className="fas fa-envelope me-0 me-sm-2"></i>
                         <span className="d-none d-sm-inline">Message</span>
                     </button>
                    }*/}

                    {isPublic && !isFollowing &&
                    <button className="d-flex flex-nowrap align-items-center justify-content-center
                                           btn rounded-pill btn-outline-info py-1"
                            onClick={followHandler}>
                        <i className="fas fa-user-plus me-0 me-sm-2"></i>
                        <span className="d-none d-sm-inline">Follow</span>
                    </button>
                    }

                    {isPublic && isFollowing &&
                     <button className="d-flex flex-nowrap align-items-center justify-content-center
                                           btn rounded-pill btn-outline-info py-1"
                             onClick={unFollowHandler}>
                         <i className="fas fa-user-plus me-0 me-sm-2"></i>
                         <span className="d-none d-sm-inline">Unfollow</span>
                     </button>
                    }

                </div>
            </div>


        </>
    )
}

export default ProfileHeader;