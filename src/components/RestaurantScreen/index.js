import { BrowserRouter, Route } from "react-router-dom";
import AboutScreen from "./AboutScreen";
import MenuScreen from "./MenuScreen";
import ReviewScreen from "./ReviewScreen";
import PlaceOrderScreeen from "./PlaceOrderScreen";

const RestaurantScreen = ({match}) => {
  return (
    // <div className="container">
    //   <div className="row mt-3">
    //     <div className="col-2"></div>
    //     <div className="col-8">
          
          <BrowserRouter>
            
              <Route path={[`${match.url}/`, `${match.url}/about`]} exact={true} component={AboutScreen} />
              <Route path={`${match.url}/review`} component={ReviewScreen} />
              <Route path={`${match.url}/menu`} component={MenuScreen} />
              <Route path={`${match.url}/placeorder`} component={PlaceOrderScreeen} />
            
          </BrowserRouter>
    //     </div>
    //     <div className="col-2"></div>
    //   </div>
    // </div>
  );
};

export default RestaurantScreen;
