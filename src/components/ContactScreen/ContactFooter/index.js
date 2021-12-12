import React from "react";

const ContactFooter = () => {
    return (
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
    )
}

export default ContactFooter;