import React, {useEffect, useState} from "react";
import './index.css';
import SearchHeader from "./public_components/SearchHeader";
import SearchResultComponent from "./SearchResultComponent";
import Footer from "../HomeScreen/public-components/Footer";
import BrandName from "../HomeScreen/public-components/BrandName";
import {searchRestaurants} from "../../services/searchService";
import {useHistory, useLocation} from "react-router-dom";
import {concatQueries} from "../../utils/url";

const SearchScreen = () => {
    const history = useHistory();


    // get query string from router url
    function useQuery() {
        return new URLSearchParams(useHistory().location.search);
    }

    let query = useQuery();
    let defaultParams = {};

    query.forEach((value,key)=> {
        defaultParams[key] = value;
    });

    const [params, setParams] = useState(defaultParams)
    const [searchResult, setSearchResult] = useState([]);

    useEffect(()=>{
        searchRestaurants(params)
            .then(restaurants => {
                setSearchResult(restaurants)
            })
    }, [params]);

    if (Object.keys(defaultParams).length===0) {
        defaultParams = {location: "United States"};
        history.push(`search?${concatQueries(defaultParams)}`);
        setParams(defaultParams)
    }

    const clickHandler = (newParams) => {
        history.push(`search?${concatQueries(newParams)}`);
        setParams(newParams)
    }


    return (
        <div className={"bg-white"}>
            <SearchHeader loggedIn={false} params={params} clickFunction={clickHandler}/>
            <div className={"searchscreen-body-container d-flex"}>
                <SearchResultComponent location={params.location} searchResultList={searchResult}/>
            </div>
            <Footer />
        </div>

    )
}

export default SearchScreen;