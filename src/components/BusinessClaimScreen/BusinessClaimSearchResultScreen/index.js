import React, {useEffect, useState} from "react";
import {Link, useLocation} from "react-router-dom";
import {matchRestaurant} from "../../../services/searchService";
import BusinessClaimSearchNoResultComponent from "../BusinessClaimSearchNoResultComponent";
import {useDispatch, useSelector} from "react-redux";
import {claimBusiness} from "../../../services/claimService";
import {useHistory} from "react-router-dom";
import {fetchProfile} from "../../../services/profileService";
import moment from "moment";


const BusinessClaimSearchResultScreen = () => {

    // Get profile
    const dispatch = useDispatch();
    const profile = useSelector(state => state.profile);
    useEffect(() => {
        fetchProfile(dispatch)
    }, [])


    // Get queries
    const useQuery = () => {
        return new URLSearchParams(useLocation().search);
    }
    let query = useQuery();
    const [matchResult, setMatchResult] = useState(undefined);


    // Init queries and search
    let history = useHistory();
    useEffect(() => {
        const queries = {};
        query.forEach((value, key) => {
            queries[key] = value;
        });

        // Fetch match result
        matchRestaurant(queries)
            .then(res => {
                setMatchResult(res)
            })
            .catch(e => {
                setMatchResult({})
            })
    }, []);


    // Claim click handler
    const claimHandler = () => {
        const params = {
            user: profile._id,
            restaurant: matchResult.id,
            time_created: moment().format('YYYY-MM-DD HH:mm:ss'),
            file_url: profile['businessData']['file_url'],
            restaurantName: matchResult.name,
            userName: profile.lastName + ' ' + profile.firstName
        }
        claimBusiness(params)
            .then(res => {
                history.push("/business/claim/status");
            })
    }


    const restaurant = {
        "_id": "Rv4NgRl-wkMNPNdqXNSGBg",
        "alias": "shake-shack-brooklyn-12",
        "name": "Shake Shack",
        "coordinates": {
            "latitude": 40.7030601700019,
            "longitude": -73.994004
        },
        "location": {
            "address1": "1 Old Fulton St",
            "address2": "",
            "address3": "",
            "city": "Brooklyn",
            "zip_code": "11201",
            "country": "US",
            "state": "NY",
            "display_address": [
                "1 Old Fulton St",
                "Brooklyn, NY 11201"
            ]
        },
        "phone": "+13474352676",
        "display_phone": "(347) 435-2676"
    }

    // Get a restaurant match
    if (matchResult !== undefined && Object.keys(matchResult).length !== 0) {
        return (
            <div className={"mt-5 pt-5"}>
                <h4 className={"fw-bold mb-5 text-center"}>Confirm Your Business</h4>

                {/**************  Search result  ***************/}
                <div>Business Name: &nbsp;{matchResult.name}</div>
                <div className={"mb-5"}>
                    Business Address: &nbsp;{matchResult.location.display_address}
                </div>

                <div className={"d-flex justify-content-between"}>
                    <Link to={'/business/claim/search'}><button className={"btn btn-light"}>Back</button></Link>
                    <button className={"btn btn-primary"} onClick={claimHandler}>Continue</button>
                </div>
            </div>
        )
    }

    // Fail to get restaurant match
    else if (matchResult !== undefined) {
        return (
            <BusinessClaimSearchNoResultComponent />
        )
    } else {
        return <></>
    }
}

export default BusinessClaimSearchResultScreen;