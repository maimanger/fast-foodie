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
import {API_URL} from "../../CONST";
import {Link} from "react-router-dom";
import {checkClaimStatus} from "../../services/claimService";

const CustomerHomeScreen = () => {

    // const user1 = "61b05716bc403e9989444d61";
    // const user2 = "61b05759bc403e9989444d74";


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


    // follow test

    // const clickHandler = () => {
    //     follow(user2, dispatch);
    // }
    //
    // const unFollowHandler = () => {
    //     unfollow(user2, dispatch);
    // }



    // business claim test

    // if (profile !== undefined && Object.keys(profile).length !== 0 && profile['role'] === 'business') {
    //     checkClaimStatus()
    //         .then(res => {
    //             console.log(res);
    //         })
    // }
    return(
        <div className={"bg-white"}>
            {/*<div>*/}
            {/*    <Link to={"/business/claim/search"}><button>claim</button></Link>*/}
            {/*</div>*/}

            <BannerComponent profile={profile} location={location} locationUpdateHandler={locationChangeHandler}/>
            <RecommendationComponent location={location}/>
            <CategoryBrowseComponent location={location}/>
            <div className={"d-flex justify-content-center"}>
                <RecentActivityComponent profile={profile}/>
            </div>

            {/*<div className={"float-end pe-5"}>*/}
            {/*    <button onClick={clickHandler}>*/}
            {/*        {(profile !== undefined && Object.keys(profile).length !== 0 && profile['customerData']['followings'].includes(user2)) ? "unfollow" : "follow"}*/}
            {/*    </button>*/}
            {/*    <button onClick={unFollowHandler}>*/}
            {/*        {(profile !== undefined && Object.keys(profile).length !== 0 && profile['customerData']['followings'].includes(user2)) ? "unfollow" : "follow"}*/}
            {/*    </button>*/}

            {/*</div>*/}

            <Footer />
        </div>
    );
}

export default CustomerHomeScreen;
