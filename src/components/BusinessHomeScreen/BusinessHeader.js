import React, {useEffect, useState} from "react";
import {Link} from "react-router-dom";
import {HashLink} from "react-router-hash-link";
import "./Business.css";
import restaurants from "../../reducers/data/restaurants/nyc.json"
import users from "../../reducers/data/profile/users.json"
import {useLocation} from "react-router";
import {checkClaimStatus} from "../../services/claimService";
import {useDispatch, useSelector} from "react-redux";

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
    const claimStatus = useSelector(state => state.claim);
    const dispatch = useDispatch();
    useEffect(() => {
        checkClaimStatus(dispatch);
    }, [])
    const claimRoute = claimStatus === "never" ? '/business/claim/search' : '/business/claim/status';

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
            <div className="col-6 col-sm-5 col-lg-6 d-flex flex-column
                               pb-3 px-0 mb-4 justify-content-end">
                <div className="d-flex align-items-center">

                    {/**********************Verified Business Owner*************************/}
                    {isVerified && restaurant.name &&
                     <HashLink smooth to="/business#top"
                               className="wd-business-back-top fs-1 text-nowrap">
                         {restaurant.name}
                     </HashLink>
                    }
                    {isVerified && restaurant.id &&
                     <Link to={`/restaurants/${restaurant.id}`}
                           className="text-info fs-5 mx-4 wd-business-link-text mt-3">
                         view
                     </Link>
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
                         className="btn btn-info rounded-pill fw-bold  ms-auto me-2 me-xl-5 px-3"
                         to={claimRoute}>
                         Claim <span className="d-none d-sm-inline">Business</span>
                     </Link>
                    }
                    {isVerified &&
                    <Link
                        className="btn btn-info rounded-pill fw-bold  ms-auto me-2 me-xl-5 px-3"
                        to={`/restaurants/${user.businessData.restaurant.id}`}>
                        <span className="d-none d-sm-inline"> My Restaurant</span>
                    </Link>
                    }

                </div>

                {isVerified &&
                 <h4>Welcome back, {user.firstName}</h4>
                }
                {isVerified &&
                 <div className="text-black-50">Here's what's going on with your business
                     today</div>
                }

            </div>

        </div>



    )
}

export default BusinessHeader;