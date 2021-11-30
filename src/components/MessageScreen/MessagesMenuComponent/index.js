import React from "react";
import './index.css';

const people = [
    {
        name: "user1",
        profile_img: "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/two-emoji-badges-in-love-royalty-free-image-1603731603.jpg",
        isRead: false
    },
    {
        name: "user2",
        profile_img: "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/two-emoji-badges-in-love-royalty-free-image-1603731603.jpg",
        isRead: true
    },
    {
        name: "user3",
        profile_img: "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/two-emoji-badges-in-love-royalty-free-image-1603731603.jpg",
        isRead: false
    },
    {
        name: "user4",
        profile_img: "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/two-emoji-badges-in-love-royalty-free-image-1603731603.jpg",
        isRead: false
    },
    {
        name: "user5",
        profile_img: "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/two-emoji-badges-in-love-royalty-free-image-1603731603.jpg",
        isRead: false
    },
    {
        name: "user6",
        profile_img: "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/two-emoji-badges-in-love-royalty-free-image-1603731603.jpg",
        isRead: false
    },
    {
        name: "user7",
        profile_img: "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/two-emoji-badges-in-love-royalty-free-image-1603731603.jpg",
        isRead: false
    },
    {
        name: "user8",
        profile_img: "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/two-emoji-badges-in-love-royalty-free-image-1603731603.jpg",
        isRead: false
    },
    {
        name: "user9",
        profile_img: "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/two-emoji-badges-in-love-royalty-free-image-1603731603.jpg",
        isRead: false
    },
    {
        name: "user10",
        profile_img: "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/two-emoji-badges-in-love-royalty-free-image-1603731603.jpg",
        isRead: false
    }
]


const MessagesMenuComponent = ({connections}) => {
    return (
        <div className={"w-100 h-100"}>
            <ul className={"list-group h-100"}>
                <li className={"list-group-item border-0"}>
                    <h3 className={"fw-bold p-3"}>Messages</h3>
                </li>
                <li className={"list-group-item h-100 border-0 position-relative"}>

                    <ul className={"list-group position-absolute messagescreen-left-scroller"}>
                        {people.map((user,index) => {
                            return (
                                <li className={"list-group-item border-0 px-5"}>
                                    <div className={`w-100 py-3 border-light d-flex justify-content-between ${index!==0 && "border-top border-top-1"}`}>
                                        <div className={"d-flex"}>

                                            {/*profile img*/}
                                            <div className={"me-3"}>
                                                <img src={user['profile_img']} alt="img"
                                                     className={"rounded-3 messagescreen-profile-img"}/>
                                            </div>

                                            {/*user name*/}
                                            <div className={"h-100 d-flex align-items-center"}>
                                                <h5 className={"fw-bold homescreen-h-fit me-3 my-0"}>{user.name}</h5>

                                                {/*unread sign*/}
                                                {!user.isRead && (
                                                    <i className="fas fa-circle text-info messagescreen-menu-new-message-sign"/>
                                                )}
                                            </div>
                                        </div>

                                        {/*right arrow*/}
                                        <div className={"text-secondary d-flex align-items-center"}>
                                            <i className="fas fa-chevron-right"/>
                                        </div>
                                    </div>
                                </li>
                            )
                        })}


                    </ul>

                </li>
            </ul>
        </div>
    )
}

export default MessagesMenuComponent;