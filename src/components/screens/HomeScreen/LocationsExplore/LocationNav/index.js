import React from "react";
import "./index.css";
import LocationNavItem from "./LocationNavItem";

const LocationNav = () => {
    const locations = ["Austin", "Dallas", "Houston", "San Antonio", "New York", "San Jose", "Los Angeles", "Chicago", "Seattle", "<i class='fas fa-search me-2'></i>More Cities"]

    return (
        <div className={"w-100 d-flex justify-content-center mb-5"}>
            <ul className="nav nav-tabs nav-tabs-location d-flex flex-nowrap">
                {locations.map(city => <LocationNavItem city={city} />)}

            </ul>
        </div>
    )
}

export default LocationNav;