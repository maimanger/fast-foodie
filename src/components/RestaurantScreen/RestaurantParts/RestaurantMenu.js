import React, { useState, useEffect } from "react";
import OrderFood from "./OrderFood";


const RestaurantMenu = ({coordinates}) => {
  const [menu, setMenu] = useState([]);
  
  const getAllMenuItems = () => {
    
    fetch('http://localhost:8000/api/menuitems', {
      method: 'POST',
      body: JSON.stringify(coordinates),
      headers: {
        'content-type': 'application/json'
      }
    }).then(response => response.json())
      .then(menu => setMenu(menu))
  }

  useEffect(() => getAllMenuItems(), []);

  // const menu = [{item_id: 123, menu_item_name: "delicious food", menu_item_price: 7.77, menu_item_description: "Thisdifakldsjfladjfakdadkfajdfads"},
  // {item_id: 345, menu_item_name: "delicious food", menu_item_price: 7.77, menu_item_description: "Thisdifakldsjfladjfakdadkfajdfads"}]
  //
  return (
    <div className="row mt-3 mb-3 ">
      <div className="col-6 p-0 list-group">
        {menu.map(item => {
          return ( (item.menu_item_price !== 0) &&
          <li key={item.item_id} className="list-group-item border-0 bg-transparent">
            <div className="card border border-primary bg-transparent p-2">
              <div className="card-text ">{item.menu_item_name}</div>
              <div className="card-text ">{`$ ${item.menu_item_price}`}</div>
              <div className="card-text ">{ item.menu_item_description !== "" ? item.menu_item_description : "No description"}</div>
            </div>
          </li>
          )
        }
          
        )}

      </div>
      {/* <div className="col-2"></div> */}
      {/* <div className="col-6">
        <OrderFood/>
      </div> */}
    </div>
  );
};

export default RestaurantMenu;
