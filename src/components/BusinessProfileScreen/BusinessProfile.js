import React, {useState} from "react";
import moment from "moment";

const BusinessProfile = ({profile, setEdit}) => {

    return (
        <>
            <div className="mb-4 d-flex align-items-center">
                <h3 className="text-danger fw-bold my-0">Profile</h3>
                <button onClick={() => setEdit(true)}
                        className="btn btn-danger rounded-pill fw-bold  ms-auto me-0 me-sm-2 me-xl-5 px-3">
                    Edit
                </button>
            </div>

            <div className="row mb-4 d-flex align-content-center">
                <div className="col-12 col-md-6">
                    <h5 className="fw-bold">First Name : </h5>
                </div>
                <div className="col-12 col-md-6">
                    <h5>{profile.firstName}</h5>
                </div>
            </div>

            <div className="row mb-4 d-flex align-content-center">
                <div className="col-12 col-md-6">
                    <h5 className="fw-bold">Last Name : </h5>
                </div>
                <div className="col-12 col-md-6">
                    <h5>{profile.lastName}</h5>
                </div>
            </div>

            <div className="row mb-4 d-flex align-content-center">
                <div className="col-12 col-md-6">
                    <h5 className="fw-bold">Location : </h5>
                </div>
                <div className="col-12 col-md-6">
                    <h5>{profile.location}</h5>
                </div>
            </div>

            <div className="row mb-4 d-flex align-content-center">
                <div className="col-12 col-md-6">
                    <h5 className="fw-bold">Email : </h5>
                </div>
                <div className="col-12 col-md-6">
                    <h5>{profile.email}</h5>
                </div>
            </div>

            <div className="row mb-4 d-flex align-content-center">
                <div className="col-12 col-md-6">
                    <h5 className="fw-bold">Business : </h5>
                </div>
                <div className="col-12 col-md-6">
                    <h5>{profile.restaurant.name}</h5>
                </div>
            </div>

            <div className="row mb-4 d-flex align-content-center">
                <div className="col-12 col-md-6">
                    <h5 className="fw-bold">Joined since : </h5>
                </div>
                <div className="col-12 col-md-6">
                    <h5>{moment(profile.dateJoined).format("LL")}</h5>
                </div>
            </div>

        </>
    )

};

export default BusinessProfile;