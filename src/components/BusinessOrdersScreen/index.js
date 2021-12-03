import React, {useState} from "react";
import "../BusinessHomeScreen/Business.css"
import BusinessNavSidebar from "../BusinessHomeScreen/BusinessNavSidebar";
import BusinessHeader from "../BusinessHomeScreen/BusinessHeader";
import BusinessOrders from "./BusinessOrders";

const BusinessOrdersScreen = () => {
    return (
        <>
            <div className="container-fluid vw-100 p-0">
                <div className="sticky-top">
                    <div className="wd-business-banner bg-secondary vw-100"></div>
                    <BusinessHeader/>
                </div>

                <div className="row flex-nowrap">

                    {/****************************Business NavSidebar**************************/}
                    <div className="col-4 col-lg-3 d-flex justify-content-center px-0 mt-4">
                        <BusinessNavSidebar active="orders"/>
                    </div>

                    {/****************************Business Orders**************************/}
                    <div className="col-7 col-lg-6 d-flex flex-column px-0">
                            <h3 className="text-danger fw-bold">Orders</h3>
                            <BusinessOrders/>
                    </div>






                </div>

            </div>

        </>

    )
}

export default BusinessOrdersScreen;