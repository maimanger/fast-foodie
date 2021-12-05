import React, {useState} from "react";
import "./index.css";
import RecommendationComponent from "./RecommendationComponent";
import CategoryBrowseComponent from "./CategoryBrowseComponent";
import Footer from "./public-components/Footer";
import BannerComponent from "./BannerComponent";
import RecentActivityComponent from "./RecentActivityComponent";

const HomeScreen = () => {


    return(
        <div className={"bg-white"}>
            <BannerComponent />
            <RecommendationComponent />
            <CategoryBrowseComponent />
            <div className={"d-flex justify-content-center"}>
                <RecentActivityComponent />
            </div>
            <Footer />
        </div>
    );
}

export default HomeScreen;
