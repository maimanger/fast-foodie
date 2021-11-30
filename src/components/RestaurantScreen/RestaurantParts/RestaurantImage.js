import React from "react";
import shake_shake from "./shake_shack.json";
import "./restaurant.css"

const RestaurantImage = () => {
  const absoluteStyle = {
    position: "absolute",
    left: "16%",
    bottom: "10%",
    color: "white",
  };
  
  const claimed = <span className="text-blue"> <i className="fas fa-check-circle"></i> Claimed &#183; </span>

  return (
        <div style={{ position: "relative" }}>
          <div className="img-container mt-3">
            <img src={shake_shake.photos[0]} height="426px" width="34%" alt="restaurantimage" />
            <img src={shake_shake.photos[1]} height="426px" width="33%" alt="restaurantimage" />
            <img src={shake_shake.photos[2]} height="426px" width="33%" alt="restaurantimage" />
          </div>
          <div className="" style={absoluteStyle}>
            <div className="h1 text-white m-0" style={{fontWeight:"bold"}}>{shake_shake.name}</div>
            <div className="h3 d-flex flex-row">
              <div className="starability-result" data-rating={shake_shake.rating}></div>
              <div className="ms-3">{shake_shake.review_count} reviews</div></div>
            <div className="h4">
              {shake_shake.is_claimed === true? claimed: ""}
              <span>{shake_shake.price} &#183; </span>
              <span>{shake_shake.categories[0].title}</span>
            </div>
          </div>
        </div>

    // <div className="row">
    //   <div className="card p-0" style={{ position: "relative" }}>
    //     <img
    //       className="card-img-top"
    //       src={shake_shake.image_url}
    //       alt="restaurantimage"
    //     />
    //     <div className="card-body" style={absoluteStyle}>
    //       <div className="card-title m-0">{shake_shake.name}</div>
    //     </div>
    //   </div>
    // </div>
  );
};

export default RestaurantImage;
