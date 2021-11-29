import React from "react";
import "./Register.css"



const RegisterScreen = () => {
    return (
        <section className="vh-100 bg-image"
                 style={{
                     backgroundImage: `url(${process.env.PUBLIC_URL + '/RegisterPage/register.jpg'})`
                 }}>
            <div className="mask d-flex align-items-center h-100 gradient-custom-3">
                <div className="container h-100">
                    <div className="row d-flex justify-content-center align-items-center h-100">
                        <div className="col-12 col-md-9 col-lg-7 col-xl-6">
                            <div className="card" style={{"border-radius": "15px"}}>
                                <div className="card-body p-5">
                                    <h2 className="text-uppercase text-center mb-5">Create an
                                        account</h2>

                                    <div className="form-floating mb-3 mx-auto">

                                        <select className="form-select" id="floatingSelect"
                                                aria-label="Floating label select example">

                                            <option value="1">Customer</option>
                                            <option value="2">Business Owner</option>
                                            <option value="3">Admin</option>
                                        </select>
                                        <label htmlFor="floatingSelect">Sign up as</label>
                                    </div>

                                    <form >
                                        <div className="row mb-3">
                                        <div className="col-md-6">
                                            <label htmlFor="inputEmail4"
                                                   className="form-label">First Name</label>
                                            <input type="text" className="form-control"
                                                   id="inputEmail4">
                                            </input>
                                        </div>
                                        <div className="col-md-6">
                                            <label htmlFor="inputPassword4"
                                                   className="form-label">Last Name</label>
                                            <input type="text" className="form-control"
                                                   id="inputPassword4">
                                            </input>
                                        </div>
                                        </div>


                                        <div className="form-outline mb-3">
                                            <label className="form-label" htmlFor="form3Example3cg">Your
                                                Email</label>
                                            <input type="email" id="form3Example3cg"
                                                   className="form-control form-control-lg"/>

                                        </div>

                                        <div className="form-outline mb-3">
                                            <label className="form-label"
                                                   htmlFor="form3Example4cg">Password</label>
                                            <input type="password" id="form3Example4cg"
                                                   className="form-control form-control-lg"/>

                                        </div>

                                        <div className="form-outline mb-3">
                                            <label className="form-label"
                                                   htmlFor="form3Example4cdg">Repeat your
                                                password</label>
                                            <input type="password" id="form3Example4cdg"
                                                   className="form-control form-control-lg"/>

                                        </div>

                                        <div className="col-12 mb-3">
                                            <label htmlFor="inputAddress"
                                                   className="form-label">Address</label>
                                            <input type="text" className="form-control"
                                                   id="inputAddress" placeholder="1234 Main St">
                                            </input>
                                        </div>
                                        <div className="col-12 mb-3">
                                            <label htmlFor="inputAddress2" className="form-label">Address
                                                2</label>
                                            <input type="text" className="form-control"
                                                   id="inputAddress2"
                                                   placeholder="Apartment, studio, or floor">
                                            </input>
                                        </div>

                                        <div className="row mb-4">
                                        <div className="col-md-5">
                                            <label htmlFor="inputCity"
                                                   className="form-label">City</label>
                                            <input type="text" className="form-control"
                                                   id="inputCity">
                                            </input>
                                        </div>

                                        <div className="col-md-4">
                                            <label htmlFor="inputState"
                                                   className="form-label">State</label>
                                            <select id="inputState" className="form-select">
                                                <option selected>Choose...</option>
                                                <option>...</option>
                                            </select>
                                        </div>
                                        <div className="col-md-3">
                                            <label htmlFor="inputZip"
                                                   className="form-label">Zip</label>
                                            <input type="text" className="form-control"
                                                   id="inputZip">
                                            </input>
                                        </div>
                                        </div>

                                        <div
                                            className="form-check d-flex justify-content-center mb-5">
                                            <input
                                                className="form-check-input me-2"
                                                type="checkbox"
                                                value=""
                                                id="form2Example3cg"
                                            />
                                            <label className="form-check-label"
                                                   htmlFor="form2Example3g">
                                                I agree all statements in <a href="#"
                                                                             className="text-body"><u>Terms
                                                of service</u></a>
                                            </label>
                                        </div>

                                        <div className="d-flex justify-content-center">
                                            <button type="button"
                                                    className="btn btn-primary rounded-pill btn-lg gradient-custom-4">Register
                                            </button>
                                        </div>

                                        <p className="text-center text-muted mt-5 mb-0">Have already
                                            an account? <a href="#"
                                                           className="fw-bold text-body"><u>Login
                                                here</u></a></p>

                                    </form>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default RegisterScreen;