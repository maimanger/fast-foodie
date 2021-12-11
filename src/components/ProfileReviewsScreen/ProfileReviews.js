import React from "react";
import reviews from "../../reducers/data/profile/reviews.json"
import ProfileReviewItem from "./ProfileReviewItem";

const ProfileReviews = ({reviews=[], isBusinessLogin=false}) => {

    return (
        <>
            {reviews.length === 0 && <div>No review has been left at this time.</div>}

            <ul className="list-group list-group-flush">
                {reviews.map(review => {return (
                    <ProfileReviewItem review={review} isBusinessLogin={isBusinessLogin}/>
                )})}

            </ul>

        </>

    )

}
export default ProfileReviews;