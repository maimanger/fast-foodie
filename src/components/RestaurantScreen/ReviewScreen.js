import RestaurantImage from "./RestaurantParts/RestaurantImage";
import RestaurantNav from "./RestaurantParts/RestaurantNav";
import RestaurantReview from "./RestaurantReview/RestaurantReview";
import SearchHeader from "../headers/SearchHeader";
import {useDispatch, useSelector} from "react-redux";
import SimpleHeader from "../headers/SimpleHeader";
import React, {useEffect} from "react";
import {fetchProfile} from "../../services/profileService";
import SimpleFooter from "../footers/SimpleFooter";


const ReviewScreen = () => {
    const dispatch = useDispatch();
    const getProfile = () => {
        fetchProfile(dispatch)
            .catch(e => console.log(e))
    }
    useEffect(getProfile, [])

    const profile = useSelector(state => state.profile);
    return (
        <div className={"app-window-container"}>
            <div className={"min-vh-100"}>
                {(profile && Object.keys(profile).length !== 0 && (profile.role === 'business' || profile.role === 'admin')) ?
                    <SimpleHeader/> : <SearchHeader/>}
                <RestaurantImage/>
                <div className="container-fluid container-lg px-lg-5">
                    <div className="row mt-3">
                        <div className="col-1"></div>
                        <div className="col-10">


                            <RestaurantNav active={'review'}/>

                            <RestaurantReview/>
                        </div>
                        <div className="col-1"></div>
                    </div>
                </div>

            </div>
            <SimpleFooter/>
        </div>
    );
}

export default ReviewScreen;