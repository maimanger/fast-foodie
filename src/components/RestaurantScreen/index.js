import React from "react";
import RestaurantImage from "./RestaurantParts/RestaurantImage";
import RestaurantNav from "./RestaurantParts/RestaurantNav";
import RestaurantAbout from "./RestaurantParts/RestaurantAbout";
import SearchHeader from "../headers/SearchHeader";
import {useSelector} from "react-redux";
import SimpleHeader from "../headers/SimpleHeader";
import SimpleFooter from "../footers/SimpleFooter";

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
  const profile = useSelector(state => state.profile);

  return (
    <div className={"app-window-container"}>
    <div className={"min-vh-100"}>
        {(profile && Object.keys(profile).length !== 0 && (profile.role === 'business' || profile.role === 'admin')) ? <SimpleHeader /> : <SearchHeader />}
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
    </div>
    <SimpleFooter />
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
