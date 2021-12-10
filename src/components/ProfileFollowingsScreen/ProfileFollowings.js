import React from "react";
import users from "../../reducers/data/profile/users.json"
import ProfileFollowingItem from "./ProfileFollowingItem";

const ProfileFollowings = ({followings=[]}) => {

    return (
        <>
            {followings.length === 0 && <div>You have no following at this time.</div>}

            <ul className="list-group list-group-flush">
                {followings.map(following => {return (
                    <ProfileFollowingItem following={following} />
                )})}

            </ul>
        </>

    )

}

export default ProfileFollowings;