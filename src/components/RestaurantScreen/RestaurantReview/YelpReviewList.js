import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {yelpReviews} from "../RestaurantParts/yelpReviews.json";
import YelpReviewListItem from "./ReviewListItem";

const YelpReviewList = () => {
  // const restaurant = useSelector(state => state.restaurant);
  // const customerReviews = useSelector(state => state.customerReviews)
  // const dispatch = useDispatch();
  // useEffect(() => fetchAllReviewsByRestaurantId(dispatch, restaurant.id), []);



  return (
      <div>
        <ul className="list-group mt-3">
            {
                yelpReviews.map(review => <YelpReviewListItem key={review.id} review={review} />)
            }

        </ul>

      </div>
  )

}

export default YelpReviewList;