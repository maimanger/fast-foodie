import React, {useState} from "react";
import "./Login.css";
import {Link, useHistory, Redirect} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {login, logout} from "../../services/profileService";

const LoginScreen = () => {
    const isValid = useSelector(state => state.profileVerification);
    // for testing
    const profile = useSelector(state => state.profile);
    const [user, setUser] = useState({username: "alice@123.com", password: "alice123"});

    const history = useHistory();
    const dispatch = useDispatch();
    const loginHandler = (e) => {
        e.preventDefault();
        login(user)
            .then(profile => {
                // for testing
                dispatch({
                             type: "fetch-profile",
                             profile
                         });

                dispatch({
                             type: "change-isValid",
                             isValid: true
                         });
                history.push('/profile');
            })
            .catch(e => {
                dispatch({
                             type: "change-isValid",
                             isValid: false
                         });
            })
    }

    const logoutHandler = (e) => {
        e.preventDefault();
        logout()
            .then(res => {
/*                dispatch({
                             type: "delete-profile"
                         });*/
                dispatch({
                             type: "change-isValid",
                             isValid: true
                         });
                history.push("/");
            })
    }

    return (
        <>
            <div className="container">
                <div className="row align-items-center g-lg-5 py-5">
                    <div className="col-lg-6 text-center text-lg-start">
                        <img className="img-fluid" src="/images/LoginPage/login.png"/>
                    </div>
                    <div className="col-md-10 mx-auto col-lg-5">
                        <form className="p-4 p-md-5 border rounded-3 bg-light shadow">
                            <div className="form-floating mb-3 has-validation">
                                <input required={true}
                                       type="email"
                                       className={`form-control ${isValid ? "" : "is-invalid"}`}
                                       id="loginEmail"
                                       placeholder="name@example.com"
                                       defaultValue={user.username}
                                       onChange={(e) => setUser(
                                           {...user, username: e.target.value})}/>
                                <label htmlFor="loginEmail">Email address</label>
                                <div className="invalid-feedback">
                                    Invalid email address
                                </div>
                            </div>

                            <div className="form-floating mb-3">
                                <input required={true}
                                       type="password"
                                       className={`form-control ${isValid ? "" : "is-invalid"}`}
                                       id="loginPassword"
                                       placeholder="Password"
                                       defaultValue={user.password}
                                       onChange={(e) => setUser(
                                           {...user, password: e.target.value})}/>
                                <label htmlFor="loginPassword">Password</label>
                                <div className="invalid-feedback">
                                    Invalid password
                                </div>
                            </div>

                            <button className="w-100 btn btn-lg btn-primary"
                                    onClick={(e) => loginHandler(e)}>
                                Login
                            </button>

                            {/***********TODO: Only for testing, remember to remove***************/}
                            <br/><br/>
                            <button className="w-100 btn btn-lg btn-success"
                                    onClick={(e) => logoutHandler(e)}>
                                logout
                            </button>


                            <hr className="my-4"/>
                            <div className="text-center mb-2 text-black-50">Don't have an account?
                            </div>
                            <Link className="w-100 btn btn-lg btn-info" to="/register">
                                Create an account
                            </Link>

                        </form>
                    </div>

                </div>
                {JSON.stringify(profile)}
            </div>

        </>
    )
}

export default LoginScreen;