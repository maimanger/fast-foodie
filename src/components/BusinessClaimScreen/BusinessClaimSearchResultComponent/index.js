import React from "react";


const BusinessClaimSearchResultComponent = () => {

    const restaurant = {
        "name": "Gary Danko",
        "location": {
            "address1": "800 N Point St",
            "address2": "",
            "address3": "",
            "city": "San Francisco",
            "state": "CA",
            "zip_code": "94109",
            "country": "US"
        },
    }

    return (
        <div className={"mt-5 pt-5"}>
            <h4 className={"fw-bold mb-5 text-center"}>Confirm Your Business</h4>

            {/**************  Search result  ***************/}
            <div>Business Name: &nbsp;{restaurant.name}</div>
            <div className={"mb-5"}>Business Address: &nbsp;{restaurant.location.address1}{restaurant.location.address2!=="" && ` ${restaurant.location.address2}`}{restaurant.location.address3!=="" && ` ${restaurant.location.address3}`}, {restaurant.location.city}, {restaurant.location.state} {restaurant.location['zip_code']}</div>

            <div className={"d-flex justify-content-between"}>
                <button className={"btn btn-light"}>Back</button>
                <button className={"btn btn-primary"}>Continue</button>
            </div>
        </div>
    )
}

export default BusinessClaimSearchResultComponent;