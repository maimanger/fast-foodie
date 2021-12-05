import React from "react";
import "./index.css";
import restaurantDetail from "../../../reducers/data/business_detail/shake_shack.json";
import SearchResultCard from "../SearchResultCard";

const SearchResultComponent = ({location, searchResultList=[]}) => {


    return (
        <div className={"searchscreen-body ms-auto me-auto my-5 w-100"}>

            {/********************  search result path  ************************/}
            {/*<div className={"searchscreen-search-path mb-2 d-flex"}>*/}
            {/*    <div>{searchFilters.city}</div>*/}
            {/*    <span>&nbsp;&nbsp;&nbsp; > &nbsp;&nbsp;&nbsp;</span>*/}
            {/*    <div>{searchFilters.category}</div>*/}
            {/*    {searchFilters.searchItem !=='' && (*/}
            {/*        <>*/}
            {/*            <span>&nbsp;&nbsp;&nbsp; > &nbsp;&nbsp;&nbsp;</span>*/}
            {/*            <div>{searchFilters.searchItem}</div>*/}
            {/*        </>*/}
            {/*    )}*/}
            {/*</div>*/}

            {/********************  search result header  ************************/}
            <h4 className={"fw-bold mb-4 text-nowrap"}>The Best Restaurants in {location}</h4>


            {/********************  search results *******************************/}
            <div className={"searchscreen-search-results"}>
                {searchResultList.map(restaurant => {
                    return (
                        <div className={"mb-4"}>
                            <SearchResultCard restaurantFromSearchApi={restaurant} restaurantFromDetailApi={restaurantDetail}/>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default SearchResultComponent;