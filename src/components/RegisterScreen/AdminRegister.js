import React from "react";

const AdminRegister = () => {
    return (
        <div className="mb-4">
            <label className="form-label" htmlFor="registerCode">
                Admin verification code
            </label>
            <input type="text" id="registerCode"
                   className="form-control"/>
        </div>
    )
}

export default AdminRegister;