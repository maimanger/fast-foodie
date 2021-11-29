import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import HomeScreen from "./components/HomeScreen";
import SearchScreen from "./components/SearchScreen";
import ProfileScreen from "./components/ProfileScreen";
import RestaurantScreen from "./components/RestaurantScreen";
import "./vendor/css/bootstrap.min.css";
import "./vendor/css/stars.css";
import Map from "./components/RestaurantScreen/RestaurantParts/Map";

function App() {
  return (
    <BrowserRouter>
      <Route path={"/"} exact={"true"}>
        <HomeScreen />
      </Route>
      <Route path={"/search"}>
        <SearchScreen />
      </Route>

      <Route path={"/restaurant"} component={RestaurantScreen} />
        
      <Route path="/profile" exact={true} component={ProfileScreen} />
    </BrowserRouter>
    
  );
}

export default App;
