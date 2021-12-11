import React from "react";
import RecentActivityReviewCard from "../RecentActivityCard/RecentActivityReviewCard";
import RecentActivityBookmarkCard from "../RecentActivityCard/RecentActivityBookmarkCard";
import RecentActivityPhotoCard from "../RecentActivityCard/RecentActivityPhotoCard";
import RecentActivityCard from "../RecentActivityCard";

const  RecentActivityCards = ({activities}) => {

    if (activities !== undefined && activities.length !== 0) {
        return (
            <div>
                {activities.map((activity, index)=>{
                    let i = index;
                    if (i % 3 === 0) {
                        return (
                            <div className={"d-lg-flex justify-content-center mb-4"}>
                                <div className={"ms-3 me-3 mb-3"}>
                                    <RecentActivityCard activity={activities[i]}/>
                                </div>
                                {i + 1 < activities.length &&
                                <div className={"ms-3 me-3 mb-3"}>
                                    <RecentActivityCard activity={activities[i+1]}/>
                                </div>
                                }
                                {i + 2 < activities.length &&
                                <div className={"ms-3 me-3 mb-3"}>
                                    <RecentActivityCard activity={activities[i + 2]}/>
                                </div>
                                }
                            </div>
                        )
                    }
                })}
            </div>
        )
    }
    else {
        return <></>
    }

}

export default RecentActivityCards;