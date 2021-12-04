import React from "react";
import './index.css';

const BusinessClaimSearchComponent = () => {
    return (
        <div>
            <img src="https://business.yelp.com/wp-content/uploads/sites/2/2020/10/ILL_Visitors_768x512_2x-768x512.png"
                 alt="img" className={"businessclaimscreen-title-img mb-3"}/>
            <h4 className={"fw-bold text-center mb-5"}>Let's look up your business</h4>

            {/****************  Business Name  ***************/}
            <div className={"mb-3"}>
                <label className={"fw-bold form-label"} htmlFor={"businessclaimscreen-business-name"}>
                    Business Name<span className={"text-danger"}>*</span>
                </label>
                <input type="text" placeholder={"Bisiness name"} className={"form-control"} id={"businessclaimscreen-business-name"}/>
            </div>

            {/****************  Address 1  ***************/}
            <div className={"mb-3"}>
                <label className={"fw-bold form-label"} htmlFor={"businessclaimscreen-address1"}>
                    Address Line1<span className={"text-danger"}>*</span>
                </label>
                <input type="text" placeholder={"Street address"} className={"form-control"} id={"businessclaimscreen-address1"}/>
            </div>

            {/****************  Address 2  ***************/}
            <div className={"mb-3"}>
                <label className={"fw-bold form-label"} htmlFor={"businessclaimscreen-address2"}>
                    Address Line2
                </label>
                <input type="text" placeholder={"Unit, building, floor, etc."} className={"form-control"} id={"businessclaimscreen-address2"}/>
            </div>

            {/****************  City, State  ***************/}
            <div className={"d-flex mb-3"}>
                <div className={"me-3"}>
                    <label className={"fw-bold form-label"} htmlFor={"businessclaimscreen-city"}>
                        City<span className={"text-danger"}>*</span>
                    </label>
                    <input type="text" placeholder={"City name"} className={"form-control"} id={"businessclaimscreen-city"}/>
                </div>

                <div className={""}>
                    <label className={"fw-bold form-label"} htmlFor={"businessclaimscreen-state"}>
                        State<span className={"text-danger"}>*</span>
                    </label>
                    <input type="text" placeholder={"State name"} className={"form-control"} id={"businessclaimscreen-state"}/>
                </div>
            </div>

            {/****************  Zip code  ***************/}
            <div className={"mb-5"}>
                <label className={"fw-bold form-label"} htmlFor={"businessclaimscreen-zip-code"}>
                    Zip Code<span className={"text-danger"}>*</span>
                </label>
                <input type="text" placeholder={"12345"} className={"form-control"} id={"businessclaimscreen-zip-code"}/>
            </div>

            <div className={"d-flex justify-content-center mb-5"}>
                <button className={"btn btn-primary"}>Continue</button>
            </div>

        </div>
    )
}

export default BusinessClaimSearchComponent;