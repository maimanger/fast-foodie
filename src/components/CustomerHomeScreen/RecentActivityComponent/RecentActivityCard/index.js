import React from "react";
import "./index.css";
import RecentActivityReviewCard from "./RecentActivityReviewCard";
import RecentActivityPhotoCard from "./RecentActivityPhotoCard";
import RecentActivityBookmarkCard from "./RecentActivityBookmarkCard";

const RecentActivityCard = ({activity}) => {

    if (activity === undefined) {
        return <></>;
    }

    let res = null;

    switch (activity.type){
        case "review":
            res = <RecentActivityReviewCard activity={activity} />;
            break;
        case "add photo":
            res = <RecentActivityPhotoCard activity={activity} />;
            break;
        case "bookmark":
            res = <RecentActivityBookmarkCard activity={activity} />;
            break;
        default:
            res = <RecentActivityReviewCard activity={activity} />
    }
    return (
        <div className={"homepage-activity-card-container"}>
            {res}
        </div>
    )
}

export default RecentActivityCard

