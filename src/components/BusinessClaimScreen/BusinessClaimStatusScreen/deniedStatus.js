import React from "react";
import {Link} from "react-router-dom";

const DeniedStatus = () => {
    return (
        <div>
            <h5 className={"pb-3 mb-5"}>Sorry. Your claim request was denied. Please contact us or claim a new business again. Thank you for your patience!</h5>
            <div className={"d-flex"}>
                <Link className={"btn btn-primary me-3"} to={"/business/claim/search"}>Try Again</Link>
            </div>
        </div>
    )
}

export default DeniedStatus;