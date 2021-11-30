import React from "react";
import "./index.css";
import {Link} from "react-router-dom";
import BrandName from "../BrandName";

const Fooster = () => {
    return (
        <div className={"homescreen-footer text-center p-5"}>

            {/*brand*/}
            <div className={"homescreen-footer-brand"}>
                <BrandName color={"black"}/>
            </div>

            {/*links*/}
            <div className={"homepage-footer-links d-flex justify-content-center"}>
                <div className={"m-5 text-info"}>ABOUT US</div>
                <div className={"m-5 text-info"}>CONTACT</div>
                <div className={"m-5 text-info"}>PRIVACY POLICY</div>
            </div>

            {/*copyright*/}
            <div>
                <div>Copyright Ⓒ 2021 All rights reserved. Fast Foodie Inc.</div>
                <div>Website designed by Foodiey Marketing.</div>
                <div>United States</div>
            </div>
        </div>
    )
}

export default Fooster;