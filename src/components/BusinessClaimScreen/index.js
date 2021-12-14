import React, {useEffect, useState} from "react";
import './index.css';
import BusinessClaimSearchScreen from "./BusinessClaimSearchScreen";
import SimpleHeader from "../headers/SimpleHeader";
import Footer from "../footers/Footer";
import BusinessClaimSearchResultScreen from "./BusinessClaimSearchResultScreen";
import BusinessClaimSearchNoResultComponent from "./BusinessClaimSearchNoResultComponent";
import BusinessClaimStatusScreen from "./BusinessClaimStatusScreen";
import {Route, useHistory} from "react-router-dom";
import {API_URL} from "../../CONST";
import {fetchProfile} from "../../services/profileService";
import {useDispatch, useSelector} from "react-redux";


const BusinessClaimScreen = () => {
    const history = useHistory();
    const dispatch = useDispatch();
    const profile = useSelector(state => state.profile)
    useEffect(() => {
        fetchProfile(dispatch)
            .catch(e => {
                history.push('/');
            })
    }, [])

    if (profile !== undefined && Object.keys(profile).length !== 0 && profile.role !== 'business') {
        history.push('/');
    }


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