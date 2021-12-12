import React from "react";
import './index.css';

const ContactInfo = () => {
    return (
        <div>
            {/*<div className={"contactscreen-greeting-text text-center"}>*/}
            {/*    Do you have any questions? Please do not hesitate to contact us directly. Our team will come back to you*/}
            {/*    within a matter of hours to help you.*/}
            {/*</div>*/}
            <div className={"contact-screen-main mt-auto d-md-flex align-items-center justify-content-center"}>

                <h4 className={"fw-bold text-center text-nowrap mb-3"}>Need Some Help?</h4>
                <div className={"d-flex justify-content-center ms-3 me-3"}>

                    <div className={"d-flex align-items-center px-4 border-end mb-3"}>
                        <i className="fas fa-envelope fa-lg ms-3 me-3"/>
                        <div>info@fastfoodie.com</div>
                    </div>


                    <div className={"d-flex align-items-center px-4 text-nowrap mb-3"}>
                        <i className="fas fa-phone fa-lg ms-3 me-3"/>
                        <div>+1 (800)-625-0000</div>
                    </div>
                </div>
            </div>

            <div className={"d-flex"}>


            </div>




        </div>
    )
}

export default ContactInfo;