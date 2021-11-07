import React from "react";
import "./index.css";
import RightNavs from "./RightNavs";
import LeftNavs from "./LeftNavs";
import BrandName from "../BrandName";


const NavHeader = () => {
    return (
        <nav className="navbar navbar-expand-md bg-light navbar-light">
            <div className={"container d-flex justify-content-between align-items-center"}>
                <div className={"d-flex"}>
                    <BrandName />
                    <LeftNavs />
                </div>
                <RightNavs />
            </div>
        </nav>
    )
}

export default NavHeader;