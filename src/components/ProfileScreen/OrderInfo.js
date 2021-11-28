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
                    Order Id: {order._id}
                </div>
                <div className="text-black">
                    ${order.cost}
                </div>
                <div className="text-black-50">
                    {order.delivery_address}
                </div>
                <div className="text-black-50">
                    Ordered on {order.time_ordered}
                </div>
            </div>
        </div>
    )
}

export default OrderInfo;