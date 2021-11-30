import React from "react";

const OrderInfo = ({order}) => {
    return (
        <div className="row g-3 mb-2">
            {/************************Order Avatar**************************/}
            <div className="col-4 col-md-2">
                <img src={order.img}
                     className="img-fluid rounded-3"/>
            </div>
            {/************************Order Info**************************/}
            <div className="col-12 col-md-8 d-flex flex-column">
                <div className="text-black">
                    Order #{order._id}
                </div>
                <div className="text-black">
                    <span>Total ${order.cost}</span>
                    <span className="mx-1">•</span>
                    <span>
                        {order.itemsCount > 1 && `${order.itemsCount} items`}
                        {order.itemsCount <= 1 && `${order.itemsCount} item`}
                    </span>
                </div>
                <div className="text-black-50">
                    {order.delivery_address}
                </div>
                <div className="text-black-50">
                    Ordered at {order.time_ordered}
                </div>
            </div>
        </div>
    )
}

export default OrderInfo;