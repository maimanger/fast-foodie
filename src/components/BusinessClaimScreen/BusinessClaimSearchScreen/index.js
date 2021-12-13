import React, {useEffect, useState} from "react";
import './index.css';
import {useDispatch, useSelector} from "react-redux";
import {fetchProfile} from "../../../services/profileService";
import {useHistory} from "react-router-dom";
import {concatQueries} from "../../CustomerHomeScreen/utils/url";

const BusinessClaimSearchScreen = () => {

    // Get profile
    const dispatch = useDispatch();
    const profile = useSelector(state => state.profile);
    useEffect(() => {
        fetchProfile(dispatch);
    }, [])


    const [name, setName] = useState("Happy Lamb Hot Pot");
    const [address1, setAddress1] = useState("609 S Weller St");
    const [address2, setAddress2] = useState("");
    const [city, setCity] = useState("Seattle");
    const [state, setState] = useState("WA");
    const [zipCode, setZipCode] = useState("");

    const changeNameHandler = (e) => {
        setName(e.target.value);
    }

    const changeAddress1Handler = (e) => {
        setAddress1(e.target.value);
    }

    const changeAddress2Handler = (e) => {
        setAddress2(e.target.value);
    }

    const changeCityHandler = (e) => {
        setCity(e.target.value);
    }

    const changeStateHandler = (e) => {
        setState(e.target.value);
    }

    const changeZipCodeHandler = (e) => {
        setZipCode(e.target.value);
    }

    let history = useHistory();
    const submitClickHandler = (e) => {
        if (name==='' || address1==='' || city==='' || state===''){
            return;
        }
        const queries = {
            name,
            address1,
            address2,
            city,
            state
        }

        history.push(`/business/claim/search_result?${concatQueries(queries)}`);
    }
    return (

        <form>


            <img src="https://business.yelp.com/wp-content/uploads/sites/2/2020/10/ILL_Visitors_768x512_2x-768x512.png"
                 alt="img" className={"businessclaimscreen-title-img mb-3"}/>
            <h4 className={"fw-bold text-center mb-5"}>Let's look up your business</h4>

            {/****************  Business Name  ***************/}
            <div className={"mb-3"}>
                <label className={"fw-bold form-label"} htmlFor={"businessclaimscreen-business-name"}>
                    Business Name<span className={"text-danger"}>*</span>
                </label>
                <input type="text" placeholder={"Bisiness name"} className={"form-control"}
                       id={"businessclaimscreen-business-name"} value={name} onChange={changeNameHandler} required/>
            </div>

            {/****************  Address 1  ***************/}
            <div className={"mb-3"}>
                <label className={"fw-bold form-label"} htmlFor={"businessclaimscreen-address1"}>
                    Address Line1<span className={"text-danger"}>*</span>
                </label>
                <input type="text" placeholder={"Street address"} className={"form-control"}
                       id={"businessclaimscreen-address1"} value={address1} onChange={changeAddress1Handler}
                       required/>
            </div>

            {/****************  Address 2  ***************/}
            <div className={"mb-3"}>
                <label className={"fw-bold form-label"} htmlFor={"businessclaimscreen-address2"}>
                    Address Line2
                </label>
                <input type="text" placeholder={"Unit, building, floor, etc."} className={"form-control"}
                       id={"businessclaimscreen-address2"} value={address2} onChange={changeAddress2Handler}/>
            </div>

            {/****************  City, State  ***************/}
            <div className={"d-flex mb-3"}>
                <div className={"me-3"}>
                    <label className={"fw-bold form-label"} htmlFor={"businessclaimscreen-city"}>
                        City<span className={"text-danger"}>*</span>
                    </label>
                    <input type="text" placeholder={"City name"} className={"form-control"}
                           id={"businessclaimscreen-city"} value={city} onChange={changeCityHandler} required/>
                </div>

                <div className={""}>
                    <label className={"fw-bold form-label"} htmlFor={"businessclaimscreen-state"}>
                        State<span className={"text-danger"}>*</span>
                    </label>
                    <input type="text" placeholder={"State name"} className={"form-control"}
                           id={"businessclaimscreen-state"} value={state} onChange={changeStateHandler} required/>
                </div>
            </div>

            {/****************  Zip code  ***************/}
            <div className={"mb-5"}>
                <label className={"fw-bold form-label"} htmlFor={"businessclaimscreen-zip-code"}>
                    Zip Code
                </label>
                <input type="text" placeholder={"12345"} className={"form-control"}
                       id={"businessclaimscreen-zip-code"} value={zipCode} onChange={changeZipCodeHandler}/>
            </div>

            <div className={"d-flex justify-content-center mb-5"} >
                <button type="submit" className={"btn btn-primary"} onClick={submitClickHandler}>Continue</button>
            </div>

        </form>
    )
}

export default BusinessClaimSearchScreen;