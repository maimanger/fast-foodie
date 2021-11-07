import React from "react";
import "./index.css";
import NavHeader from "./public_components/NavHeader";
import Search from "./Search";
import LocationsExplore from "./LocationsExplore";
import CategoriesExplore from "./CategoriesExplore";
import Footer from "./public_components/Footer";

const HomeScreen = () => {

    return(
        <>
            <NavHeader />
            <Search />
            <LocationsExplore />
            <CategoriesExplore />
            <Footer />
        </>
    );
}

export default HomeScreen;
