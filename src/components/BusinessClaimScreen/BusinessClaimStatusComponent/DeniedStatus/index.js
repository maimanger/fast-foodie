import React from "react";
import {Link} from "react-router-dom";

const DeniedStatus = () => {
    return (
        <div>
            <h5 className={"mb-5 pb-3"}>Sorry. Your claim request was denied. Please contact us or claim a business again. Thank you for your patience!</h5>
            <div className={"d-flex"}>
                <button className={"btn btn-primary me-3"}>Claim a New Business</button>
                <Link to={"/contact"}><button className={"btn btn-light"}>Contact Us</button></Link>
            </div>
        </div>
    )
}

export default DeniedStatus;