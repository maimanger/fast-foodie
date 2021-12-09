import React, {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {deleteReview, updateReview} from "../../../services/reviewService";
import restaurant from "../../../reducers/restaurant";

const ReviewListItem = ({review}) => {
  const dispatch = useDispatch();
  const profile = useSelector(state => state.profile);
  const deleteReviewClickHandler = () => {deleteReview(dispatch, review)}
  const [isEdited, setIsEdited] = useState(false);
  const [editedReview, setEditedReview] = useState(review);
  const editReviewClickHandler = () => setIsEdited(true);

  const buttons = <div className="mt-3">
                    <span>
                      <button onClick={deleteReviewClickHandler} className="btn btn-danger float-end">
                        Delete
                      </button>
                    </span>
                    <span >
                      <button onClick={editReviewClickHandler} className="btn btn-info me-3 float-end">
                          Edit
                      </button>
                    </span>
                  </div>

  const onReviewTextChange = (event) => setEditedReview({...editedReview, text: event.target.value})
  const cancelClickHandler = () => setIsEdited(false);
  const saveReview = () => {
    updateReview(dispatch, editedReview);
    setIsEdited(false)
  }
  const editInput = <div className="">
    <div className="row mt-4"></div>
    <div className="mt-5">
    <input className="form-control" value={editedReview.text} onChange={onReviewTextChange}/>
    </div>
    <div className="mt-3">
      <span><button onClick={ cancelClickHandler } className="btn btn-secondary float-end">Cancel</button></span>
      <span><button onClick={ saveReview } className="btn btn-primary me-3 float-end">Save</button></span>
    </div>
  </div>



    return (
        <li className="list-group-item border-0 p-0">
            <div className="row border-top p-3">
                <div className="col-4">
                    <div className="d-flex flex-row">
            
                        <div className="">
                            <img src={review.user.image_url} width="56px" height="56px" className="rounded-3"/>
                        </div>
                        <div className="ms-3"> 
                            <div> {review.user.name} </div>
                            <div> Bridgeport, Chicago, IL </div>
                            <div> <i className="fas fa-user-friends"></i> 56 friends </div>
                            <div> <i className="far fa-star"></i> 56 reviews </div>
                        </div>
            
                    </div>
                </div>
            {/************************Review Stars**************************/}
            <div className="col-8">
                <div className="row ms-1 d-flex align-items-center">
                    <span className="col-3 starability-result" data-rating={review.rating}></span>
                    <span className="col-4 text-muted ms-2 mt-1">{review.time_created.split(' ')[0] }</span>
                    {/*<span className="col-5 dropdown">*/}
                    
                    {/*    <i className="fas fa-ellipsis-h float-end" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">*/}
                    {/*        */}
                    {/*    </i>*/}
                    {/*    <div className="dropdown-menu" aria-labelledby="dropdownMenu2">*/}
                    {/*        <button className="dropdown-item" type="button">Send message</button>*/}
                    {/*        <button className="dropdown-item" type="button">Follow {review.user.name}</button>*/}
                    {/*        <button className="dropdown-item" type="button">Report review</button>*/}
                    {/*    </div>*/}
                    {/*    */}
                    {/*</span>*/}
                </div>

            {/************************Review Text**************************/}
            <div className="row">
                <p className="py-2 m-0">
                    {review.text}
                </p>
            </div>
            {/************************Review Img**************************/}
            <div className="d-lg-flex gap-3 col-8 col-sm-7 col-md-6 col-lg-10 col-xl-8">
                <div className="card text-white">
                    <img src="/images/ProfilePage/review.jpg" className="card-img-top img-fluid"/>
                    <div
                        className="card-img-overlay d-flex py-0 px-0 flex-column justify-content-end w-auto h-auto">
                                 <span className="bg-black bg-opacity-50 px-2">
                                 Delicious dinner!
                                 </span>
                    </div>
                </div>
                <div className="card text-white">
                    <img src="/images/ProfilePage/review.jpg" className="card-img-top img-fluid"/>
                    <div
                        className="card-img-overlay d-flex px-0 py-0 flex-column justify-content-end w-auto h-auto">
                                     <span className="bg-black bg-opacity-50 px-2">
                                         Delicious dinner!
                                     </span>
                    </div>
                </div>
            </div>
              {review.user === profile._id + ''? buttons: ''}

              {isEdited === true ? editInput: ''}

            </div>
            </div>
            </li>)
}

export default ReviewListItem;