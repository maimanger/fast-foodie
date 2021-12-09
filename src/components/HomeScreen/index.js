import React from "react";
import CustomerHomeScreen from "../CustomerHomeScreen";
import {useSelector} from "react-redux";
import BusinessHomeScreen from "../BusinessHomeScreen";
import AdminHomeScreen from "../AdminHomeScreen";
import BusinessProfile from "../BusinessProfileScreen/BusinessProfile";

const HomeScreen = () => {
    const profile = useSelector(state => state.profile);

    return (
        <div>
            {(profile === undefined || Object.keys(profile).length === 0 || profile['role'] === 'customer') && <CustomerHomeScreen />}
            {/*{(profile !== undefined && Object.keys(profile).length !== 0 && profile['role'] === 'business') && <BusinessProfile />}*/}
            {/*{(profile !== undefined && Object.keys(profile).length !== 0 && profile['role'] === 'admin') && <AdminHomeScreen />}*/}
        </div>
    )
}

export default HomeScreen;