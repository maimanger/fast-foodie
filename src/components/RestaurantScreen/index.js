import React, {useState, useEffect} from "react";
import { BrowserRouter, Route, useParams } from "react-router-dom";
import AboutScreen from "./AboutScreen";
import MenuScreen from "./MenuScreen";
import ReviewScreen from "./ReviewScreen";
import PlaceOrderScreeen from "./PlaceOrderScreen";
import RestaurantImage from "./RestaurantParts/RestaurantImage";
import RestaurantNav from "./RestaurantParts/RestaurantNav";
import RestaurantAbout from "./RestaurantParts/RestaurantAbout";
import { useDispatch, useSelector } from "react-redux";

const RestaurantScreen = () => {
  // const restaurant = useSelector(state => state.restaurant);
  // const dispatch = useDispatch();
  // const {id} = useParams();
  
  // const findRestaurantById = (dispatch) => 
  //   fetch(`http://localhost:8000/api/restaurants/${id}`)
  //     .then(res => res.json()).then(restaurant => dispatch({
  //       type: 'fetch-restaurant',
  //       restaurant,
  //     }));

  // useEffect(() => findRestaurantById(dispatch)
  // , [dispatch])
  
  return (

    <div>
      <RestaurantImage/>
      <div className="container">
        <div className="row mt-3">
          <div className="col-1"></div>
          <div className="col-10">
            
            
            <RestaurantNav active= {'about'} />
            
            <RestaurantAbout />
          </div>
          <div className="col-1"></div>

          
        </div>
      </div>

      <BrowserRouter>
              {/* <Route path={["/restaurants/:id/", "/restaurants/:id/about"]} exact={true} component={AboutScreen } /> */}
              {/* <Route path={`/restaurants/${id}/review`} component={ReviewScreen} />
              <Route path={`/restaurants/${id}/menu`} component={MenuScreen} />
              <Route path={`/restaurants/${id}/placeorder`} component={PlaceOrderScreeen} /> */}
          </BrowserRouter>
      </div>
  
    // <div className="container">
    //   <div className="row mt-3">
    //     <div className="col-2"></div>
    //     <div className="col-8">
         
    //     </div>
    //     <div className="col-2"></div>
    //   </div>
    // </div>
  );
};

export default RestaurantScreen;
