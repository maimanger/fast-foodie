import { useSelector } from "react-redux";
import RestaurantImage from "./RestaurantParts/RestaurantImage";
import RestaurantNav from "./RestaurantParts/RestaurantNav";
import RestaurantMenu from "./RestaurantParts/RestaurantMenu";
import SearchHeader from "../headers/SearchHeader";


const MenuScreen = () => {
    const restaurant = useSelector(state => state.restaurant);
    
    return (

      <div>
        <SearchHeader/>
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
    )
}

export default MenuScreen;
