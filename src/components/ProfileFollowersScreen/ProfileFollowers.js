import React from "react";
import users from "../../reducers/data/profile/users.json"
import ProfileFollowerItem from "./ProfileFollowerItem";

const ProfileFollowers = () => {

    const followers = users.slice(1, users.length - 2);

    return (
        <>
            {followers.length === 0 && <div>You have no follower at this time.</div>}

            <ul className="list-group list-group-flush">
                {followers.map(follower => {return (
                    <ProfileFollowerItem follower={follower} />
                )})}

            </ul>
        </>

    )

}

export default ProfileFollowers;