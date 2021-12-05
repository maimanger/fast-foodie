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
import LoginScreen from "./components/LoginScreen";
import RegisterScreen from "./components/RegisterScreen";
import BusinessHomeScreen from "./components/BusinessHomeScreen";

import MessageScreen from "./components/MessageScreen";
import AdminInboxScreen from "./components/admin-inbox/AdminInboxScreen";
import AdminInboxDetailScreen from "./components/admin-inbox/AdminInboxDetailScreen";
import RestaurantScreen from "./components/RestaurantScreen";
import Map from "./components/RestaurantScreen/RestaurantParts/Map";
import ContactScreen from "./components/ContactScreen";
import AboutUs from "./components/AboutUs";

import AboutScreen from "./components/RestaurantScreen/AboutScreen";
import ReviewScreen from "./components/RestaurantScreen/ReviewScreen";
import MenuScreen from "./components/RestaurantScreen/MenuScreen";
import PlaceOrderScreeen from "./components/RestaurantScreen/PlaceOrderScreen";
import Test from "./components/RestaurantScreen/test";
import restaurant from "./reducers/restaurant"
import BusinessOrdersScreen from "./components/BusinessOrdersScreen";
import AdminHomeScreen from "./components/AdminHomeScreen";
import AdminClaimScreen from "./components/AdminClaimScreen";
import AdminClaimDetail from "./components/AdminClaimScreen/AdminClaimDetail";
import BusinessProfileScreen from "./components/BusinessProfileScreen";
import BusinessClaimSearchComponent from "./components/BusinessClaimScreen/BusinessClaimSearchComponent";
import PublicProfileScreen from "./components/ProfileScreen/PublicProfileScreen";
import ProfileReviewsScreen from "./components/ProfileReviewsScreen";
import ProfileFollowersScreen from "./components/ProfileFollowersScreen";
import ProfileFollowingsScreen from "./components/ProfileFollowingsScreen";
import BusinessClaimScreen from "./components/BusinessClaimScreen";
import ProfileBookmarksScreen from "./components/ProfileBookmarksScreen";




function App() {
    const reducer = combineReducers({profile, notifications, users, recentActivities, restaurant});
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
                <Route path="/profile/:id" exact={true} component={PublicProfileScreen}/>
                <Route path="/profile_reviews" exact={true} component={ProfileReviewsScreen}/>
                <Route path="/profile_bookmarks" exact={true} component={ProfileBookmarksScreen}/>
                <Route path="/profile_followers" exact={true} component={ProfileFollowersScreen}/>
                <Route path="/profile_followings" exact={true} component={ProfileFollowingsScreen}/>

                <Route path="/login"  exact={true} component={LoginScreen}/>
                <Route path="/register"  exact={true} component={RegisterScreen}/>

                <Route path="/business"  exact={true} component={BusinessHomeScreen}/>
                <Route path="/business/orders"  exact={true} component={BusinessOrdersScreen}/>
                <Route path="/business/profile"  exact={true} component={BusinessProfileScreen}/>
                <Route path={"/business/claim"} component={BusinessClaimScreen} />

                <Route path="/admin" exact={true} component={AdminHomeScreen}/>
                <Route path="/admin/claims" exact={true} component={AdminClaimScreen}/>
                <Route path="/admin/claims/:claimId" exact={true} component={AdminClaimDetail}/>


                <Route path={"/admin/inbox"} exact={true} component={AdminInboxScreen} />
                <Route path={"/admin/inbox/detail"} exact={true} component={AdminInboxDetailScreen} />

                {/* <Route path={"/restaurants/:id"} component={RestaurantScreen} /> */}

                <Route path={["/restaurants/:id/", "/restaurants/:id/about"]} exact={true} component={RestaurantScreen } />
                <Route path={"/restaurants/:id/review"} component={ReviewScreen} />
                <Route path={"/restaurants/:id/menu"} component={MenuScreen} />
                <Route path={"/restaurants/:id/placeorder"} component={PlaceOrderScreeen} />
                <Route path={"/test"} exact={true} component={Test} />

            </BrowserRouter>

        </Provider>

    );
}

export default App;
