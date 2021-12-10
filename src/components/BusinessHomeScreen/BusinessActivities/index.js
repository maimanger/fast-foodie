import React from "react";
import {useSelector} from "react-redux";
import activities from "../../../reducers/data/businessHome/businessActivities.json"
import BusinessActivityItem from "./BusinessActivityItem";

const BusinessActivities = ({activities = []}) => {

    return (
        <>
            {activities.length === 0 && <div>No new activity at this time.</div>}

            <ul className="list-group list-group-flush">
                {activities.map(activity => {
                    return (
                        <BusinessActivityItem activity={activity}/>
                    )
                })}
            </ul>
        </>
    )

}

export default BusinessActivities;