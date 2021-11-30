import React from "react";
import shake from "./shake_shack.json";
import ReviewList from "./ReviewList";



const RestaurantReview = () => {
  return (
    <div className="row mt-3 mb-3">
      <h2 className="p-0">Write a Review</h2>
      <form className="p-0" action="">
        <div>
          <fieldset className="starability-basic">
          
          <input type="radio" id="first-rate1" name="rating" value="1" />
          <label htmlFor="first-rate1" title="Terrible">1 star</label>
          <input type="radio" id="first-rate2" name="rating" value="2" />
          <label htmlFor="first-rate2" title="Not good">2 stars</label>
          <input type="radio" id="first-rate3" name="rating" value="3" />
          <label htmlFor="first-rate3" title="Average">3 stars</label>
          <input type="radio" id="first-rate4" name="rating" value="4" />
          <label htmlFor="first-rate4" title="Very good">4 stars</label>
          <input type="radio" id="first-rate5" name="rating" value="5" />
          <label htmlFor="first-rate5" title="Amazing">5 stars</label>
        </fieldset>

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
