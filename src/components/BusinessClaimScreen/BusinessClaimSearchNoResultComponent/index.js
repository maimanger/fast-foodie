import React from "react";
import {Link} from "react-router-dom";

const BusinessClaimSearchNoResultComponent = () => {
    return (
        <div className={"mt-5 pt-5 text-center"}>
            <h4 className={"fw-bold mb-5"}>Sorry, no matching result was found.</h4>
            <Link to={"/business/claim/search"}><button className={"btn btn-light"}>Go Back</button></Link>
        </div>
    )
}

export default BusinessClaimSearchNoResultComponent;

