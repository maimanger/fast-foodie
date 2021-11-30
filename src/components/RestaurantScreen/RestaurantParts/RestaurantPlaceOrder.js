import React from "react";
import Checkout from "./Checkout";

const RestaurantPlaceOrder = () => {
    return (
        <div className="row mt-3 mb-3">
      <div className="col-4 p-0">
        <div className="card">
          <div className="card-text">name</div>
          <div className="card-text">price</div>
          <div className="card-text">description</div>
        </div>
        <div className="card mt-3">
          <div className="card-text">name</div>
          <div className="card-text">price</div>
          <div className="card-text">description</div>
        </div>
      </div>

      <div className="col-2"></div>

      <div className="col-6">
        <Checkout />
      </div>
    </div>
    )
}

export default RestaurantPlaceOrder;