import React from "react";
import DeniedStatus from "./DeniedStatus";
import ReceivedStatus from "./ReceivedStatus";

const BusinessClaimStatusComponent = () => {
    // const status = "denied";
    const status = "received";

    return (
        <div className={"mt-5 pt-5"}>
            {status === "denied" && <DeniedStatus />}
            {status === "received" && <ReceivedStatus />}
        </div>
    )
}

export default BusinessClaimStatusComponent;