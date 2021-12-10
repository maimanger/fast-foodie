import React, {useEffect, useState} from "react";
import './index.css';
import BusinessClaimSearchScreen from "./BusinessClaimSearchScreen";
import SimpleHeader from "../SearchScreen/public_components/SimpleHeader";
import Footer from "../CustomerHomeScreen/public-components/Footer";
import BusinessClaimSearchResultScreen from "./BusinessClaimSearchResultScreen";
import BusinessClaimSearchNoResultComponent from "./BusinessClaimSearchNoResultComponent";
import BusinessClaimStatusScreen from "./BusinessClaimStatusScreen";
import {Route} from "react-router-dom";


const BusinessClaimScreen = () => {



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