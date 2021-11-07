import React from "react";
import "./index.css";
import navs from "./navItems.json";
import LeftNavItem from "./LeftNavItem";

const LeftNavs = () => {
    return (
        <>
            <button className="navbar-toggler" type="button" data-toggle="collapse"
                    data-target="#collapsibleNavbar">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="collapsibleNavbar">
                <ul className="navbar-nav">
                    {navs.map(item => <LeftNavItem item={item} />)}
                </ul>
            </div>
        </>
    )
}

export default LeftNavs;