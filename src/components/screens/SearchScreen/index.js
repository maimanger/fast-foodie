import React from "react";
import SearchHeader from "./SearchHeader";
import SearchResultComponent from "./SearchResultComponent";
import FiltersComponent from "./FiltersComponent";
import Footer from "../../public_components/Footer";

const SearchScreen = () => {
    return (
        <div>
            <SearchHeader />
            <div className={"row p-5"}>
                <div className={"col-xxl-2 d-none d-xxl-inline"}>
                    <FiltersComponent />
                </div>
                <div className={"col-xxl-7 col-9"}>
                    <SearchResultComponent />
                </div>
                <div className={"col-xxl-3 d-none d-xxl-inline "}>
                    <img src="./assets/google_map.png" alt="#" className={"google-img"}/>
                </div>
            </div>
            <Footer />
        </div>

    )
}

export default SearchScreen;