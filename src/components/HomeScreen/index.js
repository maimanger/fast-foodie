import React, {useState} from "react";
import "./index.css";
import RecommendationComponent from "./RecommendationComponent";
import CategoryBrowseComponent from "./CategoryBrowseComponent";
import Footer from "./public-components/Footer";
import BannerComponent from "./BannerComponent";
import RecentActivityComponent from "./RecentActivityComponent";

const HomeScreen = () => {
    // const profile = {name: "Qiansha Meng"};
    const profile = null;
    const [location, setLocation] = useState("Seattle, WA");

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
