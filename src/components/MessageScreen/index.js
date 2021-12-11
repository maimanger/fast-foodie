import React from "react";
import './index.css';
import MessageMenuComponent from "./MessagesMenuComponent";
import MessageChatboxComponent from "./MessagesChatboxComponent";
import SearchHeader from "../headers/SearchHeader";

const MessageScreen = () => {

    return (
        <div className={"bg-white w-100 messagescreen-container d-flex flex-column"}>
            <SearchHeader />

            <div className={"d-flex border border-light bg-white h-100"}>
                <div className="messagescreen-menu-component-container border-end p-0 h-100">
                    <MessageMenuComponent />
                </div>
                <div className="messagescreen-chatbox-component-container p-0">
                    <MessageChatboxComponent />
                </div>
            </div>

        </div>
    )
}

export default MessageScreen;