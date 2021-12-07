import React from "react";
import moment from "moment";

const ProfileAboutMe = ({profile}) => {
    return (
        <div className="d-flex flex-column">

            <h5 className="text-danger fw-bold mb-3">About Me</h5>

            {profile.customerData.visibility.birthday &&
             < div className="mb-3">
                 <h6 className="fw-bold">Birthday</h6>
                 {profile.birthday &&
                     moment(profile.birthday).format('LL')}
             </div>
            }

            {profile.customerData.visibility.location &&
             <div className="mb-3">
                 <h6 className="fw-bold">Location</h6>
                 {profile.location}
             </div>
            }

            <div className="mb-3">
                <h6 className="fw-bold">Joined Since</h6>
                {moment(profile.dateJoined).format('MMMM YYYY')}
            </div>


        </div>
    )
}

export default ProfileAboutMe;
