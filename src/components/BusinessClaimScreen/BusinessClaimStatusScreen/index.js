import React, {useEffect, useState} from "react";
import DeniedStatus from "./deniedStatus";
import ReceivedStatus from "./receivedStatus";
import {useDispatch, useSelector} from "react-redux";
import {fetchProfile} from "../../../services/profileService";
import {initClaim} from "../../../services/claimService";
import ApprovedStatus from "./approvedStatus";

const BusinessClaimStatusScreen = () => {

    const claim = useSelector(state => state.claim);
    const dispatch = useDispatch();
    useEffect(() => {
        initClaim(dispatch);
    }, [])

    if (claim === undefined || Object.keys(claim).length === 0) {
        return <></>
    }
    return (
        <div className={"mt-5 pt-5"}>
            {claim.status === "denied" && <DeniedStatus />}
            {claim.status === "unprocessed" && <ReceivedStatus />}
            {claim.status === "approved" && <ApprovedStatus />}
        </div>

    )
}

export default BusinessClaimStatusScreen;