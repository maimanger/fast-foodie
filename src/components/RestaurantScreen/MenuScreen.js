import { useSelector } from "react-redux";
import RestaurantImage from "./RestaurantParts/RestaurantImage";
import RestaurantNav from "./RestaurantParts/RestaurantNav";
import RestaurantMenu from "./RestaurantParts/RestaurantMenu";
import SearchHeader from "../headers/SearchHeader";
import SimpleHeader from "../headers/SimpleHeader";
import React from "react";
import SimpleFooter from "../footers/SimpleFooter";


const MenuScreen = () => {
    const restaurant = useSelector(state => state.restaurant);
    const profile = useSelector(state => state.profile);

    return (
        <div className={"app-window-container"}>
      <div className={"min-vh-100"}>
          {(profile && Object.keys(profile).length !== 0 && (profile.role === 'business' || profile.role === 'admin')) ? <SimpleHeader /> : <SearchHeader />}
        <RestaurantImage />
          <div className="container">
            <div className="row mt-3">
              <div className="col-1"></div>
              <div className="col-10">
                <div>
                    <RestaurantNav active= {'menu'} />
                </div>
                <RestaurantMenu coordinates={restaurant.coordinates}/>
              </div>
              <div className="col-1"></div>
            </div>
          </div>
      </div>
            <SimpleFooter />
        </div>
    )
}

export default MenuScreen;
