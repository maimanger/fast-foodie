import React, {useEffect, useState} from "react";

import AdminNavSidebar from "../AdminHomeScreen/AdminNavSidebar";
import AdminClaims from "./AdminClaims";
import claims from "../../reducers/data/adminHome/adminClaims.json"
import {useDispatch, useSelector} from "react-redux";
import {getAllClaims} from "../../services/claimService";



const AdminClaimScreen = () => {

    const claims = useSelector(state => state.claims);
    const dispatch = useDispatch();
    useEffect(() => {
        getAllClaims(dispatch);
    }, [])


    return (
        <>
            <div className="container-fluid vw-100 p-0">

                <div className="row flex-nowrap">
                    {/****************************Admin NavSidebar************************/}
                    <div className="col-4 col-lg-3 d-flex justify-content-center px-0">
                        <AdminNavSidebar active="claims"/>
                    </div>

                    {/****************************Admin Claims Table**************************/}
                    <div className="col-7 col-lg-8 d-flex flex-column px-0">
                        <h3 className="text-danger fw-bold">Claims</h3>
                        <AdminClaims claims={claims}/>
                    </div>


                </div>

            </div>

        </>

    )
}

export default AdminClaimScreen;