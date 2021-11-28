import React from "react";
import ProfileRecentActivityItem from "./ProfileRecentActivityItem"
import {useSelector} from "react-redux";

const ProfileRecentActivities = () => {
    const recentActivities = useSelector(state => state.recentActivities);

    return (
        <ul className="list-group list-group-flush">
            {recentActivities.map(activity => {return (
                <ProfileRecentActivityItem activity={activity}/>
            )})}

        </ul>
    )

};

export default ProfileRecentActivities;