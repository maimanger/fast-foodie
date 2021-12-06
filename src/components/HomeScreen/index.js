import React, {useState} from "react";
import "./index.css";
import RecommendationComponent from "./RecommendationComponent";
import CategoryBrowseComponent from "./CategoryBrowseComponent";
import Footer from "./public-components/Footer";
import BannerComponent from "./BannerComponent";
import RecentActivityComponent from "./RecentActivityComponent";
import {placeholderCheckLogin} from "../../services/login-service";

const HomeScreen = () => {
    const profile = placeholderCheckLogin();
    const defaultLocation = profile !== null ? profile.location : "United States";

    const [location, setLocation] = useState(defaultLocation);

    const locationChangeHandler = (newLocation) => {
        setLocation(newLocation);
    }



    return(
        <div className={"bg-white"}>
            <BannerComponent location={location} locationUpdateHandler={locationChangeHandler} profile={profile}/>
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
