import React, {useEffect, useState} from "react";
import "./index.css";
import RecommendationComponent from "./RecommendationComponent";
import CategoryBrowseComponent from "./CategoryBrowseComponent";
import Footer from "./public-components/Footer";
import BannerComponent from "./BannerComponent";
import RecentActivityComponent from "./RecentActivityComponent";
import {placeholderCheckLogin} from "../../services/login-service";
import {useDispatch, useSelector} from "react-redux";
import {fetchProfile} from "../../services/profileService";
import isLoggedIn from "./utils/isLoggedIn";
import defaultLocation from "./utils/defaultLocation.json";
import {API_URL} from "../../CONST";

const HomeScreen = () => {
    const dispatch = useDispatch();

    // Get profile
    let profile = useSelector(state=>state.profile);
    console.log(profile);
    useEffect(()=>{
        console.log("hahahah")
        fetchProfile(dispatch);
    },[])



    // const [loginStatus, setLoginStatus] = useState(isLoggedIn(profile));



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

    // const use

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

export default HomeScreen;
