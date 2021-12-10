import React from "react";
import {Link} from "react-router-dom";

const ApprovedStatus = () => {
    const name = "Qiansha Meng";
    return (
        <div>
            <h5 className={"pb-3 mb-5 text-center"}>Congratulations! You claim request has been approved.</h5>
            <div className={"d-flex justify-content-center"}>
                <Link className={"btn btn-primary me-3"} to={"/home"}>Home</Link>
                <Link className={"btn btn-primary me-3"} to={"/profile"}>Profile</Link>
            </div>
        </div>
    )
}

export default ApprovedStatus;