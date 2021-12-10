import React, {useEffect} from "react";
import CustomerHomeScreen from "../CustomerHomeScreen";
import {useDispatch, useSelector} from "react-redux";
import BusinessHomeScreen from "../BusinessHomeScreen";
import AdminHomeScreen from "../AdminHomeScreen";
import BusinessProfile from "../BusinessProfileScreen/BusinessProfile";
import BusinessProfileScreen from "../BusinessProfileScreen";
import {fetchProfile} from "../../services/profileService";

const HomeScreen = () => {
    const dispatch = useDispatch();
    const profile = useSelector(state => state.profile);
    useEffect(() => {
        fetchProfile(dispatch)
    }, [])


    return (
        <div>
            {(profile === undefined || Object.keys(profile).length === 0 || profile['role'] === 'customer') && <CustomerHomeScreen />}
            {(profile !== undefined && Object.keys(profile).length !== 0 && profile['role'] === 'business') && <BusinessHomeScreen />}
            {(profile !== undefined && Object.keys(profile).length !== 0 && profile['role'] === 'admin') && <AdminHomeScreen />}
        </div>
    )
}

export default HomeScreen;