import React from "react";
import './index.css';
import ContactFormComponent from "./ContactFormComponent";
import SearchHeader from "../SearchScreen/SearchHeader";
import SimpleHeader from "../headers/SimpleHeader";
import ContactInfo from "./ContactInfo";
import Footer from "../CustomerHomeScreen/public-components/Footer";

const ContactScreen = () => {
    window.scrollTo(0, 0);
    return (
        <div className={"bg-white homescreen-screen-container-default-size"}>

            {/*******************  header  **********************/}
            <SimpleHeader />

            {/*******************  banner  **********************/}
            <img src="https://cdn.shopify.com/s/files/1/1740/3779/files/K_Js-contactUs-Banner.jpg?10988943411126984298"
                 alt="img" className={"w-100 mb-5"}/>

            {/*******************  contact form  **********************/}
            <div className={"contactscreen-main-container"}>
                {/*<ContactFormComponent />*/}
                <ContactInfo />
            </div>

            {/*******************  footer  **********************/}
            <Footer />

        </div>
    )
}

export default ContactScreen;