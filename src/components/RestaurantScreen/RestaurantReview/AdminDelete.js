import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {deleteReview} from "../../../services/reviewService";

const AdminDelete = ({review}) => {
  const dispatch = useDispatch();
  const deleteReviewClickHandler = () => {deleteReview(dispatch, review)}

  return (
          <div className="mt-3">
            <span>
              <button onClick={deleteReviewClickHandler} className="btn btn-danger float-end">
                Delete
              </button>
            </span>
          </div>

  );

}

export default AdminDelete;