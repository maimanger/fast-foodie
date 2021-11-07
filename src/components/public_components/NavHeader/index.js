import React from "react";
import "./index.css";
import HeaderBreadcrumb from "./HeaderBreadCrumb";
import HeaderNav from "./HeaderNav";
import BrandName from "../BrandName";


const NavHeader = () => {
    return (
        <nav className="navbar navbar-expand-md bg-light navbar-light">
            <div className={"container d-flex justify-content-between align-items-center"}>
                <div className={"d-flex"}>
                    <BrandName />
                    <HeaderNav />
                </div>
                <HeaderBreadcrumb />
            </div>
        </nav>
    )
}

export default NavHeader;