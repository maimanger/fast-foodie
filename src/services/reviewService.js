import {API_URL} from "../CONST";

const COMMENT_API = "http://localhost:8000/api";

export const fetchAllReviewsByRestaurantId = (dispatch, restaurantId) => {

    fetch(`${COMMENT_API}/${restaurantId}/reviews`)
        .then(response => response.json())
        .then(reviews => {
            dispatch({
                type: 'fetch-all-reviews',
                reviews
            })
        })
}

export const fetchAllReviewsByProfile = () => {
    return fetch(`${API_URL}/profileReviews`, {
        method: 'POST',
        credentials: 'include'
    }).then(res => res.json())
}

export const fetchAllReviewsByUserId = (userId) => {
    return fetch(`${API_URL}/profileReviews/${userId}`, {
        method: 'POST',
        credentials: 'include'
    }).then(res => res.json())
}


export const postNewReview = (dispatch, newComment) => {

    fetch(`${COMMENT_API}/reviews`, {
        method: 'POST',
        body: JSON.stringify(newComment),
        headers: {
            'content-type': 'application/json'
        },
        credentials: 'include'
    }).then(response => response.json())
        .then(review => {
            dispatch({
                type: 'update-profile-reviews',
                reviewId: review._id.toString(),
            });
            dispatch({
                type: 'create-review',
                review: review,
            });


        })
}

export const deleteReview = (dispatch, review) => {
    fetch(`${COMMENT_API}/reviews/${review._id}`, {
        method: 'DELETE',
        credentials: 'include'
    }).then(response => {
        dispatch({
            type: 'delete-profile-review',
            reviewId: review._id.toString(),
        })
        dispatch({
            type: 'delete-review',
            review
        });
    })
}

export const updateReview = (dispatch, review) => {
    fetch(`${COMMENT_API}/reviews/${review._id}`, {
        method: 'PUT',
        body: JSON.stringify(review),
        headers: {
            'content-type': 'application/json'
        }
    }).then(response => dispatch({
        type: 'update-review',
        newReview: review,
    }))
}

export const updateReply = (dispatch, review) => {
    fetch(`${COMMENT_API}/reviews/${review._id}/reply`, {
        method: 'PUT',
        body: JSON.stringify(review),
        headers: {
            'content-type': 'application/json'
        }
    }).then(response => dispatch({
        type: 'update-reply',
        newReview: review,
    }))
}