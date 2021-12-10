import React, {useEffect, useState} from "react";
import AdminNavSidebar from "../AdminHomeScreen/AdminNavSidebar";
import AdminClaims from "./AdminClaims";
import "../AdminHomeScreen/Admin.css"
import claims from "../../reducers/data/adminHome/adminClaims.json";
import {Link, useParams} from "react-router-dom";
import {getClaimById} from "../../services/claimService";

const AdminClaimDetail = () => {
    const claimId = useParams().claimId;
    const [claim, setClaim] = useState({});
    useEffect(() => {
        getClaimById(claimId)
            .then(res => {
                setClaim(res)
            })
    })
    let targetFile = claim.file_url;
    return (
        <>
            <div className="container-fluid vw-100 p-0">

                <div className="row flex-nowrap">
                    {/****************************Admin NavSidebar************************/}
                    <div className="col-4 col-lg-3 d-flex justify-content-center px-0">
                        <AdminNavSidebar active="claims"/>
                    </div>

                    {/**************************Admin Claim File Detail************************/}
                    <div className="col-7 col-lg-8 d-flex flex-column px-0">
                        <Link to="/admin/claims" className="wd-admin-link-text">
                        <h3 className="text-danger fw-bold wd-profile-link-text">Back</h3>
                        </Link>
                    <iframe style={{width: "100%", height: "100vh"}}
                            src={targetFile}
                            type='application/pdf'
                            title='title'/>
                    </div>
                </div>

            </div>

        </>




    )

}
export default AdminClaimDetail;