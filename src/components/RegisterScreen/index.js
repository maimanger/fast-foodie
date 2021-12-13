import React, {useState} from "react";
import "./Register.css"
import {Link, useHistory} from "react-router-dom";
import states from "./states.json";
import CustomerRegister from "./CustomerRegister";
import BusinessRegister from "./BusinessRegister";
import {useDispatch, useSelector} from "react-redux";
import {register} from "../../services/profileService";
import LogoHeader from "../headers/LogoHeader";

const RegisterScreen = () => {

    const [role, setRole] = useState("customer");
    const [firstName, setFirstName] = useState("FirstName");
    const [lastName, setLastName] = useState("LastName");
    const [email, setEmail] = useState("example@123.com");
    const [password, setPassword] = useState("abc123");
    const [address1, setAddress1] = useState("1234 Main St");
    const [address2, setAddress2] = useState("Apt123");
    const [city, setCity] = useState("CityName");
    const [state, setState] = useState("AL");
    const [zip, setZip] = useState("00000");
    const [file, setFile] = useState("http://www.africau.edu/images/default/sample.pdf");

    const isValid = useSelector(state => state.profileVerification);
    const [isValidPassword, setIsValidPassword] = useState(false);
    const [isAgreed, setIsAgreed] = useState(false);

    let newUser = {};
    if (role === "customer") {
        newUser = {
            "role": role,
            "username": email.trim(),
            "password": password,
            "email": email.trim(),
            "firstName": firstName.trim(),
            "lastName": lastName.trim(),
            "location": `${city.trim()}, ${state}`,
            "addressDetail": `${address1.trim()}, ${address2.trim()}, ${city.trim()}, ${state} ${zip.trim()}`,
        };
    } else {
        newUser = {
            "role": role,
            "username": email.trim(),
            "password": password,
            "email": email.trim(),
            "firstName": firstName.trim(),
            "lastName": lastName.trim(),
            "businessData": {
                "file_url": file.trim()
            }
        };
    }

    let isFinished = false;
    if (newUser.role === "customer") {
        isFinished = (newUser.username !== ""
                      && newUser.password !== ""
                      && newUser.firstName !== ""
                      && newUser.lastName !== ""
                      && newUser.location !== ""
                      && newUser.addressDetail !== "")
    } else {
        isFinished = (newUser.username !== ""
                      && newUser.password !== ""
                      && newUser.firstName !== ""
                      && newUser.lastName !== ""
                      && newUser.businessData.file_url !== "")
    }

    const history = useHistory();
    const dispatch = useDispatch();

    const registerHandler = (e) => {
        e.preventDefault();
        if (isValidPassword && isAgreed && isFinished) {
            register(newUser)
                .then(res => {
                          if (res.status === 404) {
                              dispatch({
                                           type: "change-isValid",
                                           isValid: false
                                       });
                          } else if (res.status === 200) {
                              newUser.role === "customer" && history.push('/profile');
                              newUser.role === "business" && history.push('/business/profile')
                          }
                      }
                )
        }
    }

    return (
        <div>
            <LogoHeader />

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

                                {/************************Select Role********************************/}
                                <div className="form-floating mb-3">
                                    <select className="form-select " id="regeisterSelect"
                                            defaultValue="customer"
                                            onChange={
                                                e => {
                                                    setRole(e.target.value);
                                                }
                                            }>
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

                                    {/************************Input FirstName*************************/}
                                    <div className="col-md-6 has-validation">
                                        <label htmlFor="registerFirstName" className="form-label">
                                            First Name
                                        </label>
                                        <input type="text"
                                               defaultValue={firstName}
                                               className={`form-control ${(!isFinished && firstName
                                                   === "") ? "is-invalid"
                                                   : ""}`}
                                               required={true}
                                               id="registerFirstName"
                                               onChange={(e) => {
                                                   setFirstName(e.target.value);
                                               }}/>
                                        <div className="invalid-feedback">
                                            Please fill out
                                        </div>
                                    </div>

                                    {/***********************Input LastName*************************/}
                                    <div className="col-md-6">
                                        <label htmlFor="registerLastName" className="form-label">
                                            Last Name
                                        </label>
                                        <input type="text"
                                               defaultValue={lastName}
                                               className={`form-control ${(!isFinished && lastName
                                                   === "") ? "is-invalid"
                                                   : ""}`}
                                               required={true}
                                               id="registerLastName"
                                               onChange={(e) => {
                                                   setLastName(e.target.value);
                                               }}/>
                                        <div className="invalid-feedback">
                                            Please fill out
                                        </div>
                                    </div>
                                </div>

                                {/***********************Input Email*************************/}
                                <div className="mb-3 has-validation">
                                    <label className="form-label" htmlFor="registerEmail">
                                        Your Email
                                    </label>
                                    <input type="email" id="registerEmail"
                                           defaultValue={email}
                                           className={`form-control ${(!isValid || (!isFinished && email
                                               === ""))
                                               ? "is-invalid" : ""}`}
                                           placeholder="example@123.com"
                                           required={true}
                                           onChange={(e) => {
                                               setEmail(e.target.value);
                                           }}/>
                                    <div className="invalid-feedback">
                                        Invalid email address
                                    </div>
                                </div>

                                {/***********************Input Password*************************/}
                                <div className="mb-3">
                                    <label className="form-label" htmlFor="registerPassword">
                                        Password
                                    </label>
                                    <input type="password"
                                           defaultValue={password}
                                           id="registerPassword"
                                           className={`form-control 
                                       ${((!isFinished && password === "")) ? "is-invalid" : ""}`}
                                           required={true}
                                           onChange={(e) => {
                                               setPassword(e.target.value);
                                           }}/>
                                    <div className="invalid-feedback">
                                        Please fill out
                                    </div>
                                </div>

                                {/***********************Repeat Password*************************/}
                                <div className="mb-3 has-validation">
                                    <label className="form-label" htmlFor="registerPassword2">
                                        Repeat your password
                                    </label>
                                    <input type="password"
                                           id="registerPassword"
                                           className={`form-control ${isValidPassword ? ""
                                               : "is-invalid"}`}
                                           required={true}
                                           onChange={(e) => {
                                               setIsValidPassword(password === e.target.value);
                                           }}/>
                                    <div className="invalid-feedback">
                                        Passwords don't match, please input again.
                                    </div>
                                </div>

                                {/***********************Input Address*************************/}
                                {role === "customer" && <CustomerRegister setAddress1={setAddress1}
                                                                          setAddress2={setAddress2}
                                                                          setCity={setCity}
                                                                          setState={setState}
                                                                          setZip={setZip}
                                                                          isFinished={isFinished}
                                />}

                                {/***********************Input business file*************************/}
                                {role === "business" && <BusinessRegister setFile={setFile}
                                                                          isFinished={isFinished}/>}


                                {/***********************Agree Privacy Policy*************************/}
                                <div
                                    className="form-check d-flex justify-content-center mb-3 has-validation">
                                    <input required={true}
                                           className={`form-check-input me-2 ${isAgreed ? ""
                                               : "is-invalid"}`}
                                           type="checkbox"
                                           value="agreed"
                                           id="registerCheckbox"
                                           onChange={(e) => {
                                               if (e.target.checked) {
                                                   setIsAgreed(true);
                                               } else {
                                                   setIsAgreed(false);
                                               }
                                           }}/>
                                    <label className="form-check-label" htmlFor="registerCheckbox">
                                        I agree all statements in the <Link to="#"
                                                                            className="text-info wd-register-link-text">Privacy
                                        Policy</Link>
                                    </label>
                                </div>

                                {/***********************Register Btn*************************/}
                                <div className="d-flex justify-content-center">
                                    <button className="btn btn-primary rounded-pill btn-lg py-1"
                                            onClick={(e) => registerHandler(e)}>
                                        Register
                                    </button>
                                </div>

                            </form>

                        </div>
                    </div>
                </div>

               {/* {JSON.stringify(newUser)}*/}
            </div>
        </div>


    )
}

export default RegisterScreen;