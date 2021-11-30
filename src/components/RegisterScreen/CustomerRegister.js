import React from "react";
import "./Register.css"
import states from "./states.json";

const CustomerRegister = () => {
    return (
        <>
        <div className="mb-3">
            <label htmlFor="registerAddress" className="form-label">
                Address
            </label>
            <input type="text" className="form-control"
                   id="registerAddress" placeholder="1234 Main St">
            </input>
        </div>
    <div className="mb-3">
        <label htmlFor="registerAddress2" className="form-label">
            Address 2
        </label>
        <input type="text" className="form-control" id="registerAddress2"
               placeholder="Apartment, studio, or floor">
        </input>
    </div>

    <div className="row mb-4">
        <div className="col-md-5">
            <label htmlFor="registerCity" className="form-label">
                City
            </label>
            <input type="text" className="form-control" id="registerCity">
            </input>
        </div>

        <div className="col-md-4">
            <label htmlFor="registerState" className="form-label">
                State
            </label>
            <select id="registerState" className="form-select"
                    defaultValue="Alabama">
                {states.map(s => <option value={s.name}>{s.name}</option>)}
            </select>
        </div>
        <div className="col-md-3">
            <label htmlFor="registerZip" className="form-label">
                Zip
            </label>
            <input type="text" className="form-control"
                   id="registerZip">
            </input>
        </div>
    </div>
        </>
    )
}

export default CustomerRegister;