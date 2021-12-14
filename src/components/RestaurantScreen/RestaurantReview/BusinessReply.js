import React, {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import moment from "moment";
import {updateReply} from "../../../services/reviewService";

const BusinessReply = ({review}) => {
  const dispatch = useDispatch();
  const restaurant = useSelector(state => state.restaurant);
  const profile = useSelector(state => state.profile);
  const [isReply, setIsReply] = useState(false);
  const [replyContent, setReplyContent] = useState('');
  const replyClickHandler = () => setIsReply(true);
  const cancelClickHandler = () => setIsReply(false);
  const saveReply = () => {
    review.replies[0] = {text: replyContent, user: profile._id, time_created: moment().format('YYYY-MM-DD HH:mm:ss')}
    updateReply(dispatch, review)
    setIsReply(false)
  }

  const replyButton = <div className="mt-3">
                        <span>
                          <button onClick={replyClickHandler} className="btn btn-success float-end">
                            Reply
                          </button>
                        </span>
                      </div>

  const onReplyChange = (event) => setReplyContent(event.target.value)
  const replyInput = <div className="">
    <div className="row mt-4"></div>
    <div className="mt-5">
      <textarea className="form-control" rows="3" placeholder="Reply to the review ..." style={{resize: "none", overFlow: "hidden"}}
             value={replyContent} onChange={onReplyChange}/>
    </div>
    <div className="mt-3">
      <span><button onClick={ cancelClickHandler } type="button" className="btn btn-secondary float-end">Cancel</button></span>
      <span><button onClick={ saveReply } type="button" className="btn btn-primary me-3 float-end">Save</button></span>
    </div>
  </div>


  return (
      <div>
        {restaurant.id + '' === profile.businessData.restaurant.id ? replyButton: ''}
        {isReply === true? replyInput: ''}
      </div>
  );
}

export default BusinessReply;



