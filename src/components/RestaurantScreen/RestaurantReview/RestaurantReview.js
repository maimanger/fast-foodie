import React, {useEffect, useState} from "react";
import {useHistory} from "react-router-dom";
import {useSelector, useDispatch} from "react-redux";
import { fetchProfile } from "../../../services/profileService";
import ReviewList from "./ReviewList";
import CustomerReview from "./CustomerReview";
import AnonReview from "./AnonReview";



const RestaurantReview = () => {

  const history = useHistory();
  const dispatch = useDispatch();
  // If no profile fetched (unlogin), go to login page
  const getProfile = () => {
      fetchProfile(dispatch).catch(e => console.log(e))
          // .catch(e => history.push('/login'))
  }
  useEffect(getProfile, [history])

  /*    const profile = users[0];*/
  /**********************************Get the login profile data******************************/
      // Set up a sample profile to avoid undefined type error
  let profile = {
          "role": "",
          "username": "",
          "password": "",
          "email": "",
          "firstName": "",
          "lastName": "",
          "image_url": "",
          "location": "",
          "birthday": "",
          "dateJoined": "",
          "customerData": {
              "reviews": [],
              "followings": [],
              "followers": [],
              "bookmarks": [],
              "visibility": {
                  "location": true,
                  "birthday": true,
                  "bookmarks": true
              }
          },
          "businessData": {
              "verified": false,
              "restaurantId": ""
          }
      }
  let fetchedProfile = useSelector(state => state.profile);
  profile = {...profile, ...fetchedProfile};

  const [edit, setEdit] = useState(false);

  if (profile !== undefined && profile.role !== '') {
    return <CustomerReview profile={profile}/>
  } else {
    return <AnonReview/>
  }

};

export default RestaurantReview;
