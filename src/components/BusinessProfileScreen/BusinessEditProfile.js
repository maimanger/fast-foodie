import React, {useState} from "react";
import moment from "moment";

const BusinessEditProfile = ({profile, setEdit}) => {

    return (
        <>
            <div className="mb-4 d-flex align-items-center">
                <h3 className="text-danger fw-bold my-0">Profile</h3>
                <button onClick={() => setEdit(false)}
                        className="btn btn-danger rounded-pill fw-bold  ms-auto me-0 me-sm-2 me-xl-5 px-3">
                    Save
                </button>
            </div>

            <div className="col-12 col-lg-9 d-flex flex-column">


                {/***************************Edit Name*****************************/}
                <div className="form-floating h-auto mb-4">
                    <input type="text" id="editName" placeholder="Edit" maxLength="50"
                           className="form-control bg-transparent border border-secondary
                                          wd-profile-edit"
                           defaultValue={profile.firstName}/>
                    <label htmlFor="editName" className="wd-text-18">First Name</label>
                </div>

                <div className="form-floating h-auto mb-4">
                    <input type="text" id="editName" placeholder="Edit" maxLength="50"
                           className="form-control bg-transparent border border-secondary
                                          wd-profile-edit"
                           defaultValue={profile.lastName}/>
                    <label htmlFor="editName" className="">Last Name</label>
                </div>

                {/*************************Edit Location**************************/}
                <div className="form-floating h-auto mb-4">
                    <input type="text" id="editLocation" placeholder="Edit" maxLength="50"
                           className="form-control bg-transparent border border-secondary
                                           wd-profile-edit"
                           defaultValue={profile.location}/>
                    <label htmlFor="editLocation" className="wd-text-18">Location</label>
                </div>

                {/*************************Edit Email**************************/}
                <div className="form-floating h-auto mb-4">
                    <input type="email" id="editEmail" placeholder="Edit" maxLength="50"
                           className="form-control bg-transparent border border-secondary
                                           wd-profile-edit"
                           defaultValue={profile.email}/>
                    <label htmlFor="editEmail" className="wd-text-18">Email</label>
                </div>
            </div>

            </>
    )

}

export default BusinessEditProfile;