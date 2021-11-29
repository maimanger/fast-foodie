import React from "react";


const Checkout = () => {
    return (
        <div className="card">
            <ul className="list-group">
                <li className="list-group-item">
                    <span>Your Cart</span>
                    <span className="float-end"><button className="btn btn-warning">Check Out</button></span>
                </li>
                <li className="list-group-item">
                    <div className="row">
                        <div className="col-2">
                            2 x
                        </div>
                        <div className="col-7">
                            <div>Dream</div>
                            <button className="btn btn-danger btn-sm">Remove</button>
                        </div>
                        <div className="col-3">
                            $ 19.9
                        </div>
                    </div>
                </li>
                <li className="list-group-item">
                    <div className="row">
                        <div className="col-2">
                            2 x
                        </div>
                        <div className="col-7">
                            <div>Dream</div>
                            <button className="btn btn-danger btn-sm">Remove</button>
                        </div>
                        <div className="col-3">
                            $ 19.9
                        </div>
                    </div>
                </li>
                <li className="list-group-item">
                    <div className="row">
                        <div className="col-2">
                            2 x
                        </div>
                        <div className="col-7">
                            <div>Dream</div>
                            <button className="btn btn-danger btn-sm">Remove</button>
                        </div>
                        <div className="col-3">
                            $ 19.9
                        </div>
                    </div>
                </li>
            </ul>
        </div>
    )
}

export default Checkout;