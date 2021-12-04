import React from "react";
import './index.css';
import ContactFormComponent from "./ContactFormComponent";
import SearchHeader from "../SearchScreen/public_components/SearchHeader";

const ContactScreen = () => {
    return (
        <div className={"bg-white homescreen-screen-container-default-size"}>

            {/*******************  header  **********************/}
            <SearchHeader loggedIn={true}/>

            {/*******************  banner  **********************/}
            <img src="https://cdn.shopify.com/s/files/1/1740/3779/files/K_Js-contactUs-Banner.jpg?10988943411126984298"
                 alt="img" className={"w-100 mb-5"}/>

            {/*******************  contact form  **********************/}
            <div className={"contactscreen-main-container my-5"}>
                <ContactFormComponent />
            </div>

            {/*******************  footer  **********************/}
            <div className={"p-5 mt-auto d-flex align-items-center justify-content-center contactscreen-footer"}>

                <h4 className={"fw-bold me-5"}>Need More Help?</h4>
                <div className={"d-flex justify-content-center ms-5"}>

                    <div className={"d-flex align-items-center px-4 border-end"}>
                        <i className="fas fa-envelope fa-lg me-3" />
                        <div>info@fastfoodie.com</div>
                    </div>


                    <div className={"d-flex align-items-center px-4"}>
                        <i className="fas fa-phone fa-lg me-3" />
                        <div>+1 (800)-625-0000</div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default ContactScreen;