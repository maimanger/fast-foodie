import React, {useState} from "react";
import "./Register.css"
import states from "./states.json";
import {useDispatch, useSelector} from "react-redux";
import {useHistory} from "react-router-dom";

const CustomerRegister = ({setAddress1, setAddress2, setCity, setState, setZip, isFinished}) => {

    const history = useHistory();
    const dispatch = useDispatch();

    const[addr1Done, setAddr1Done] = useState(true);
    const[cityDone, setCityDone] = useState(true);
    const[stateDone, setStateDone] = useState(true);
    const[zipDone, setZipDone] = useState(true);

    return (
        <>
            <div className="mb-3 has-validation">
                <label htmlFor="registerAddress" className="form-label">
                    Address
                </label>
                <input type="text"
                       defaultValue="1234 Main St"
                       className={`form-control ${(!isFinished && !addr1Done) ? "is-invalid" : ""}`}
                       id="registerAddress"
                       placeholder="1234 Main St"
                       required={true}
                       onChange={(e) => {
                           setAddress1(e.target.value);
                           e.target.value === "" ? setAddr1Done(false) : setAddr1Done(true);
                       }}/>
                <div className="invalid-feedback">
                    Please fill out
                </div>
            </div>

            <div className="mb-3">
                <label htmlFor="registerAddress2" className="form-label">
                    Address 2
                </label>
                <input type="text"
                       defaultValue="Apt123"
                       className="form-control"
                       id="registerAddress2"
                       placeholder="Apartment, studio, or floor"
                       onChange={(e) => {
                           setAddress2(e.target.value);
                       }}/>

            </div>

            <div className="row mb-4 has-validation">
                <div className="col-md-5">
                    <label htmlFor="registerCity" className="form-label">
                        City
                    </label>
                    <input type="text"
                           defaultValue="CityName"
                           placeholder="CityName"
                           className={`form-control ${(!isFinished && !cityDone) ? "is-invalid" : ""}`}
                           id="registerCity"
                           required={true}
                           onChange={(e) => {
                               setCity(e.target.value);
                               e.target.value === "" ? setCityDone(false) : setCityDone(true)
                           }}/>
                    <div className="invalid-feedback">
                        Please fill out
                    </div>
                </div>

                <div className="col-md-4 has-validation">
                    <label htmlFor="registerState" className="form-label">
                        State
                    </label>
                    <select id="registerState"
                            defaultValue="AL"
                            className={`form-control ${(!isFinished && !stateDone) ? "is-invalid" : ""}`}
                            required={true}
                            onChange={(e) => {
                                setState(e.target.value);
                                e.target.value === "" ? setStateDone(false) : setStateDone(true)
                            }}>
                        {states.map(s => <option value={s.abbreviation}>{s.name}</option>)}
                    </select>
                    <div className="invalid-feedback">
                        Please select
                    </div>
                </div>

                <div className="col-md-3 has-validation">
                    <label htmlFor="registerZip" className="form-label">
                        Zip
                    </label>
                    <input type="text"
                           defaultValue="00000"
                           placeholder="00000"
                           className={`form-control ${(!isFinished && !zipDone) ? "is-invalid" : ""}`}
                           id="registerZip"
                           required={true}
                           onChange={(e) => {
                               setZip(e.target.value);
                               e.target.value === "" ? setZipDone(false) : setStateDone(true)
                           }}/>
                    <div className="invalid-feedback">
                        Please fill out
                    </div>
                </div>
            </div>
        </>
    )
}

export default CustomerRegister;