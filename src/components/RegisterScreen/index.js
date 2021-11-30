import React, {useState} from "react";
import "./Register.css"
import {Link} from "react-router-dom";
import states from "./states.json";
import CustomerRegister from "./CustomerRegister";
import BusinessRegister from "./BusinessRegister";


const RegisterScreen = () => {

    const [role, setRole] = useState("customer");

    return (
        <div className="container my-4">
            <div className="row d-flex justify-content-center align-items-center">
                <div className="col-12 col-md-9 col-lg-7 col-xl-6">
                    <div className="card shadow" style={{borderRadius: "15px"}}>
                        <form className="card-body p-5">
                            <h2 className="text-uppercase text-center mb-1 text-danger fw-bold">
                                Create an Account
                            </h2>

                            <p className="text-center text-muted mb-4">Already have an
                                account? <Link to="/login"
                                               className="fw-bold text-info wd-register-link-text">Login
                                    here</Link>
                            </p>

                            <div className="form-floating mb-3">
                                <select className="form-select " id="regeisterSelect"
                                        defaultValue="customer" onChange={event => setRole(event.target.value)}>
                                    <option value="customer">
                                        Customer
                                    </option>
                                    <option value="business">
                                        Business Owner
                                    </option>
                                </select>
                                <label htmlFor="regeisterSelect">Sign up as</label>
                            </div>

                            <div className="row mb-3">
                                <div className="col-md-6">
                                    <label htmlFor="registerFirstName" className="form-label">
                                        First Name
                                    </label>
                                    <input type="text" className="form-control" required={true}
                                           id="registerFirstName"/>
                                </div>
                                <div className="col-md-6">
                                    <label htmlFor="registerLastName" className="form-label">
                                        Last Name
                                    </label>
                                    <input type="text" className="form-control" required={true}
                                           id="registerLastName"/>
                                </div>
                            </div>

                            <div className="mb-3">
                                <label className="form-label" htmlFor="registerEmail">
                                    Your Email
                                </label>
                                <input type="email" id="registerEmail" className="form-control"
                                       placeholder="example@123.com" required={true}/>
                            </div>

                            <div className="mb-3">
                                <label className="form-label" htmlFor="registerPassword">
                                    Password
                                </label>
                                <input type="password" id="registerPassword"
                                       className="form-control" required={true}/>

                            </div>

                            <div className="mb-3">
                                <label className="form-label" htmlFor="registerPassword2">
                                    Repeat your password
                                </label>
                                <input type="password" id="registerPassword"
                                       className="form-control" required={true}/>
                            </div>

                            {role === "customer" && <CustomerRegister/>}

                            {role === "business" && <BusinessRegister/>}



                            <div
                                className="form-check d-flex justify-content-center mb-3">
                                <input required={true}
                                    className="form-check-input me-2"
                                    type="checkbox"
                                    value=""
                                    id="regesterCheckbox"
                                />
                                <label className="form-check-label" htmlFor="regesterCheckbox">
                                    I agree all statements in the <Link to="#"
                                                                    className="text-info wd-register-link-text">Privacy
                                    Policy</Link>
                                </label>
                            </div>

                            <div className="d-flex justify-content-center">
                                <button type="submit"
                                        className="btn btn-primary rounded-pill btn-lg py-1">
                                    Register
                                </button>
                            </div>


                        </form>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default RegisterScreen;