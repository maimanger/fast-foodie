import React from "react";
import {BrowserRouter, Route} from "react-router-dom";
import './App.css';
import './vendor/css/bootstrap.min.css'
import "./vendor/css/stars.css";
import HomeScreen from "./components/HomeScreen";
import SearchScreen from "./components/SearchScreen";
import ProfileScreen from "./components/ProfileScreen";
import MessageScreen from "./components/MessageScreen";
import AdminInboxScreen from "./components/AdminInboxScreen";
import AdminInboxDetailScreen from "./components/AdminInboxDetailScreen";
import BusinessClaimSearchScreen from "./components/BusinessClaimScreen/BusinessClaimSearchScreen";
import RestaurantScreen from "./components/RestaurantScreen";
import Map from "./components/RestaurantScreen/RestaurantParts/Map";



function App() {
  return (
      <BrowserRouter>
          <Route path={["/", "/home", "/home/logged-in"]} exact={true} component={HomeScreen} />
          <Route path={"/search"} exact={true} component={SearchScreen} />
          <Route path={"/messages"} exact={true} component={MessageScreen} />
          <Route path={"/admin/inbox"} exact={true} component={AdminInboxScreen} />
          <Route path={"/admin/inbox/detail"} exact={true} component={AdminInboxDetailScreen} />
          <Route path={"/business/claim"} component={BusinessClaimSearchScreen} />
          <Route path={"/profile"} exact={true} component={ProfileScreen}/>
          <Route path={"/restaurant"} component={RestaurantScreen} />
      </BrowserRouter>
  );
}

export default App;
