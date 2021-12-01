import React from "react";
import {useSelector} from "react-redux";
import orders from "../../../reducers/data/businessHome/businessOrders.json"
import BusinessOrderItem from "./BusinessOrderItem";

const BusinessOrders = () => {

    return (
        <ul className="list-group list-group-flush">
            <div className="mb-3">
                {orders.length > 1 && `You have ${orders.length} Orders to be Processed`}
                {orders.length <= 1 && `You have ${orders.length} Order to be Processed`}
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