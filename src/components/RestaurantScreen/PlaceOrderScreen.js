import RestaurantImage from "./RestaurantParts/RestaurantImage";
import RestaurantNav from "./RestaurantParts/RestaurantNav";
import RestaurantPlaceOrder from "./RestaurantParts/RestaurantPlaceOrder";


const PlaceOrderScreeen = () => {
    return (
      <div>
      <RestaurantImage />

      <div className="container">
        <div className="row mt-3">
          <div className="col-1"></div>
          <div className="col-10">
            
            
                <RestaurantNav active= {'menu'} />
            
            <RestaurantPlaceOrder />
          </div>
          <div className="col-1"></div>

          
        </div>
      </div>
      </div>
    );
}

export default PlaceOrderScreeen;