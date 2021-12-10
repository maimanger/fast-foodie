import React, {useEffect, useState} from "react";
import './index.css';
import BusinessClaimSearchScreen from "./BusinessClaimSearchScreen";
import SimpleHeader from "../SearchScreen/public_components/SimpleHeader";
import Footer from "../CustomerHomeScreen/public-components/Footer";
import BusinessClaimSearchResultScreen from "./BusinessClaimSearchResultScreen";
import BusinessClaimSearchNoResultComponent from "./BusinessClaimSearchNoResultComponent";
import BusinessClaimStatusScreen from "./BusinessClaimStatusScreen";
import {Route} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {fetchProfile} from "../../services/profileService";
import {getClaim} from "../../services/claimService";
import {useHistory} from "react-router-dom";

const BusinessClaimScreen = () => {
    // const profile = useSelector(state => state.profile);
    // const dispatch = useDispatch();
    // let history = useHistory();
    //
    // // Get profile
    // useEffect(() => {
    //     fetchProfile(dispatch);
    // }, [])
    //
    // // Check claim status
    // const [claimStatus, setClaimStatus] = useState("");
    // useEffect(() => {
    //     if (profile !== undefined && Object.keys(profile).length !== 0) {
    //         if (profile['businessData']['verified']) {
    //             setClaimStatus("approved")
    //         } else {
    //             getClaim()
    //                 .then(res => {
    //                     setClaimStatus(res.status)
    //                 })
    //                 .catch(e => {
    //                     setClaimStatus("never")
    //                 })
    //         }
    //     }
    // }, [profile])
    //
    // // case 1: new claim -> claim search
    // // case 2: have claim -> claim status
    //
    // if (profile === undefined || Object.keys(profile).length === 0) {
    //     return <></>
    // } else if (claimStatus === "never") {
    //     history.push("/business/claim/search");
    // } else {
    //     history.push('/business/claim/status');
    // }


    return (
        <div className={"bg-white homescreen-min-height-100vh d-flex flex-column"}>
            <SimpleHeader />

            <div className={"businessclaimscreen-main justify-content-center"}>
                <Route path={"/business/claim/search"} component={BusinessClaimSearchScreen} />
                <Route path={"/business/claim/search_result"} component={BusinessClaimSearchResultScreen} />
                <Route path={"/business/claim/status"}>
                    <BusinessClaimStatusScreen  />
                </Route>
            </div>



            <Footer />
        </div>
    )
}

export default BusinessClaimScreen;