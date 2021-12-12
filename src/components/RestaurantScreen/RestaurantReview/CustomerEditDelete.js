import React, {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {deleteReview, updateReview} from "../../../services/reviewService";


const CustomerEditDelete = ({review, isEditing, setIsEditing}) => {
  const dispatch = useDispatch();
  const profile = useSelector(state => state.profile);
  const deleteReviewClickHandler = () => {deleteReview(dispatch, review)}
  const [isEdited, setIsEdited] = useState(false);
  const [editedReview, setEditedReview] = useState(review);
  const editReviewClickHandler = () => {
    setIsEditing(false);
    setIsEdited(true);
  }

  const buttons = <div className="mt-3">
                    <span>
                      <button onClick={deleteReviewClickHandler} type="button" className="btn btn-danger float-end">
                        Delete
                      </button>
                    </span>
                    <span >
                      <button onClick={editReviewClickHandler} type="button" className="btn btn-info me-3 float-end">
                          Edit
                      </button>
                    </span>
                  </div>

  const onReviewTextChange = (event) => setEditedReview({...editedReview, text: event.target.value})
  const cancelClickHandler = () => {
    setIsEditing(true);
    setIsEdited(false);
  }
  const saveReview = () => {
    updateReview(dispatch, editedReview);
    setIsEditing(true);
    setIsEdited(false);
  }
  const editInput = <div className="">
    <div className="row mt-4"></div>
    <div className="mt-5">
      <textarea className="form-control" rows="3" style={{resize: "none"}}
                value={editedReview.text} onChange={onReviewTextChange}/>
    </div>
    <div className="mt-3">
      <span><button onClick={ cancelClickHandler } type="button" className="btn btn-secondary float-end">Cancel</button></span>
      <span><button onClick={ saveReview } type="button" className="btn btn-primary me-3 float-end">Save</button></span>
    </div>
  </div>

  return (
      <div>
        {review.user === profile._id + '' && isEditing ? buttons: ''}
        {isEdited === true ? editInput: ''}
      </div>
  )
}

export default CustomerEditDelete;