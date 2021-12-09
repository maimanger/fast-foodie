import React from "react";
import './index.css';
import {textTruncate} from "../../../CustomerHomeScreen/utils/truncate";

const AdminInboxComponent = () => {
    const unreadCount = 105;
    const messages = [
        {
            sender: "user1",
            time: "2021/10/21 17:23:01",
            title: "This is a Title",
            isRead: true,
            text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam itaque laboriosam perferendis recusandae voluptate. Ad autem deserunt dolore dolorem eos error id impedit itaque minima recusandae? Ducimus omnis perferendis vel.",
        },
        {
            sender: "user2",
            time: "2021/10/21 17:23:01",
            title: "This is a Title",
            isRead: true,
            text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam itaque laboriosam perferendis recusandae voluptate. Ad autem deserunt dolore dolorem eos error id impedit itaque minima recusandae? Ducimus omnis perferendis vel.",
        },
        {
            sender: "user3",
            time: "2021/10/21 17:23:01",
            title: "This is a Title",
            isRead: true,
            text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam itaque laboriosam perferendis recusandae voluptate. Ad autem deserunt dolore dolorem eos error id impedit itaque minima recusandae? Ducimus omnis perferendis vel.",
        },
        {
            sender: "user4",
            time: "2021/10/21 17:23:01",
            title: "This is a Title",
            isRead: false,
            text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam itaque laboriosam perferendis recusandae voluptate. Ad autem deserunt dolore dolorem eos error id impedit itaque minima recusandae? Ducimus omnis perferendis vel.",
        },
        {
            sender: "user5",
            time: "2021/10/21 17:23:01",
            title: "This is a Title",
            isRead: false,
            text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam itaque laboriosam perferendis recusandae voluptate. Ad autem deserunt dolore dolorem eos error id impedit itaque minima recusandae? Ducimus omnis perferendis vel.",
        }
    ]

    return (
        <div>
            <h3 className={"fw-bold"}>Inbox</h3>
            <div>
                {unreadCount} unread meassages
            </div>

            <ul className={"list-group"}>
                <li className={"list-group-item d-flex bg-light fw-bold"}>
                    <div className={"admin-inbox-column1-width"}>From</div>
                    <div className={"admin-inbox-column2-width"}>Title</div>
                    <div className={"admin-inbox-column3-width"}>Message</div>
                    <div className={"admin-inbox-column4-width"}>Received On</div>
                </li>

                {/***********************  list of messages  *************************/}
                {messages.map(message=>{
                    return (
                        <li className={"list-group-item d-flex admin-inbox-list-hover-effect"}>
                            <div className={`admin-inbox-column1-width ${!message.isRead && "fw-bold"}`}>{message.sender}</div>
                            <div className={`admin-inbox-column2-width ${!message.isRead && "fw-bold"}`}>{message.title}</div>
                            <div className={"admin-inbox-column3-width"}>{textTruncate(message.text,50)}</div>
                            <div className={`admin-inbox-column4-width ${!message.isRead && "fw-bold"}`}>{message.time}</div>
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}

export default AdminInboxComponent;