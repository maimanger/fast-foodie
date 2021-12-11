import React, {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import moment from "moment";
import {postNewReview} from "../../../services/reviewService";

const WriteReview = ({profile}) => {
  const restaurant = useSelector(state => state.restaurant)
  const [reviewRating, setReviewRating] = useState(5);
  const [comment, setComment] = useState("");
  const [imageURL, setImageURL] = useState("");
  const dispatch = useDispatch();

  const onRatingClick = (rating) => {
    setReviewRating(rating)
  }

  const submitClickHandler = () => {

    postNewReview(dispatch, {
      user: profile._id + '',
      restaurant: restaurant.id + '',
      time_created: moment().format('YYYY-MM-DD h:mm:ss'),
      location: restaurant.location['city'] + ', '
          + restaurant.location['state'],
      rating: reviewRating,
      text: comment,
      img: [{
        url: imageURL,
        text: 'review_image'
      }],
      userInfo: {
        username: profile.username,
        name: profile.firstName + ' ' + profile.lastName,
        avatar_url: profile.image_url,
        location: profile.location,
        reviewNum: profile.customerData.reviews.length + 1,
        friendNum: profile.customerData.followings.length,
        followersNum: profile.customerData.followers.length
      },
      replies: [{
        user: '',
        text: '',
        time_created: ''
      }],
      restaurantInfo: {
        name: restaurant.name,
        image_url: restaurant.image_url
      }
    })
  }

  return (
      <div className="row mt-3 mb-3">
        <h2 className="p-0">Write a Review</h2>

        <form className="p-0" action="">
          <div>
            <fieldset className="starability-basic">

              <input onClick={() => onRatingClick(1)} type="radio"
                     id="first-rate1" name="rating" value="1"/>
              <label htmlFor="first-rate1" title="Terrible">1 star</label>
              <input onClick={() => onRatingClick(2)} type="radio"
                     id="first-rate2" name="rating" value="2"/>
              <label htmlFor="first-rate2" title="Not good">2 stars</label>
              <input onClick={() => onRatingClick(3)} type="radio"
                     id="first-rate3" name="rating" value="3"/>
              <label htmlFor="first-rate3" title="Average">3 stars</label>
              <input onClick={() => onRatingClick(4)} type="radio"
                     id="first-rate4" name="rating" value="4"/>
              <label htmlFor="first-rate4" title="Very good">4 stars</label>
              <input onClick={() => onRatingClick(5)} type="radio"
                     id="first-rate5" name="rating" value="5"/>
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
                value={comment}
                onChange={event => setComment(event.target.value)}
            ></textarea>

            <div className="h3 mt-3">Add a photo</div>
            <textarea
                className="form-control mt-3"
                name="review"
                id="review"
                placeholder="Image URL ..."
                cols="30"
                rows="1"
                value={imageURL}
                onChange={event => setImageURL(event.target.value)}
            ></textarea>
            <button className="btn btn-primary mt-2" type="button"
                    onClick={submitClickHandler}>Submit
            </button>
          </div>
        </form>
      </div>
  )
}

export default WriteReview;