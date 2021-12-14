import React from "react";
import './index.css';

const PrivacyContent = () => {
    return (
        <div className={"p-5 privacy-policy-content-container"}>
            <h3 className={"text-center mb-3"}>Privacy Policy</h3>
            <p className={"mb-5"}>
                <span className={"fw-bold"}>Last updated on December 13, 2021. </span>
                <span >This Privacy Policy is effective immediately for users registering accounts after that date.</span>
            </p>

            <h5>WHO WE ARE AND WHY WE NEED YOUR DATA</h5>
            <p className={"mb-5"}>
                Fast-Foodie intends to bring everyone health and happiness through delicious food. To do so, we created this interactive platform to connect restaurant owners with customers by making countless restaurant information easily accessible to millions of users. A part of our service is based on information we collect from you and we only use that information where we have a proper legal basis. We wrote this policy to help you understand what information we collect, how we collect and use it, and what choices you have about it. We welcome your questions and comments on this policy.
            </p>

            <h5>HOW TO COLLECT AND USE YOUR DATA</h5>
            <ul className={"mb-5"}>
                <li className={"mb-2"}>
                    <span className={"fw-bold"}>Account information.</span> When you sign up to use Fast-Foodie, you voluntarily share certain personal information including your name, email address, address, zip code, photos, and any other information you give us. Some information will be publicly displayed as your account profile. We also use your address to recommend restaurants near to you.
                </li>
                <li className={"mb-2"}>
                    <span className={"fw-bold"}>Public contents.</span> The information you post to the website is for public consumption, including your reviews, photos, following and follower lists, etc. We will display this information on the website. We may remove any offensive or discriminative posts without obtaining your permission.
                </li>
                <li className={"mb-2"}>
                    <span className={"fw-bold"}>Cookie data.</span> We use “cookies” (small text files sent by your computer each time you visit our website, unique to your Fast-Foodie account or your browser). For example, we use cookies to store your information about you, such as your username and email address. Information stored in cookies allows us to identify you when you use Fast-Foodie and improve your use of the website.
                </li>
            </ul>

            <h5>CHOICES YOU HAVE ABOUT YOUR DATA</h5>
            <ul className={"mb-5"}>
                <li>Edit information in your account profile at any time. </li>
                <li>Edit or delete public posts and photos at any time. </li>
            </ul>

            <h5>HOW LONG YOUR INFORMATION WILL BE KEPT</h5>
            <p className={"mb-5"}>We keep your information only so long as we need it to provide Fast-Foodie to you and fulfill the purposes described in this policy. When we no longer need to use your information and there is no need for us to keep it to comply with our legal or regulatory obligations, we will either remove it from our systems or depersonalize it so that we cannot identify you.</p>
            <p>Thank you for your interest and trust in Fast-Foodie!</p>


        </div>
    )
}

export default PrivacyContent;