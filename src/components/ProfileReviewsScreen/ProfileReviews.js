import React, {useEffect} from "react";
import reviews from "../../reducers/data/profile/reviews.json"
import ProfileReviewItem from "./ProfileReviewItem";
import {useDispatch, useSelector} from "react-redux";
import {fetchProfile} from "../../services/profileService";

const ProfileReviews = ({reviews = [], isBusinessLogin = false}) => {

    const dispatch = useDispatch();
    const fetchedProfile = useSelector(state => state.profile);

    if (reviews) {
        return (
            <>
                {reviews.length === 0 && <div>No review has been left at this time.</div>}

                <ul className="list-group list-group-flush">
                    {reviews.map(review => {
                        const isMyRestaurant = isBusinessLogin
                                               && fetchedProfile.businessData.restaurant.id
                                               === review.restaurant;
                        return (
                            <ProfileReviewItem review={review} isMyRestaurant={isMyRestaurant}/>
                        )
                    })}

                </ul>

            </>

        )
    } else {
        return (
            <h1>
                Loading...
            </h1>
        )
    }

}
export default ProfileReviews;