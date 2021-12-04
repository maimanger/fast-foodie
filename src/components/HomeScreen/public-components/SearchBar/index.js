import React, {useEffect, useState} from "react";
import "./index.css";
import {searchTermAutoCompletion} from "../../../../services/autoCompletionService";

const SearchBar = () => {

    const [location, setLocation] = useState({city: "Austin", state: "TX"});
    const [locationInput, setLocationInput] = useState("");
    const [searchTerm, setSearchTerm] = useState("");
    const [autoCompletionList, setAutoCompletionList] = useState([]);

    const clickLocationHandler = () => {
        const [city, state] = locationInput.split(",");
        setLocation({city: city.trim(), state: state.trim()});
    }

    const changeLocationHandler = (e) => {
        setLocationInput(e.target.value);
    }

    const changeSearchTermHandler = (e) => {
        setSearchTerm(e.target.value);
    }

    const searchClickHandler = () => {

    }

    useEffect(()=>{
        searchTermAutoCompletion(searchTerm, (res)=>{
            setAutoCompletionList(res);
        })
    },[searchTerm])

    return (

        <div className={"homescreen-search-bar w-100 d-flex"}>
            <div className={"d-flex w-100"}>

                <div className={"d-flex px-0 w-100"}>

                    {/*******************   label   *******************/}

                    <label className={"bg-light px-3 fw-bold d-flex rounded-start align-items-center"}
                           htmlFor={"homescreen-search-bar-restaurant"}>Find</label>

                    {/*******************   search restaurant input   *******************/}

                    <div className={"w-100 position-relative"}>
                        <input type={"text"} className={"homescreen-search-bar-term-input border-0 px-3 w-100 h-100 bg-white dropdown"}
                               id="homescreen-search-bar-restaurant"
                               placeholder={"pizza, healthy, asian..."}
                               value={searchTerm} onChange={changeSearchTermHandler}
                               data-toggle="dropdown" autoComplete="off"/>

                        {/*******************   search auto-completion dropdown   *******************/}

                        {autoCompletionList.length !== 0 && (
                            <div className={"homescreen-search-bar-auto-completion-dropdown w-100 position-absolute bg-white rounded-bottom"}>
                                {autoCompletionList.map(listItem=>{
                                    return (
                                        <div className={"homescreen-search-bar-auto-completion-dropdown-item px-2 py-1"} onClick={searchClickHandler}>
                                            {listItem}
                                        </div>
                                    )})}
                            </div>
                        )}

                    </div>

                </div>

                <div className={"homescreen-search-bar-location w-100 border-start bg-white position-relative"}>

                    {/*******************   location bar   *******************/}
                    <label className={"homescreen-search-bar-location-toggle w-100 h-100 d-flex align-items-center px-3"}
                           htmlFor={"homescreen-search-bar-input"}>
                        <div className={"d-flex w-100"}>
                            <div className={"fw-bold me-2"}>Location</div>
                            <div className={"w-100"}>{location.city}, {location.state}</div>
                            <div><i className="fas fa-chevron-down" /></div>
                        </div>
                    </label>

                    {/*******************   location dropdown   *******************/}
                    <div className={"homescreen-search-bar-location-dropdown position-absolute w-100 p-3 bg-light"}>
                        <div className={""}>
                            <div className={"d-flex"}>
                                <input type="text" placeholder={"City, State"} className={"form-control me-2 border-0"} autoComplete={"off"}
                                       id={"homescreen-search-bar-input"} value={locationInput} onChange={changeLocationHandler}/>
                                <button className={"btn btn-secondary"} onClick={clickLocationHandler}>Update</button>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
            <button type="button" className={"btn btn-primary shadow-none rounded-0 rounded-end"}><i className="fas fa-search mx-3"/></button>



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
