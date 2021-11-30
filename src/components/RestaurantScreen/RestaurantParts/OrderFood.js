import React, { useState } from "react";
import { Link } from "react-router-dom";



const OrderFood = () => {
    const [isDelivery, setIsDelivery] = useState(true)
    const [active, setActive] = useState('delivery')

    const deliveryClickHandler = () => { setIsDelivery(true); setActive('delivery') }
    const takeoutClickHandler = () => { setIsDelivery(false); setActive('takeout') }

    const delivery = <div><input className="form-control" placeholder="123 Street"></input></div>
    const takeout = <div>No Fees | Pick up in 10 - 20 minutes</div>

    return (
        <div className="card">
            <div className="card-body">
            <h3 className="card-title">Order Food</h3>

            <div className="row card-text">
                <ul class="nav nav-pills p-3">
                    <li onClick={deliveryClickHandler} class="nav-item">
                        <Link to="/restaurant/menu" class={`nav-link ${active === 'delivery' ? 'active': ''}`}>Delivery </Link>
                    </li>
                    <li onClick={takeoutClickHandler} class="nav-item">
                        <Link to="/restaurant/menu" class={`nav-link ${active === 'takeout' ? 'active': ''} `}>Takeout</Link>
                    </li>
                </ul>
            </div>
            <div className="row mt-2">
            {isDelivery === true? delivery: takeout}

            <Link to="/restaurant/placeorder" className="btn btn-primary btn-sm p-2 mt-4">Start Order</Link>
            </div>
            </div>
        </div>
    )
}

export default OrderFood;