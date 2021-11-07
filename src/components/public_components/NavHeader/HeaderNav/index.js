import React from "react";
import "./index.css";
import navs from "./navItems.json";
import NavItem from "./NavItem";

const HeaderNav = () => {
    return (
        <>
            <button className="navbar-toggler" type="button" data-toggle="collapse"
                    data-target="#collapsibleNavbar">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="collapsibleNavbar">
                <ul className="navbar-nav">
                    {navs.map(item => <NavItem item={item} />)}
                </ul>
            </div>
        </>
    )
}

export default HeaderNav;