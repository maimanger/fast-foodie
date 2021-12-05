import React from "react";
import bookmarks from "../../reducers/data/profile/bookmarks.json"
import ProfileBookmarkItem from "./ProfileBookmarkItem";

const ProfileBookmarks = () => {

    return (
        <>
            {bookmarks.length === 0 && <div>You have no bookmark at this time.</div>}

            <ul className="list-group list-group-flush">
                {bookmarks.map(bookmark => {return (
                    <ProfileBookmarkItem bookmark={bookmark} />
                )})}

            </ul>
        </>

    )

}

export default ProfileBookmarks;