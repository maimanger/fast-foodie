import React from "react";
import ReviewList from "./ReviewList";

// import YelpReviewList from "./YelpReviewList";
import WriteReview from "./WriteReview";

const CustomerReview = ({profile}) => {

  return (
      <div>
        { profile.role === 'customer'? <WriteReview profile={profile}/> : ''}
        <ReviewList/>
        {/*<YelpReviewList/>*/}
      </div>
  )
}


export default CustomerReview;
