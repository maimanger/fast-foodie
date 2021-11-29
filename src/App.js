import React from "react";
import {BrowserRouter, Route} from "react-router-dom";
import './vendor/css/bootstrap.min.css'
import './App.css';
import HomeScreen from "./components/HomeScreen";
import SearchScreen from "./components/SearchScreen";
import ProfileScreen from "./components/ProfileScreen";
import MessageScreen from "./components/MessageScreen";
import AdminInboxScreen from "./components/AdminInboxScreen";
import AdminInboxDetailScreen from "./components/AdminInboxDetailScreen";
import BusinessClaimSearchScreen from "./components/BusinessClaimScreen/BusinessClaimSearchScreen";


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
      </BrowserRouter>

  );
}

export default App;
