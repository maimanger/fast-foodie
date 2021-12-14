import React from "react";
import "./index.css";
import {Link} from "react-router-dom";
import BrandName from "../../CustomerHomeScreen/public-components/BrandName";

const SimpleFooter = () => {
    return (
        <div className={"simple-footer text-center p-5 w-100 mt-auto"}>

            <div className={"px-5 mb-5 text-secondary"}>
                <hr />
            </div>
            {/*links*/}
            <div className={"homepage-footer-links d-flex justify-content-center pb-5"}>
                <Link to={"/about"} className={"homescreen-footer-link homepage-color-dimgray text-decoration-none border-end"}>ABOUT US</Link>
                <Link to={"/contact"} className={"homescreen-footer-link homepage-color-dimgray text-decoration-none border-end"}>CONTACT</Link>
                <Link to={"/privacy_policy"} className={"homescreen-footer-link homepage-color-dimgray text-decoration-none text-nowrap ms-2"}>PRIVACY POLICY</Link>
            </div>

            {/*copyright*/}
            <div>
                <div>Copyright Ⓒ 2021 All rights reserved. Fast Foodie Inc.</div>
                <div>Website designed by Foodiey Marketing.</div>
            </div>
        </div>
    )
}

export default SimpleFooter;