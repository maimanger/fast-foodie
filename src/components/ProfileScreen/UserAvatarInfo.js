import React from "react";

const UserAvatarInfo = ({user}) => {
    return (
        <div className="row g-3 mb-2">
            {/************************User Avatar**************************/}
            <div className="col-4 col-md-2">
                <img src={user.image_url}
                     className="img-fluid rounded-3"/>
            </div>
            {/************************User Info**************************/}
            <div className="col-12 col-md-8 d-flex flex-column">
                <div className="fw-bold text-info wd-profile-link-text">
                    {user.firstName} {user.lastName}
                </div>
                <div className="text-black">
                    {user.location}
                </div>
                <div className="d-flex flex-nowrap text-muted">
                    <div className="me-3 text-black text-opacity-75">
                        <i className="fas fa-user-friends me-2 text-opacity-75 text-primary"></i>
                        {user.followersCount}
                    </div>
                    <div className="text-black text-opacity-75">
                        <i className="fas fa-comment me-2 text-opacity-75 text-primary"></i>
                        {user.reviewsCount}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default UserAvatarInfo;