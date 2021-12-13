import React, {useEffect} from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import "./restaurant.css";
import RestaurantStars from "../../ProfileScreen/RestaurantStars";
import HomepageActivityStar
    from "../../CustomerHomeScreen/RecentActivityComponent/RecentActivityCard/HomepageActivityStar";
import RestaurantStarForDetail from "./RestaurantStarForDetail";

const RestaurantImage = () => {
  const restaurant = useSelector(state => state.restaurant);
  const dispatch = useDispatch();
  const {id} = useParams();
  
  const findRestaurantById = (dispatch) => 
    fetch(`http://localhost:8000/api/restaurants/${id}`)
      .then(res => res.json()).then(restaurant => dispatch({
        type: 'fetch-restaurant',
        restaurant,
      }));

  useEffect(() => findRestaurantById(dispatch)
  , [dispatch])
  console.log(restaurant)
  // const restaurant = useSelector(state => state.restaurant);
  const absoluteStyle = {
    position: "absolute",
    left: "16%",
    bottom: "10%",
    color: "white",
  };
  
  const claimed = <span className="text-blue"> <i className="fas fa-check-circle"></i> Claimed &#183; </span>
    const reviews = useSelector(state => state.customerReviews);
    const reviewsCount = ((reviews && reviews.length !== 0) ? reviews.length : 0);
  return (
        <div style={{ position: "relative" }}>
          <div className="img-container">
            <img src={restaurant.photos[0]} height="426px" width="34%" alt="restaurantimage" />
            <img src={restaurant.photos[1]} height="426px" width="33%" alt="restaurantimage" />
            <img src={restaurant.photos[2]} height="426px" width="33%" alt="restaurantimage" />
          </div>
          <div className="" style={absoluteStyle}>
            <div className="h1 text-white m-0" style={{fontWeight:"bold"}}>{restaurant.name}</div>
            <div className="h3 d-flex flex-row">
              <div className="text-light d-flex">
                  {/*<HomepageActivityStar rating={restaurant.rating} />*/}
                  <RestaurantStarForDetail rating={restaurant.rating} />
                  <span className={"ms-4"}>{reviewsCount} reviews</span>
              </div>
              {/* <div className="starability-result" data-rating={Math.floor(restaurant.rating)}></div>
              <div className="ms-3">{restaurant.review_count} reviews</div> */}
              </div>
            <div className="h4">
              {restaurant.is_claimed === true? claimed: ""}
              <span>{restaurant.price} &#183; </span>
              <span>{(restaurant.categories.map(category => category.title).join(", "))
              } </span>
              
            </div>
          </div>
        </div>
  );
};

export default RestaurantImage;
