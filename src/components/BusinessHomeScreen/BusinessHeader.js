import React from "react";
import {Link} from "react-router-dom";
import {HashLink} from "react-router-hash-link";
import "./Business.css";
import restaurants from "../../reducers/data/restaurants/nyc.json"
import users from "../../reducers/data/profile/users.json"

const BusinessHeader = ({user}) => {

    return (
        <div className="row d-flex flex-nowrap align-items-end wd-business-header">

            {/******************************Profile Header Avatar**************************/}
            {user.verified &&
             <div className="col-4 col-lg-3 d-flex justify-content-center px-0">
                 <div className="wd-business-avatar shadow card bg-transparent">
                     <img src={user.image_url}
                          className="img-thumbnail bg-light" alt="..."/>
                 </div>
             </div>
            }

            {/******************************Profile Header Title**************************/}
            <div className="col-6 col-sm-5 col-lg-6 d-flex flex-column
                               pb-3 px-0 mb-4 justify-content-end">
                <div className="d-flex align-items-center">

                    {user.verified &&
                     <HashLink smooth to="/business#top"
                               className="wd-business-back-top fs-1 text-nowrap">
                         {user.restaurant.name}
                     </HashLink>
                    }
                    {user.verified &&
                     <Link to="/restaurant"
                           className="text-info fs-5 mx-4 wd-business-link-text mt-3">
                         view
                     </Link>
                    }

                    {!user.verified &&
                     <HashLink smooth to="/business#top"
                               className="wd-business-back-top fs-1 text-nowrap">
                         {user.firstName} {user.lastName}
                     </HashLink>
                    }
                    {!user.verified &&
                     <button
                         className="btn btn-info rounded-pill fw-bold  ms-auto me-2 me-xl-5 px-3">
                         Claim <span className="d-none d-sm-inline">Business</span>
                     </button>
                    }
                </div>

                {user.verified &&
                 <h4>Welcome back, {user.firstName}</h4>
                }
                {user.verified &&
                 <div className="text-black-50">Here's what's going on with your business
                     today</div>
                }


            </div>


        </div>

    )
}

export default BusinessHeader;