import React, {useEffect, useState} from "react";
import {Link} from "react-router-dom";
import {HashLink} from "react-router-hash-link";
import "./Business.css";
import restaurants from "../../reducers/data/restaurants/nyc.json"
import users from "../../reducers/data/profile/users.json"
import {useLocation} from "react-router";
import {initClaim} from "../../services/claimService";
import {useDispatch, useSelector} from "react-redux";
import {fetchProfile} from "../../services/profileService";

let sampleUser = {
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
    "businessData": {
        "verified": false,
        "restaurant": {
            "id": "",
            "name": ""
        },
        "file_url": ""
    }
};

const BusinessHeader = ({user = sampleUser}) => {
    const currentURL = useLocation();
    const isVerified = user.businessData.verified;
    const restaurant = user.businessData.restaurant;

    // Get claim status
    const claim = useSelector(state => state.claim);
    const dispatch = useDispatch();
    useEffect(() => {
        initClaim(dispatch);
    }, [user])

    let claimRoute = '';
    if (claim === undefined || Object.keys(claim).length === 0) {
        claimRoute = '/business/claim/search'
    } else {
        claimRoute = '/business/claim/status';
    }


    return (
        <div className="row d-flex flex-nowrap align-items-end wd-business-header">

            {/******************************Profile Header Avatar**************************/}
            <div className="col-4 col-lg-3 d-flex justify-content-center px-0">
                <div className="wd-business-avatar shadow card bg-transparent">
                    <img src={user.image_url}
                         className="img-thumbnail bg-light" alt="..."/>
                </div>
            </div>

            {/******************************Profile Header Title**************************/}
            <div className="col-7 col-lg-6 d-flex flex-column pb-3 px-0 mb-4 justify-content-end">
                <div className="d-flex align-items-center">

                    {/**********************Verified Business Owner*************************/}
                    {isVerified && restaurant.name &&
                     <div className="fs-1 text-nowrap">
                         {restaurant.name}
                     </div>
                    }

                    {/**********************Unverified Business Owner*************************/}
                    {!isVerified &&
                     <HashLink smooth to={`${currentURL}#top`}
                               className="wd-business-back-top fs-1 text-nowrap">
                         {user.firstName} {user.lastName}
                     </HashLink>
                    }
                    {!isVerified &&
                     <Link
                         className="btn btn-info rounded-pill fw-bold ms-auto me-xl-2 px-3"
                         to={claimRoute}>
                         Claim <span className="d-none d-sm-inline">Business</span>
                     </Link>
                    }
                </div>

                <div>
                    {isVerified &&
                     <h4 className="my-0">Welcome back, {user.firstName}</h4>
                    }
                    {isVerified &&
                     <div className="d-flex align-items-end mb-1">
                     <div className="text-black-50">Here's what's going on with your business
                         today</div>
                        <Link
                        className="btn btn-info rounded-pill fw-bold text-nowrap ms-auto me-xl-2 px-3"
                        to={`/restaurants/${user.businessData.restaurant.id}`}>
                        View <span className="d-none d-md-inline">Restaurant</span>
                        </Link>
                     </div>
                    }

                </div>
            </div>
        </div>

    )
}

export default BusinessHeader;