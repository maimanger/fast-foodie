import React from "react";
import './index.css';

const ContactFormComponent = () => {
    return (
        <div>
            <ul className={"list-group homescreen-w-fit"}>
                <li className={"list-group-item border padding-5 text-center border-0 mb-5"}>
                    <div className={"contactscreen-greeting-text"}>
                        Do you have any questions? Please do not hesitate to contact us directly. Our team will come back to you within a matter of hours to help you.
                    </div>

                </li>

                {/****************  Name  **************/}
                <li className={"list-group-item border-0"}>
                    <label className={"fw-bold form-label"} htmlFor={"contactscreen-first-name"}>
                        Name<span className={"text-danger"}>*</span>
                    </label>
                    <div className={"d-flex"}>
                        <input type="text" placeholder={"First Name"} className={"form-control me-4"} id={"contactscreen-first-name"}/>
                        <input type="text" placeholder={"Last Name"} className={"form-control"} id={"contactscreen-last-name"}/>
                    </div>
                </li>

                {/****************  E-mail  **************/}
                <li className={"list-group-item border-0 form-group"}>
                    <label className={"fw-bold form-label"} htmlFor={"contactscreen-email"}>
                        Email<span className={"text-danger"}>*</span>
                    </label>
                    <input type="email" placeholder={"example@123.com"} className={"form-control"} id={"contactscreen-email"}/>
                </li>

                {/****************  Phone number  **************/}
                <li className={"list-group-item border-0"}>
                    <label className={"fw-bold form-label"} htmlFor={"contactscreen-phone"}>
                        Telephone Number
                    </label>
                    <input type="text" placeholder={"(555)-555-5555"} className={"form-control"} id={"contactscreen-phone"}/>
                </li>

                {/****************  Order number  **************/}
                <li className={"list-group-item border-0"}>
                    <label className={"fw-bold form-label"} htmlFor={"contactscreen-order"}>
                        Order Number
                    </label>
                    <input type="text" placeholder={"#55555"} className={"form-control"} id={"contactscreen-order"}/>
                </li>

                {/****************  Message content  **************/}
                <li className={"list-group-item border-0"}>
                    <label className={"fw-bold form-label"} htmlFor={"contactscreen-message"}>
                        Message<span className={"text-danger"}>*</span>
                    </label>
                    <textarea placeholder={"Type your message here..."} rows={5}
                              className={"form-control"}
                              id={"contactscreen-message"}/>
                </li>

                <li className={"list-group-item border-0"}>
                    <button className={"btn btn-primary"}>Submit</button>
                </li>
            </ul>
        </div>
    )
}

export default ContactFormComponent;