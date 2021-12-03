import React from "react";
import moment from "moment";
import {Link} from "react-router-dom";
import "../../AdminHomeScreen/Admin.css"



const AdminClaimItem = ({claim}) => {
    return (
        <>
            <tr>
                <td style={{verticalAlign: "middle"}} className="text-center">
                    <Link to={`/profile/${claim.user._id}`} className="wd-admin-link-text text-black">
                    {claim.user.firstName} {claim.user.lastName}
                    </Link>
                </td>
                <td style={{verticalAlign: "middle"}} className="text-center">
                    <Link to={`/restaurant/${claim.restaurant.id}`} className="wd-admin-link-text text-black">
                    {claim.restaurant.name}
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

                <td className="text-center" style={{verticalAlign: "middle"}}>
                    <div className="d-flex justify-content-center">
                    <div className="me-3">
                        <button className="btn rounded-pill btn-outline-primary py-1"
                                style={{width: "85px"}}>
                            Accept
                        </button>
                    </div>
                    <div>
                        <button className="btn rounded-pill btn-outline-info py-1"
                                style={{width: "85px"}}>
                            Decline
                        </button>
                    </div>
                    </div>
                </td>
            </tr>

        </>
    )
}

export default AdminClaimItem;