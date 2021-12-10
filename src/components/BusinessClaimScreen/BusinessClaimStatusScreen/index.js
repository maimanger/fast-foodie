import React, {useEffect, useState} from "react";
import DeniedStatus from "./deniedStatus";
import ReceivedStatus from "./receivedStatus";
import {useDispatch, useSelector} from "react-redux";
import {fetchProfile} from "../../../services/profileService";
import {checkClaimStatus} from "../../../services/claimService";

const BusinessClaimStatusScreen = () => {

    const claimStatus = useSelector(state => state.claim);
    const dispatch = useDispatch();
    useEffect(() => {
        checkClaimStatus(dispatch);
    }, [])
    return (
        <div className={"mt-5 pt-5"}>
            {claimStatus === "denied" && <DeniedStatus />}
            {claimStatus === "unprocessed" && <ReceivedStatus />}
        </div>

    )
}

export default BusinessClaimStatusScreen;