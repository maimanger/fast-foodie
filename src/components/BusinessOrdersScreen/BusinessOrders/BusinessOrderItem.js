import React, {useState} from "react";
import {Link} from "react-router-dom";
import {Collapse} from "react-bootstrap";

const BusinessOrderItem = ({order}) => {
    const [on, setOn] = useState(false);

    return (
        <>
            <div className="list-group-item d-flex flex-column bg-transparent py-3">

                {/************************Order Title*************************/}
                <div className="d-flex justify-content-between align-content-center">
                    <div className="text-black fw-bold py-2">
                        Order #{order._id}
                    </div>
                    <button className="btn ms-1 rounded-circle border-0 wd-rounded-btn"
                            onClick={() => setOn(!on)}>
                        <i className="fas fa-caret-down" style={{"font-size": "20px"}}></i>
                    </button>
                </div>

                {/************************Order Info*************************/}
                <div className="row mb-3">
                    <div className="col-12 col-lg-6">
                        <div className="text-black">
                            <span>Total ${order.cost.toPrecision(4)}</span>
                            <span className="mx-2">•</span>
                            <span>
                                {order.itemsCount > 1 && `${order.itemsCount} items`}
                                {order.itemsCount <= 1 && `${order.itemsCount} item`}
                            </span>
                        </div>
                        <div>Status: {order.status}</div>
                        <div className="text-black-50">Ordered at {order.time_ordered}</div>
                    </div>
                    <div className="col-12 col-lg-6 text-lg-end">
                        <div className="text-black-50">
                            {order.delivery_contact.receiver}
                        </div>
                        <div className="text-black-50">
                            {order.delivery_contact.address}
                        </div>
                        <div className="text-black-50">
                            {order.delivery_contact.phone}
                        </div>
                    </div>
                </div>

                {/************************Order Detail*************************/}
                <Collapse in={on}>
                    <Link to={`/business/orders/${order._id}`}
                          className="wd-profile-content-hover">
                        <div className="d-flex flex-column">
                            <div className="mb-2 text-black">
                                Order Details
                            </div>
                            {order.items.map(item => {
                                return (
                                    <div className="py-2 ps-3 ms-3 pe-2">
                                        {item.img_url &&
                                         <img src={item.img_url}
                                              className="rounded-3 img-fluid mx-2"
                                              style={{width: "36px", height: "36px"}}/>
                                        }
                                        <span className="text-black opacity-75">
                                        {item.name} × {item.count}
                                            </span>

                                        <div
                                            className="ms-5 ms-sm-0 float-sm-end text-black opacity-75">
                                            $ {item.cost.toPrecision(4)}
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                    </Link>
                </Collapse>

                {/************************Order Buttons*************************/}
                {(order.status !== "completed" &&  order.status !== "declined") &&
                 <div className="d-flex justify-content-end">
                     <div className="me-3">
                         <button className="btn rounded-pill btn-outline-primary py-1"
                                 style={{width: "85px"}}>
                             Confirm
                         </button>
                     </div>
                     <div>
                         <button className="btn rounded-pill btn-outline-info py-1"
                                 style={{width: "85px"}}>
                             Reject
                         </button>
                     </div>
                 </div>
                }


            </div>

        </>
    )
}

export default BusinessOrderItem;