import React from "react";
import {yelpReviews} from "../RestaurantParts/yelpReviews.json";
import YelpReviewListItem from "./YelpReviewListItem";

const YelpReviewList = () => {

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