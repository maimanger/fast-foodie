import React from "react";
import {useSelector} from "react-redux";
import orders from "../../../reducers/data/businessHome/businessOrders.json"
import BusinessOrderItem from "./BusinessOrderItem";

const BusinessOrders = () => {
    let unprocessedCount = 0;
    orders.map(order => {
        if (order.status === "unprocessed") unprocessedCount++;
    })

    return (
        <ul className="list-group list-group-flush">
            <div className="mb-3">
                {unprocessedCount > 1 && `You have ${unprocessedCount} Orders to be Processed`}
                {unprocessedCount <= 1 && `You have ${unprocessedCount} Order to be Processed`}
            </div>
            <hr className="mt-0 mb-0"/>

            {orders.map(order => {
                return (
                    <BusinessOrderItem order={order}/>
                )
            })}
        </ul>
    )

}

export default BusinessOrders;