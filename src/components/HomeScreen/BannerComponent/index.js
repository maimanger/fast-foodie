import React from "react";
import './index.css';
import SearchBar from "../public-components/SearchBar";
import BrandName from "../public-components/BrandName";
import Dropdowns from "../public-components/Dropdowns";
import LoginSignupButtons from "./LoginSignupButtons";
import LoggedInHeaderButtons from "./LoggedInHeaderButtons";

const BannerCompoenent = () => {
    return (
        <div className={"w-100 homepage-banner position-relative"}>
            <img src="https://as1.ftcdn.net/v2/jpg/01/80/41/98/1000_F_180419859_SbEGEyoMlol8sZGpea1lqQRRYFZ1ExNX.jpg"
                 alt="banner-img"
                 className={"homepage-banner-img w-100"}/>
            <div className={"position-absolute homepage-banner-main d-flex justify-content-center align-items-center"}>
                <div className={"homepage-banner-main-content"}>
                    <div className={"homepage-banner-brand-container text-center mb-5"}>
                        <BrandName/>
                    </div>
                    <div className={"homepage-search-bar-container mb-3"}>
                        <SearchBar/>
                    </div>
                    {/*<div className={"ps-5 d-none d-lg-block"}>*/}
                    {/*    <Dropdowns color={"white"} isBold={true}/>*/}
                    {/*</div>*/}
                </div>

                <div className={"homepage-banner-header-container position-absolute"}>
                    {window.location.href==="http://localhost:3000/home/logged-in" ? <LoggedInHeaderButtons /> :<LoginSignupButtons />}
                </div>
            </div>



        </div>
    )
}

export default BannerCompoenent;