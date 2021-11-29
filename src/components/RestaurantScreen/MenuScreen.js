import RestaurantImage from "./RestaurantParts/RestaurantImage";
import RestaurantNav from "./RestaurantParts/RestaurantNav";
import RestaurantMenu from "./RestaurantParts/RestaurantMenu";


const MenuScreen = () => {
    return (
      <div><RestaurantImage />
      <div className="container">
        <div className="row mt-3">
          <div className="col-1"></div>
          <div className="col-10">
            <div>
                <RestaurantNav active= {'menu'} />
            </div>
            <RestaurantMenu />
          </div>
          <div className="col-1"></div>
        </div>
      </div>
      </div>
    )
}

export default MenuScreen;
