import React from "react";
import './index.css';
import BusinessClaimSearchComponent from "./BusinessClaimSearchComponent";
import SimpleHeader from "../SearchScreen/public_components/SimpleHeader";
import Footer from "../HomeScreen/public-components/Footer";
import BusinessClaimSearchResultComponent from "./BusinessClaimSearchResultComponent";
import BusinessClaimSearchNoResultComponent from "./BusinessClaimSearchNoResultComponent";
import BusinessClaimStatusComponent from "./BusinessClaimStatusComponent";

const BusinessClaimScreen = () => {
    return (
        <div className={"bg-white homescreen-min-height-100vh d-flex flex-column"}>
            <SimpleHeader />
            <div className={"businessclaimscreen-main d-flex justify-content-center"}>
                {/*<BusinessClaimSearchComponent />*/}
                {/*<BusinessClaimSearchResultComponent />*/}
                {/*<BusinessClaimSearchNoResultComponent />*/}
                <BusinessClaimStatusComponent />
            </div>
            <Footer />
        </div>
    )
}

export default BusinessClaimScreen;