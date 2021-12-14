import React, {useEffect, useState} from "react";
import {useSelector, useDispatch} from "react-redux";
import CustomerEditDelete from "./CustomerEditDelete";
import AdminDelete from "./AdminDelete";
import BusinessReply from "./BusinessReply";
import {Link} from "react-router-dom";
import "../../ProfileScreen/Profile.css"
import ReviewStars from "../../ProfileScreen/stars/ReviewStars";
import moment from "moment";
import {textTruncate} from "../../CustomerHomeScreen/utils/truncate";

const ReviewListItem = ({review}) => {

    const profile = useSelector(state => state.profile);
    let isLogin = profile._id && true;

    const [user, setUser] = useState({})
    const[isEditing, setIsEditing] = useState("false");

    let operation;
    switch (profile.role) {
        case 'customer':
            operation = <CustomerEditDelete review={review} isEditing={isEditing} setIsEditing={setIsEditing}/>;
            break;
        case 'admin':
            operation = <AdminDelete review={review}/>;
            break;
        case 'business':
            operation = <BusinessReply review={review} isEditing={isEditing} setIsEditing={setIsEditing}/>
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

    const isMe = review.user === profile._id;
    const reviewCount = isMe ? profile['customerData']['reviews'].length : review.userInfo.reviewNum;
    return (
        <li className="list-group-item border-0 p-0 bg-transparent" id={review._id}>
            <div className="row border-top p-3">
                <div className="col-12 col-md-5 col-xl-4">
                    <Link to={isLogin && review.user === profile._id.toString() ? '/profile' : `/profile/${review.user}`}
                          className="wd-profile-content-hover text-black ms-3 d-flex flex-row">

                        <div className="">
                            <img src={review.userInfo.avatar_url}
                                 className="rounded-3"
                                 style={{width: 70, height: 70, objectFit: "cover"}}/>
                        </div>

                        <div className="ms-3">
                            <div
                                className="fw-bold text-info text-nowrap"> {textTruncate(review.userInfo.name, 23)}</div>
                            <div className="text-black mb-1"> {review.userInfo.location} </div>
                            <div className="d-flex flex-nowrap align-items-center">
                                <i className="fas fa-user-friends pe-1 me-2 text-opacity-75 text-primary"></i>
                                <span className="text-nowrap">
                                    {review.userInfo.followerNum} <span
                      className="d-none d-sm-inline">followers
                                    </span>
                                </span>

                            </div>
                            <div className="d-flex flex-nowrap align-items-center">
                                <i className="fas fa-comment me-3 text-opacity-75 text-primary"></i>
                                <span className="text-nowrap">
                                    {reviewCount} <span
                      className="d-none d-sm-inline">reviews
                                    </span>
                                </span>
                </div>
              </div>
            </Link>
          </div>



                {/************************Review Stars**************************/}
                <div className="col-xl-8">
                    <div className="row d-flex align-items-center"
                         style={{fontSize: "18px"}}>
                        <ReviewStars review={review}/>

              {/*                        <span className="col-3 starability-result"
                              data-rating={review.rating}></span>*/}

              {/*                        <span className="col-4 text-muted ms-2 mt-1">{review.time_created.split(
                            ' ')[0]}</span>*/}

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

                        <p className="mb-2 text-opacity-75 text-black"
                           style={{"overflow-wrap": "break-word", "white-space": "pre-line"}}>
                            {review.text}
                        </p>


                    {/************************Review Img**************************/}
                    <div className="d-lg-flex gap-3 col-7 col-sm-6 col-md-5 col-lg-8 col-xl-7">
                        {review.img?.map(i => {
                            return (<>
                                {i && i.url !== "" &&
                                 <div className="card text-white h-100">
                                     <img src={i.url} style={{maxHeight: "350px"}}
                                          className="card-img-top img-fluid"/>
                                     {i.text && <div
                                         className="card-img-overlay d-flex py-0 px-0 flex-column justify-content-end">
                             <span className="bg-black bg-opacity-50 px-2">
                             {i.text}
                             </span>
                    </div>}
                  </div>}
                </>)
              })}

            </div>

            {review.replies.length !== 0 && review.replies[0].text !== "" &&
            <div className="text-black opacity-75 mt-3 ms-5 p-3 border-start border-4">
              <div>
                <div>
                  <div className="mb-2" style={{fontSize: "17px"}}>
                    <span className="fw-bold">Reply from the owner </span>
                    <div className="text-black-50">{moment(
                        review.replies[0].time_created)
                    .format("L")}</div>
                  </div>
                </div>
                {/*<Link className="text-info wd-profile-link-text mx-1"*/}
                {/*      to={`/profile/${review.user._id}`}>*/}
                {/*  {profile.firstName} {profile.lastName}*/}
                {/*</Link>*/}
                <div className="fst-italic"
                     style={{"overflow-wrap": "break-word", "white-space": "pre-line"}}>
                  <span>{review.replies[0].text}</span>
                </div>
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