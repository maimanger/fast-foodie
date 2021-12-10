import React from "react";
import {Image} from "react-bootstrap";

const OrderInfo = ({order}) => {
    return (
        <div className="row g-3 mb-2">
            {/************************Order Avatar**************************/}
            <div className="col-auto">
                <img src={order.img}
                     className="img-fluid rounded-3"
                     style={{minHeight: 70, maxWidth:70, objectFit: "cover"}} />
            </div>
            {/************************Order Info**************************/}
            <div className="col-12 col-md-8 d-flex flex-column">
                <div className="text-black fw-bold">
                    Order #{order._id}
                </div>

                <div className="text-black">
                    <span>Total ${order.cost.toPrecision(4)}</span>
                    <span className="mx-2">•</span>
                    <span>
                        {order.itemsCount > 1 && `${order.itemsCount} items`}
                        {order.itemsCount <= 1 && `${order.itemsCount} item`}
                    </span>
                </div>

                <div className="text-black-50">
                    {order.delivery_contact.address}
                </div>
                <div className="text-black-50">
                    Ordered at {order.time_ordered}
                </div>
            </div>
        </div>
    )
}

export default OrderInfo;