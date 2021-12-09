import React from "react";
import {Image} from "react-bootstrap";

const UserAvatarInfo = ({user}) => {
    return (
        <div className="row g-3 mb-2">
            {/************************User Avatar**************************/}
            <div className="col-auto">
                <img src={user.image_url}
                       className="img-fluid rounded-3"
                       style={{width: 70, height: 70, objectFit: "cover"}} />
            </div>
            {/************************User Info**************************/}
            <div className="col-12 col-md-8 d-flex flex-column">
                <div className="fw-bold text-info">
                    {user.firstName} {user.lastName}
                </div>
                <div className="text-black">
                    {user.location}
                </div>
                <div className="d-flex flex-nowrap text-muted">
                    <div className="me-3 text-black text-opacity-75">
                        <i className="fas fa-user-friends me-2 text-opacity-75 text-primary"></i>
                        <span className="text-nowrap">
                            {user.followersCount} <span className="d-none d-sm-inline">followers</span>
                        </span>
                    </div>
                    <div className="text-black text-opacity-75">
                        <i className="fas fa-comment me-2 text-opacity-75 text-primary"></i>
                        <span className="text-nowrap">
                            {user.reviewsCount} <span className="d-none d-sm-inline">reviews</span>
                        </span>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default UserAvatarInfo;