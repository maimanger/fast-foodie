import React from "react";
import {BrowserRouter, Route} from "react-router-dom";
import HomeScreen from "./components/HomeScreen";
import SearchScreen from "./components/SearchScreen";
import ProfileScreen from "./components/ProfileScreen";
import './vendor/css/bootstrap.min.css'


function App() {
  return (
      <BrowserRouter>
        <Route path={"/"} exact={"true"}>
          <HomeScreen/>
        </Route>
        <Route path={"/search"}>
          <SearchScreen />
        </Route>

          <Route path="/profile" exact={true} component={ProfileScreen}/>
      </BrowserRouter>

  );
}

export default App;
