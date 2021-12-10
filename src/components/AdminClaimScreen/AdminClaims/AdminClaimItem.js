import React, {useEffect, useState} from "react";
import moment from "moment";
import {Link} from "react-router-dom";
import "../../AdminHomeScreen/Admin.css"
import {findOneUserById, findUserById} from "../../../services/profileService";
import {useDispatch} from "react-redux";
import {searchOneRestaurantById} from "../../../services/searchService";
import {approveClaim, denyClaim} from "../../../services/claimService";



const AdminClaimItem = ({claim}) => {

    const dispatch = useDispatch();
    const [userName, setUserName] = useState('');
    const [businessName, setBusinessName] = useState('');


    const initData = () => {
        findOneUserById(claim['user'])
            .then(res => {
                setUserName(res.firstName + ' ' + res.lastName)
            })

        searchOneRestaurantById(claim['restaurant'])
            .then(res => {
                setBusinessName(res.name)
            })
    }
    useEffect(initData, [claim])


    const clickApproveHandler = () => {
        approveClaim(dispatch, claim);
    }

    const clickDenyHandler = () => {
        denyClaim(dispatch, claim);
    }


    return (
        <>
            <tr>
                <td style={{verticalAlign: "middle"}} className="text-center">
                    <Link to={`/profile/${claim.user}`} className="wd-admin-link-text text-black">
                        {userName}
                    </Link>
                </td>
                <td style={{verticalAlign: "middle"}} className="text-center">
                    <Link to={`/restaurants/${claim.restaurant}`} className="wd-admin-link-text text-black">
                        {businessName}
                    </Link>
                </td>
                <td style={{verticalAlign: "middle"}} className="text-center">
                    {moment(claim.time_created).format("MM/DD/YYYY hh:mm:ss")}
                </td>
                <td className="text-center" style={{verticalAlign: "middle"}}>

                    <Link to={`/admin/claims/${claim._id}`} className="text-black">
                    <i className="far fa-file"></i>
                    </Link>

                </td>

                <td className="text-center">
                    <div style={{verticalAlign: "middle"}} >

                        {claim.status === 'approved' &&
                        <div className={"d-flex justify-content-center"}>
                            Accepted
                        </div>
                        }

                        {claim.status === 'denied' &&
                        <div className={"d-flex justify-content-center"}>
                            Declined
                        </div>
                        }
                        {(claim.status === 'unprocessed') &&
                       <div className={"d-flex flex-nowrap justify-content-center"}>
                           <div className="me-3">
                               <button className="btn rounded-pill btn-outline-primary py-1"
                                       style={{width: "85px"}} onClick={clickApproveHandler}>
                                   Accept
                               </button>
                           </div>
                           <div>
                               <button className="btn rounded-pill btn-outline-info py-1"
                                       style={{width: "85px"}} onClick={clickDenyHandler}>
                                   Decline
                               </button>
                           </div>
                       </div>
                        }
                    </div>

                </td>
            </tr>
        </>
    )
}

export default AdminClaimItem;