import React from "react";
import {Link} from "react-router-dom";
import {HashLink} from "react-router-hash-link";
import "./Business.css";
import restaurants from "../../reducers/data/restaurants/nyc.json"

const BusinessHeader = () => {
    const restaurant = restaurants.businesses[3];

    return (
        <div className="row d-flex flex-nowrap align-items-end wd-business-header">

            {/******************************Profile Header Avatar**************************/}

            <div className="col-4 col-lg-3 d-flex justify-content-center px-0">
                <div className="wd-business-avatar shadow card bg-transparent">
                    <img src={restaurant.image_url}
                         className="img-thumbnail bg-light" alt="..."/>
                </div>
            </div>

            {/******************************Profile Header Title**************************/}
            <div className="col-6 col-sm-5 col-lg-6 d-flex flex-column
                               pb-3 px-0 mb-4 justify-content-end">
                <div className="d-flex align-items-center">
                <HashLink smooth to="/business#top" className="wd-business-back-top fs-1 text-nowrap">
                    {restaurant.name}
                </HashLink>

                <Link to="/restaurant" className="text-info fs-5 mx-4 wd-business-link-text mt-3">
                    view
                </Link>
                </div>

                <h4>Welcome back, Monica</h4>
                <div className="text-black-50">Here's what's going on with your business today</div>
            </div>

            {/***************************Profile Header Edit Btn************************/}
{/*            <div className="col-auto d-flex flex-column pb-3 mb-4 justify-content-around ps-1 ">

                <button className="d-flex flex-nowrap align-items-center justify-content-start
                                           btn rounded-pill btn-outline-info">
                    <i className="fas fa-cog me-0 me-sm-2"></i>
                    <span className="d-none d-sm-inline me-1">Update</span>
                    <span className="d-none d-md-inline">Profile</span>
                </button>
            </div>*/}

        </div>

    )
}

export default BusinessHeader;