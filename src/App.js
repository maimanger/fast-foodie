import React from "react";
import {BrowserRouter, Route} from "react-router-dom";
import {combineReducers, createStore} from "redux";
import {Provider} from "react-redux";

import HomeScreen from "./components/HomeScreen";
import SearchScreen from "./components/SearchScreen";
import ProfileScreen from "./components/ProfileScreen";
import './vendor/css/bootstrap.min.css'
import profile from "./reducers/profile";
import notifications from "./reducers/notifications";
import users from "./reducers/users";
import recentActivities from "./reducers/recentActivities";
import ProfilePublicScreen from "./components/ProfileScreen/ProfilePublicScreen";
import LoginScreen from "./components/LoginScreen";
import RegisterScreen from "./components/RegisterScreen";

function App() {
    const reducer = combineReducers({profile, notifications, users, recentActivities});
    const store = createStore(reducer);

    return (
        <Provider store={store}>

            <BrowserRouter>
                <Route path={"/"} exact={true}>
                    <HomeScreen/>
                </Route>
                <Route path={"/search"}>
                    <SearchScreen/>
                </Route>

                <Route path="/profile" component={ProfileScreen}/>
                <Route path="/profile/:id" component={ProfilePublicScreen}/>

                <Route path="/login"  exact={true} component={LoginScreen}/>
                <Route path="/register"  exact={true} component={RegisterScreen}/>
            </BrowserRouter>

        </Provider>

    );
}

export default App;
