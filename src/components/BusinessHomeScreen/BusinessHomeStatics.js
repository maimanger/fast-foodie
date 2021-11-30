import React from "react";
import moment from "moment";

const BusinessHomeStatics = () => {
    return (
        <div className="d-flex flex-column">

            <h5 className="text-danger fw-bold mb-3">Statics</h5>


             < div className="mb-3">
                 <h6 className="fw-bold">Birthday</h6>
                 {moment(profile.birthday).format('LL')}
             </div>



             <div className="mb-3">
                 <h6 className="fw-bold">Location</h6>
                 Boston, MA
             </div>


            <div className="mb-3">
                <h6 className="fw-bold">Joined Since</h6>
                {moment(profile.dateJoined).format('MMMM YYYY')}
            </div>


        </div>
    )
}

export default BusinessHomeStatics;