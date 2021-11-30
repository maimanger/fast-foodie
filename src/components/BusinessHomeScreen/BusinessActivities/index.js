import React from "react";
import {useSelector} from "react-redux";
import activities from "../../../reducers/data/businessHome/businessActivities.json"
import BusinessActivityItem from "./BusinessActivityItem";


const BusinessActivities = () => {

    return (
        <ul className="list-group list-group-flush">
            {activities.map(activity => {
                return (
                    <BusinessActivityItem activity={activity}/>
                )
            })}
        </ul>
    )

}

export default BusinessActivities;