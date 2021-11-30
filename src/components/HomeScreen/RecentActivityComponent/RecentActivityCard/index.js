import React from "react";
import RecentActivityReviewCard from "./RecentActivityReviewCard";
import RecentActivityPhotoCard from "./RecentActivityPhotoCard";
import RecentActivityBookmarkCard from "./RecentActivityBookmarkCard";

const RecentActivityCard = ({activity}) => {
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
        <div>
            {res}
        </div>
    )
}

export default RecentActivityCard

