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
                            <div className={"d-flex justify-content-center mb-4"}>
                                <div>
                                    <RecentActivityCard activity={activities[i]}/>
                                </div>
                                <div className={"me-4 ms-4"}>
                                    <RecentActivityCard activity={activities[i+1]}/>
                                </div>
                                <div>
                                    <RecentActivityCard activity={activities[i+2]} />
                                </div>
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