import React from "react";

const ProfileAboutMe = () => {
    return (
        <div className="d-flex flex-column">

            <h5 className="text-danger fw-bold mb-3">About Me</h5>

            <div className="mb-3">
                <h6 className="fw-bold">Birthday</h6>
                November 1, 2021
            </div>

            <div className="mb-3">
                <h6 className="fw-bold">Location</h6>
                Boston, MA
            </div>

            <div className="mb-3">
                <h6 className="fw-bold">Joined Since</h6>
                September 2019
            </div>
        </div>
    )
}

export default ProfileAboutMe;
