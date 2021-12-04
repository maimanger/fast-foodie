import React from "react";
import './index.css';
import {Link} from "react-router-dom";

const message = {
    sender: "user1",
    sender_email: "example@gmail.com",
    sender_img: "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/two-emoji-badges-in-love-royalty-free-image-1603731603.jpg",
    time: "2021/10/21 17:23:01",
    title: "This is a Title",
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam architecto blanditiis cum dolorem esse fugiat ipsam mollitia necessitatibus pariatur quam sunt, ut! Asperiores, autem consequatur cumque dicta, enim eveniet exercitationem facere facilis hic minima natus possimus quod reprehenderit repudiandae rerum soluta voluptates! Doloribus eum incidunt inventore maxime, molestias non vero! Error ipsa modi odit possimus quasi qui ratione rem vitae. Assumenda culpa cupiditate labore minima modi nam qui recusandae soluta temporibus. Animi, corporis, cum. Adipisci quis sint voluptatum. Autem corporis, deserunt id modi placeat ut? Dignissimos dolorum eius ex, excepturi iste pariatur, placeat praesentium quae quaerat quas repudiandae saepe? Iure!",
    order: "#1234"
}

const AdminInboxDetailComponent = () => {
    return (
        <div>
            <h3 className={"fw-bold"}>{message.title}</h3>
            <div className={"mb-5"}>
                <Link to={"/admin/inbox"} className={"homepage-color-dimgray"}>
                    <i className="fas fa-arrow-left me-2"/>
                    Back to Inbox
                </Link>
            </div>


            <ul className={"list-group"}>

                {/********************   message detail Title  ***********************/}
                <li className={"list-group-item d-flex justify-content-between border-0"}>
                    <div className={"d-flex"}>

                        {/*profile img*/}
                        <div className={"homescreen-w-fit me-3"}>
                            <img src={message.sender_img} alt="img" className={"messagescreen-profile-img rounded-3"}/>
                        </div>

                        {/*user info*/}
                        <div>
                            <div className={"fw-bold"}>From: {message.sender}</div>
                            <div className={"homepage-color-dimgray"}>{message.sender_email}</div>
                        </div>
                    </div>

                    {/*time*/}
                    <div className={"homepage-color-dimgray"}>{message.time}</div>
                </li>

                {/********************   message detail text  ***********************/}
                <li className={"list-group-item border-0 border-top border-top-1 p-5"}>
                    {message.text}
                </li>

                {/********************   message detail order  ***********************/}
                <li className={"list-group-item border-0 px-5"}>
                    Order: {message.order}
                </li>

                {/********************   message detail buttons  ***********************/}
                <li className={"list-group-item border-0 px-5"}>
                    <button className={"btn btn-light me-2"}>Reply</button>
                    <button className={"btn btn-outline-danger"}>Cancel Order</button>
                </li>


                {/********************   message detail reply  ***********************/}
                <li className={"admin-message-detail-reply-container list-group-item border-0 mt-5"}>
                    <textarea rows="5" placeholder={"Type your message here"} className={"w-100 border-secondary p-2 mb-3"}/>
                    <div>
                        <button className={"btn btn-primary me-2"}>Send</button>
                        <button className={"btn btn-light"}>Cancel</button>
                    </div>

                </li>

            </ul>


        </div>
    )
}

export default AdminInboxDetailComponent;