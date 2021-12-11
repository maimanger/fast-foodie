import React from "react";
import "./index.css";
import {Link} from "react-router-dom";
import BrandName from "../BrandName";

const Footer = () => {
    return (
        <div className={"homescreen-footer text-center p-5 w-100 "}>

            {/*brand*/}
            <div className={"homescreen-footer-brand"}>
                <BrandName color={"primary"}/>
            </div>

            {/*links*/}
            <div className={"homepage-footer-links d-flex justify-content-center pt-3 pb-5"}>
                <Link to={"/about"} className={"homescreen-footer-link homepage-color-dimgray text-decoration-none border-end"}>ABOUT US</Link>
                <Link to={"/contact"} className={"homescreen-footer-link homepage-color-dimgray text-decoration-none border-end"}>CONTACT</Link>
                <Link to={"/privacy_policy"} className={"homescreen-footer-link homepage-color-dimgray text-decoration-none text-nowrap"}>PRIVACY POLICY</Link>
            </div>

            {/*copyright*/}
            <div>
                <div>Copyright Ⓒ 2021 All rights reserved. Fast Foodie Inc.</div>
                <div>Website designed by Foodiey Marketing.</div>
            </div>
        </div>
    )
}

export default Footer;