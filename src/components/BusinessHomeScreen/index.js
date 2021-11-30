import React, {useState} from "react";
import "./Business.css"
import BusinessHeader from "./BusinessHeader";
import BusinessNavSidebar from "./BusinessNavSidebar";

const BusinessHomeScreen = () => {
    return (
        <>
            {/**********************************Business Header*********************************/}
            <div className="container-fluid vw-100 p-0">
                <div className="sticky-top">
                    <div className="wd-business-banner bg-secondary vw-100"></div>
                    <BusinessHeader/>
                </div>

                <div className="row flex-nowrap">

                    {/****************************Profile NavSidebar**************************/}

                    <div className="col-4 col-lg-3 d-flex justify-content-center px-0">
                        <BusinessNavSidebar active="home"/>
                    </div>

                </div>





            </div>





        </>
    )
}

export default BusinessHomeScreen;