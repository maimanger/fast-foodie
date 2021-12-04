import React, {useState} from "react";

import AdminNavSidebar from "./AdminNavSidebar";
import AdminStatistics from "./AdminStatistics";
import AdminNotifications from "./AdminNotifications";


const AdminHomeScreen = () => {
    return (
        <>
            <div className="container-fluid vw-100 p-0">

                <div className="row flex-nowrap">
                    {/****************************Admin NavSidebar************************/}
                    <div className="col-4 col-lg-3 d-flex justify-content-center px-0">
                        <AdminNavSidebar active="home"/>
                    </div>

                    {/****************************Admin MainContent************************/}
                    <div className="col-7 col-lg-6 d-flex flex-column px-0">
                        <h3 className="text-danger fw-bold">Notifications</h3>
                        <AdminNotifications/>
                    </div>


                    {/****************************Admin Productivity statistics************************/}
                    <div
                        className="d-none d-lg-block col-xl-auto border-2 border-start ">
                        <AdminStatistics/>
                    </div>

                </div>


            </div>
        </>

    )
}

export default AdminHomeScreen;