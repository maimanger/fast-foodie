import React from "react";
import {BrowserRouter, Route} from "react-router-dom";
import HomeScreen from "./components/HomeScreen";
import SearchScreen from "./components/SearchScreen";


function App() {
  return (
      <BrowserRouter>
        <Route path={"/"} exact={"true"}>
          <HomeScreen/>
        </Route>
        <Route path={"/search"}>
          <SearchScreen />
        </Route>
      </BrowserRouter>

  );
}

export default App;
