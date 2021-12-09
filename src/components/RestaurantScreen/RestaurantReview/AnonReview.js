import React from "react";
import ReviewList from "./ReviewList";
import {Link} from "react-router-dom";

const AnonReview = () => {

  return (
      <div className="row mt-3 mb-3">
        <h3>
          Please <span>
            <Link to="/login">
           Login
              </Link>
          </span> to write a review.
        </h3>

        <ReviewList/>
      </div>
  )
}

export default AnonReview;