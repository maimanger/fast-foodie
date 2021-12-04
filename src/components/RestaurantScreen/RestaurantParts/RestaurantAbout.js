import React, {useState, useEffect} from "react";
import Map from "./Map";
import { useSelector } from "react-redux";
const RestaurantAbout = () => {

  const restaurant = useSelector(state => state.restaurant)
  const times = restaurant.hours[0].open;
  const days = {0: "Mon", 1: "Tue", 2: "Wed", 3: "Thu", 4: "Fri", 5: "Sat", 6: "Sun"};

  return (
    <div>
      <h3 className="row mt-3 p-0">Location & hours</h3>
      <div className="row mb-3">
        <div className="col-4 p-0">
          <Map coordinates={restaurant.coordinates}/>
          <div>{restaurant.location.display_address.join(", ")}</div>
          <div>{restaurant.display_phone}</div>
          <div>
            <a href={restaurant.url}>Visit</a>
          </div>
        </div>
        <div className="col-1"></div>
        <div className="col-5">
          <ul className="list-group m-0">
            {times.map((time, index) => {return (
              <li key={index} className="list-group-item border-0 p-0">
                <div className="row"> 
                <span className="col-2">{days[time.day]}</span>  
                <span className="col-10">{`${time.start.substr(0, 2)}:${time.start.substr(2, 4)} AM - 
                  ${time.end.substr(0, 2)}:${time.end.substr(2, 4)} PM`}</span>
                </div>
              </li>)}) }
          </ul>
          </div>
      </div>
  </div>
    
  );
};

export default RestaurantAbout;
