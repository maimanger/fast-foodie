import React, {useEffect, useState} from "react";
import "./index.css";
import {searchTermAutoCompletion} from "../../../services/autoCompletionService";
import {searchRestaurants} from "../../../services/searchService";
import {concatQueries} from "../utils/url";
import {Link} from "react-router-dom";
import {useSelector} from "react-redux";
import isLoggedIn from "../utils/isLoggedIn";

const SearchBar = ({
                       location,
                       locationUpdateHandler,
}) => {

    const profile = useSelector(state=>state.profile);
    const [locationInput, setLocationInput] = useState('');
    const [searchTerm, setSearchTerm] = useState("");
    const [autoCompletionList, setAutoCompletionList] = useState([]);


    // Search term input handler
    const changeSearchTermHandler = (e) => {
        setSearchTerm(e.target.value);
    }


    // Change location input handler
    const changeLocationInputHandler = (e) => {
        setLocationInput(e.target.value);
    }


    // Auto-completion handler
    const autoCompletionHandler = (e) => {
        setSearchTerm(e.target.innerText);
    }
    useEffect(()=>{
        searchTermAutoCompletion(searchTerm, (res)=>{
            setAutoCompletionList(res);
        })
    },[searchTerm])



    // Use profile handler
    const useProfileLocationHandler = () => {
        locationUpdateHandler(profile.location);
    }

    return (

        <div className={"homescreen-search-bar w-100 d-flex"}>
            <div className={"d-flex w-100"}>

                <div className={"homescreen-search-bar-left-part d-flex px-0 w-100"}>

                    {/*******************   label   *******************/}

                    <label className={"bg-light px-3 fw-bold d-flex rounded-start align-items-center"}
                           htmlFor={"homescreen-search-bar-restaurant"}>Find</label>

                    {/*******************   search restaurant input   *******************/}

                    <div className={"w-100 position-relative dropdown"}>
                        <input type={"text"} className={"homescreen-search-bar-term-input border-0 px-3 w-100 h-100 bg-white"}
                               id="homescreen-search-bar-restaurant"
                               placeholder={"pizza, healthy, asian..."}
                               value={searchTerm} onChange={changeSearchTermHandler}
                               data-toggle="dropdown" autoComplete="off"/>

                        {/*******************   search auto-completion dropdown   *******************/}

                        <div className={"homescreen-search-bar-auto-completion-dropdown dropdown-menu w-100 position-absolute bg-white rounded-0 homescreen-h-fit p-0 border-0 outline-0 shadow-none"}>
                            {autoCompletionList.map(listItem=>{
                                return (
                                    <div className={"homescreen-search-bar-auto-completion-dropdown-item dropdown-item px-3 py-1"}
                                         onClick={autoCompletionHandler}>
                                        {listItem}
                                    </div>
                                )})}
                        </div>
                    </div>
                </div>

                <div className={"homescreen-search-bar-location w-100 border-start bg-white position-relative d-none d-md-flex"}>

                    {/*******************   location bar   *******************/}
                    <label className={"homescreen-search-bar-location-toggle w-100 h-100 align-items-center px-3 d-flex"}
                           htmlFor={"homescreen-search-bar-input"}>
                        <div className={"d-flex w-100"}>
                            <div className={"fw-bold me-2"}>Location</div>
                            <div className={"w-100 text-nowrap"}>{location}</div>
                            <div><i className="fas fa-chevron-down" /></div>
                        </div>
                    </label>

                    {/*******************   location dropdown   *******************/}
                    <div className={"homescreen-search-bar-location-dropdown position-absolute w-100 p-3 bg-light"}>
                        <div className={""}>
                            <div className={"d-flex mb-2"}>
                                <input type="text" placeholder={"City, State"} className={"form-control me-2 border-0"} autoComplete={"off"}
                                       id={"homescreen-search-bar-input"} value={locationInput} onChange={changeLocationInputHandler}/>
                                <button className={"btn btn-secondary"} onClick={()=>locationUpdateHandler(locationInput)}>Update</button>
                            </div>
                            {isLoggedIn(profile) && <div className={"homescreen-searchbar-use-profile-location text-info"} onClick={useProfileLocationHandler}>Use my profile location</div>}
                        </div>
                    </div>
                </div>
            </div>

            {/*******************   Search button   *******************/}
            <Link to={`/search?${concatQueries({location:location, term: searchTerm})}`} className={"h-100"}>
                <button type="button" className={"btn btn-primary shadow-none rounded-0 rounded-end h-100"}>
                    <i className="fas fa-search mx-3"/>
                </button>
            </Link>




            {/*<label className={"input-group-text fw-bold"}*/}
            {/*       htmlFor={"homescreen-app-search-bar-restaurant"}>Find</label>*/}
            {/*<input type={"text"} className={"form-control"}*/}
            {/*       id="homescreen-app-search-bar-restaurant"*/}
            {/*       placeholder={"pizza, healthy, asian..."}/>*/}
            {/*<label className={"input-group-text fw-bold d-none d-lg-inline-flex"}*/}
            {/*       htmlFor={"homescreen-app-search-bar-location"}>Near</label>*/}
            {/*<input type={"text"} className={"form-control d-none d-lg-inline"}*/}
            {/*       id={"homescreen-app-search-bar-location"}*/}
            {/*       placeholder={"City, State"}/>*/}
            {/*<button type="button" className={"btn btn-primary shadow-none"}><i className="fas fa-search mx-3"/></button>*/}
        </div>
    )
}

export default SearchBar;
