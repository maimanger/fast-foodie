import React from "react";
import {BrowserRouter, Route} from "react-router-dom";

import {combineReducers, createStore} from "redux";
import {Provider} from "react-redux";

import './App.css';
import './vendor/css/bootstrap.min.css'
import "./vendor/css/stars.css";

import HomeScreen from "./components/HomeScreen";
import SearchScreen from "./components/SearchScreen";
import ProfileScreen from "./components/ProfileScreen";

import profile from "./reducers/profile";
import notifications from "./reducers/notifications";
import users from "./reducers/users";
import recentActivities from "./reducers/recentActivities";
import ProfilePublicScreen from "./components/ProfileScreen/ProfilePublicScreen";
import LoginScreen from "./components/LoginScreen";
import RegisterScreen from "./components/RegisterScreen";
import BusinessHomeScreen from "./components/BusinessHomeScreen";

import MessageScreen from "./components/MessageScreen";
import AdminInboxScreen from "./components/admin-inbox/AdminInboxScreen";
import AdminInboxDetailScreen from "./components/admin-inbox/AdminInboxDetailScreen";
import BusinessClaimScreen from "./components/BusinessClaimScreen";
import RestaurantScreen from "./components/RestaurantScreen";
import Map from "./components/RestaurantScreen/RestaurantParts/Map";
import ContactScreen from "./components/ContactScreen";
import AboutUs from "./components/AboutUs";


function App() {
    const reducer = combineReducers({profile, notifications, users, recentActivities});
    const store = createStore(reducer);

    return (
        <Provider store={store}>

            <BrowserRouter>
                <Route path={["/", "/home", "/home/logged-in"]} exact={true} component={HomeScreen} />

                <Route path={"/search"} exact={true} component={SearchScreen} />
                <Route path={"/messages"} exact={true} component={MessageScreen} />
                <Route path={"/contact"} component={ContactScreen} exact={true}/>
                <Route path={"/about"} component={AboutUs} exact={true} />

                <Route path="/profile" exact={true} component={ProfileScreen}/>
                <Route path="/profile/:id" exact={true} component={ProfilePublicScreen}/>

                <Route path="/login"  exact={true} component={LoginScreen}/>
                <Route path="/register"  exact={true} component={RegisterScreen}/>

                <Route path="/business"  exact={true} component={BusinessHomeScreen}/>
                <Route path={"/business/claim"} component={BusinessClaimScreen} />


                <Route path={"/admin/inbox"} exact={true} component={AdminInboxScreen} />
                <Route path={"/admin/inbox/detail"} exact={true} component={AdminInboxDetailScreen} />

                <Route path={"/restaurant"} component={RestaurantScreen} />

            </BrowserRouter>

        </Provider>

    );
}

export default App;
