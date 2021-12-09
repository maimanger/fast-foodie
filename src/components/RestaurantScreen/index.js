import React from "react";
import RestaurantImage from "./RestaurantParts/RestaurantImage";
import RestaurantNav from "./RestaurantParts/RestaurantNav";
import RestaurantAbout from "./RestaurantParts/RestaurantAbout";
import SearchHeader from "../SearchHeader";

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
      <SearchHeader/>
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
