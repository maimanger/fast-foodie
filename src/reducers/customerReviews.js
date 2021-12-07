import moment from "moment";

const defaultReview = {user: '',
    restaurant: '',
    time_created: '2020-09-10 12:43:09',
    rating: 5,
    text: '',
    img: [{
  url: '',
  text: 'review_image'
}],
    replies: [{
  user: '',
  text: '',
  time_created: ''
}]
}
const customerReviews = (state = [], action) => {
  switch (action.type) {
    case 'fetch-all-reviews':
      return action.reviews;
    case 'create-review':
      return [action.review, ...state];
    default:
      return state;
  }
}

export default customerReviews;