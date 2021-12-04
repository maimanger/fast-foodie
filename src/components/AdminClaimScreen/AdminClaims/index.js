import React from "react";
import AdminClaimItem from "./AdminClaimItem";
const AdminClaims = ({claims}) => {

    return (
        <div  style={{"overflow-x":"auto"}}>
            <table className="table table-hover" align="center">
                <thead>
                <tr>
                    <th scope="col" className="text-center">From</th>
                    <th scope="col" className="text-center">Business</th>
                    <th scope="col" className="text-center">Time</th>
                    <th scope="col" className="text-center">File</th>
                    <th scope="col" className="text-center">Action</th>
                </tr>
                </thead>

                <tbody>
                {claims.map(claim => {
                    return (
                        <AdminClaimItem claim={claim}/>
                    )
                })}
                </tbody>
            </table>
        </div>
    )

}

export default AdminClaims;