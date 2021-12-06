import React, {useState} from "react";
import ReviewList from "./ReviewList";



const RestaurantReview = () => {
  const [reviewRating, setReviewRating] = useState(5);

  const onRatingClick = (rating) => {
    setReviewRating(rating)
  }


  return (
    <div className="row mt-3 mb-3">
      <h2 className="p-0">Write a Review</h2>
      <form className="p-0" action="">
        <div>
          <fieldset className="starability-basic">
          
          <input onClick={() => onRatingClick(1)} type="radio" id="first-rate1" name="rating" value="1" />
          <label htmlFor="first-rate1" title="Terrible">1 star</label>
          <input onClick={() => onRatingClick(2)} type="radio" id="first-rate2" name="rating" value="2" />
          <label htmlFor="first-rate2" title="Not good">2 stars</label>
          <input onClick={() => onRatingClick(3)} type="radio" id="first-rate3" name="rating" value="3" />
          <label htmlFor="first-rate3" title="Average">3 stars</label>
          <input onClick={() => onRatingClick(4)} type="radio" id="first-rate4" name="rating" value="4" />
          <label htmlFor="first-rate4" title="Very good">4 stars</label>
          <input onClick={() => onRatingClick(5)} type="radio" id="first-rate5" name="rating" value="5" />
          <label htmlFor="first-rate5" title="Amazing">5 stars</label>
        </fieldset>
        {console.log(reviewRating)}
          {/* <label className="form-label" htmlFor="review">
            Review text
          </label> */}
          <textarea
            className="form-control"
            name="review"
            id="review"
            placeholder="Write a review ..."
            cols="30"
            rows="3"
          ></textarea>

          <div className="h3 mt-3">Add a photo</div>
          <textarea
            className="form-control mt-3"
            name="review"
            id="review"
            placeholder="Image URL ..."
            cols="30"
            rows="1"
          ></textarea>
          <button className="btn btn-primary mt-2">Submit</button>
        </div>
      </form>

      <ReviewList />
    </div>
  );
};

export default RestaurantReview;
