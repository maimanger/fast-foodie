import React, {useEffect, useState} from "react";
import "./index.css";
import RecommendationComponent from "./RecommendationComponent";
import CategoryBrowseComponent from "./CategoryBrowseComponent";
import Footer from "./public-components/Footer";
import BannerComponent from "./BannerComponent";
import RecentActivityComponent from "./RecentActivityComponent";
import {useDispatch, useSelector} from "react-redux";
import {fetchProfile, follow, unfollow} from "../../services/profileService";
import isLoggedIn from "./utils/isLoggedIn";
import defaultLocation from "./utils/defaultLocation.json";


const CustomerHomeScreen = () => {



    const dispatch = useDispatch();

    // Get profile
    let profile = useSelector(state=>state.profile);
    useEffect(()=>{
        fetchProfile(dispatch);
    },[])



    // Set default location
    const [location, setLocation] = useState(isLoggedIn(profile) ? profile.location : defaultLocation);


    // Monitor profile change -> set location
    useEffect(() => {
        setLocation(isLoggedIn(profile) ? profile.location : defaultLocation);
    }, [profile]);


    // Update location button behavior
    const locationChangeHandler = (newLocation) => {
        setLocation(newLocation);
    }


    return(
        <div className={"bg-white"}>


            <BannerComponent profile={profile} location={location} locationUpdateHandler={locationChangeHandler}/>
            <RecommendationComponent location={location}/>
            <CategoryBrowseComponent location={location}/>
            <div className={"d-flex justify-content-center"}>
                <RecentActivityComponent profile={profile}/>
            </div>


            <Footer />
        </div>
    );
}

export default CustomerHomeScreen;
