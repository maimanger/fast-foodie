import React from "react";
import "./index.css";
import RecommendationComponent from "./RecommendationComponent";
import CategoryBrowseComponent from "./CategoryBrowseComponent";
import Footer from "./public-components/Footer";
import BannerCompoenent from "./BannerComponent";
import RecentActivityComponent from "./RecentActivityComponent";

const HomeScreen = () => {

    return(
        <div className={"bg-white"}>
            <BannerCompoenent />
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
