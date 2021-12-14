import React from "react";
import SimpleHeader from "../headers/SimpleHeader";
import Footer from "../footers/Footer";
import PrivacyContent from "./PrivacyContent";

const PrivacyScreen = () => {
    window.scrollTo(0, 0);
    return (
        <div className={"app-window-container bg-white"}>
            <SimpleHeader />
            <div className={"d-flex justify-content-center"}>
                <PrivacyContent />
            </div>
            <Footer />

        </div>
    )
}

export default PrivacyScreen;