import React from "react";

const BusinessRegister = () => {
    return (
        <div className="mb-4">
            <label className="form-label" htmlFor="registerFile">
                Upload supporting documents
            </label>
            <input type="file" id="registerFile"
                   className="form-control"/>
        </div>
    )
}

export default BusinessRegister;