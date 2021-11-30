import React from "react";
import './index.css';
import messageList from "../messages.json";

const MessagesChatboxComponent = () => {
    const messages = messageList.messages;
    const user = {
        name: "user1",
        city: "Austin",
        state: "Texas",
        profile_img: "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/two-emoji-badges-in-love-royalty-free-image-1603731603.jpg"
    }
    const isFollowing = false;
    const me = "me"

    return (
        <div className={"messagescreen-right-container"}>

            <ul className="list-group position-relative">

                {/********************* chat box header ***********************/}
                <li className="list-group-item border-0 d-flex align-items-center justify-content-between messagescreen-chatbox-header">

                    <div className={"d-flex"}>
                        {/*user img*/}
                        <div className={"me-3"}>
                            <img src={user['profile_img']} alt="img" className={"rounded-3 messagescreen-profile-img"}/>
                        </div>

                        {/*user name*/}
                        <div>
                            <h5 className={"fw-bold homescreen-h-fit me-3 my-0"}>{user.name}</h5>
                            <div className={"homepage-color-dimgray"}>{user.city}, {user.state}</div>
                        </div>
                    </div>

                    {/*follow button*/}
                    <button
                        className={"btn btn-outline-light text-black btn-sm"}>{isFollowing ? "Unfollow" : "Follow"}</button>

                </li>

                {/********************* chat box conversations ***********************/}

                <li className={"list-group-item border-0 border-top border-bottom border-light w-100 h-100 position-relative"}>
                    <div className={"messagescreen-messagesbox-container position-absolute p-3"}>
                        {messages.map(message => {
                            return (
                                <div className={" mb-1"}>
                                    {message.sender === me ? (
                                        <div className={"d-flex justify-content-end"}>
                                            <div className={"homescreen-w-fit"}>
                                                <div className={"w-100 d-flex justify-content-end mb-1"}>
                                                    <div
                                                        className={"messagescreen-chat-item-container bg-info text-white rounded-3 p-3"}>
                                                        {message.text}
                                                    </div>
                                                </div>
                                                <p className={"text-end homepage-color-dimgray"}>{message.time}</p>
                                            </div>
                                        </div>
                                    ) : (
                                        <div>
                                            {/*sender name*/}
                                            <div className={"d-flex mb-1"}>
                                                <img src={user['profile_img']} alt="img"
                                                     className={"messagescreen-chat-item-sender-img rounded-3 me-2"}/>
                                                <div className={"fw-bold"}>{user.name}</div>
                                            </div>
                                            {/*message from sender*/}
                                            <div
                                                className={"messagescreen-chat-item-container bg-light rounded-3 p-3 ms-5"}>
                                                {message.text}
                                            </div>
                                            <div className={"ms-5 mt-1 homepage-color-dimgray"}>{message.time}</div>
                                        </div>
                                    )}
                                </div>

                            )
                        })}
                    </div>
                </li>


                {/****************** send message input box *******************/}
                <li className={"list-group-item border-0 d-flex py-4 px-3 align-items-center messagescreen-send-message-input-container"}>
                    <div className={"w-100 p-0 d-flex align-items-center h-100"}>
                        <textarea rows={1} placeholder={"Please enter a message"}
                                  className={"messagescreen-send-message-input p-2 w-100 h-100"}/>
                    </div>
                    <div className={"ms-2"}>
                        <button className={"btn btn-info"}>Send</button>
                    </div>
                </li>
            </ul>
        </div>
    )
}

export default MessagesChatboxComponent;
