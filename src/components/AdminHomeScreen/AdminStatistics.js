import React from "react";
import notifications from "../../reducers/data/adminHome/adminNotifications.json"
import moment from "moment";

const AdminStatistics = ({notifications = []}) => {
    let claimsCount = 0;
    let reportsCount = 0;
    notifications.map(notification => {
        let now = moment().toDate();
        let time = moment(notification.time_created).toDate();
        if (notification.type === "new-claim") {

            if (time.getDate() === now.getDate() && time.getMonth() === now.getMonth()
                && time.getFullYear() === now.getFullYear()) {
                claimsCount++;
            }
        } /*else if (notification.type === "report-review") {

            if (time.getDate() === now.getDate() && time.getMonth() === now.getMonth()
                && time.getFullYear() === now.getFullYear()) {
                reportsCount++;
            }
        }*/
    })

    return (
        <div className="d-flex flex-column">
            <h5 className="text-danger fw-bold mb-3">Statistics</h5>

            <div className="mb-3">
                <h6 className="fw-bold">Today's Claims</h6>
                <span className="ms-2">
                {claimsCount.toLocaleString()}
                </span>
            </div>

            <div className="mb-3">
                <h6 className="fw-bold">Today's Reports</h6>
                <span className="ms-2">
                {reportsCount.toLocaleString()}
                </span>
            </div>

        </div>
    )
}
export default AdminStatistics;