import React, {useEffect, useState} from "react";
import {useSelector, useDispatch} from "react-redux";
import CustomerEditDelete from "./CustomerEditDelete";
import AdminDelete from "./AdminDelete";
import BusinessReply from "./BusinessReply";

const ReviewListItem = ({review}) => {

  const profile = useSelector(state => state.profile);
  const [user, setUser] = useState({})

  let operation;
  switch (profile.role){
    case 'customer':
      operation = <CustomerEditDelete review={review}/>;
      break;
    case 'admin':
      operation = <AdminDelete review={review}/>;
      break;
    case 'business':
      operation = <BusinessReply review={review}/>
      break;
    default:
      operation = '';
      break;
  }

  // const getReviewUser = () => {
  //   fetch(`http://localhost:8000/api/users/${review.user}`)
  //     .then(response => response.json())
  //     .then(user => setUser(user))
  // }
  // useEffect(getReviewUser, [])
  // console.log(user)


    return (
        <li className="list-group-item border-0 p-0 bg-transparent">
            <div className="row border-top p-3">
                <div className="col-4">
                    <div className="d-flex flex-row">
                        <div className="">
                            <img src={review.userInfo.avatar_url} width="56px" height="56px" className="rounded-3"/>
                        </div>
                        <div className="ms-3">
                            <div> {review.userInfo.username} </div>
                            <div> {review.userInfo.location} </div>
                            <div> <i className="fas fa-user-friends"></i> {review.userInfo.friendNum} friends </div>
                            <div> <i className="far fa-star"></i> {review.userInfo.reviewNum} reviews  </div>
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
                    <img src={review.img[0].url} className="card-img-top img-fluid"/>
                    {/*<div*/}
                    {/*    className="card-img-overlay d-flex py-0 px-0 flex-column justify-content-end w-auto h-auto">*/}
                    {/*             <span className="bg-black bg-opacity-50 px-2">*/}
                    {/*             Delicious dinner!*/}
                    {/*             </span>*/}
                    {/*</div>*/}
                </div>

            </div>

              {review.replies[0].text !== '' &&
              <div>
                <div>
                  <br/>
                  <div><span>Reply from the owner on {review.replies[0].time_created.split(' ')[0]}</span></div>
                  {/*<Link className="text-info wd-profile-link-text mx-1"*/}
                  {/*      to={`/profile/${review.user._id}`}>*/}
                  {/*  {profile.firstName} {profile.lastName}*/}
                  {/*</Link>*/}
                  <div className="text-muted fst-italic"><span>&nbsp;&nbsp;&nbsp;&nbsp;</span><span>{review.replies[0].text}</span></div>
                </div>
                {/*<div className="text-muted fst-italic text-nowrap">*/}
                {/*           <span className="d-none d-md-inline">*/}
                {/*           {review.replies[0].time_created.split(' ')[0]}*/}
                {/*           </span>*/}

                {/*</div>*/}
              </div>}

              {operation}

            </div>
            </div>
            </li>)
}

export default ReviewListItem;