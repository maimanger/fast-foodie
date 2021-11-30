import React from "react";
import "./Login.css";
import {Link} from "react-router-dom";

const LoginScreen = () => {
    return (
        <>
            <div className="container">
                <div className="row align-items-center g-lg-5 py-5">
                    <div className="col-lg-6 text-center text-lg-start">
                        <img className="img-fluid" src="/images/LoginPage/login.png"/>
                    </div>
                    <div className="col-md-10 mx-auto col-lg-5">
                        <form className="p-4 p-md-5 border rounded-3 bg-light shadow">
                            <div className="form-floating mb-3">
                                <input type="email" className="form-control"
                                       id="loginEmail" placeholder="name@example.com">
                                </input>
                                <label htmlFor="loginEmail">Email address</label>
                            </div>
                            <div className="form-floating mb-3">
                                <input type="password" className="form-control"
                                       id="loginPassword" placeholder="Password">
                                </input>
                                <label htmlFor="loginPassword">Password</label>
                            </div>
                            <button className="w-100 btn btn-lg btn-primary" type="submit">
                                Sign up
                            </button>

                            <hr className="my-4"/>
                            <div className="text-center mb-2 text-black-50">Don't have an account?</div>
                            <Link className="w-100 btn btn-lg btn-info" to="/register">
                                Create an account
                            </Link>

                        </form>
                    </div>

                </div>

            </div>

        </>
    )
}

export default LoginScreen;