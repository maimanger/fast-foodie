import React from "react";
import './index.css';
import Footer from "../CustomerHomeScreen/public-components/Footer";
import SimpleHeader from "../SearchScreen/public_components/SimpleHeader";

const AboutUs = () => {
    return (
        <div className={"w-100 homescreen-screen-container-default-size bg-white"}>
            {/***************  header  ****************/}
            <SimpleHeader />

            {/***************  banner  ****************/}
            <img src="https://i.ibb.co/Fb0LzvL/Screen-Shot-2021-11-30-at-10-52-36-AM.png" alt="img"
                 className={"w-100 mb-5"}/>

            <div className={"aboutscreen-main-container mt-5"}>
                {/***************  title  ****************/}
                <h2 className={"fw-bold text-center mb-5"}>Connecting consumers with great local businesses</h2>


                {/***************  topic1: reputation  ****************/}
                <div className={"d-flex align-items-center mb-5"}>
                    <div className={"me-5"}>
                        <h3 className={"fw-bold mb-5"}>Reputation matters</h3>
                        <p>Businesses earn great reviews on Fast Foodie the same way they build their reputations
                            in the community: by creating great services and customer experiences. Fast Foodie
                            works hard to feature content that reflects real experiences that consumers are
                            inspired to share.</p>
                    </div>
                    <img src="https://trust.yelp.com/wp-content/uploads/2021/02/Reputation-matters.png" alt={"img"}
                         className={"contactscreen-main-img"}/>
                </div>


                {/***************  topic2:  authenticity  ****************/}
                <div className={"d-flex align-items-center mb-5"}>
                    <img src="https://trust.yelp.com/wp-content/uploads/2020/11/graphic-3-honesty-and-fair-play-e1606857190424.png" alt={"img"}
                         className={"contactscreen-main-img me-5"}/>
                    <div className={"ms-5"}>
                        <h3 className={"fw-bold mb-5"}>Authenticity & reliability</h3>
                        <p>Under Fast Foodie’s policies, businesses are not permitted to ask their customers for reviews, and consumers can only write about their first-hand experiences. We also use an automated recommendation software, which is designed to identify and recommend the most reliable content.</p>
                    </div>
                </div>


                {/***************  topic3: misinformation  ****************/}
                <div className={"d-flex align-items-center mb-5"}>
                    <div className={"me-5"}>
                        <h3 className={"fw-bold mb-5"}>Fighting misinformation</h3>
                        <p>Fake news and deceptive behavior are unfortunately common on the web. We have teams and policies in place to protect our community of consumers and businesses, and prevent the spread of misinformation on Fast Foodie.</p>
                    </div>
                    <img src="https://trust.yelp.com/wp-content/uploads/2020/11/graphic-4-alerting-the-community-e1606857279853.png" alt={"img"}
                         className={"contactscreen-main-img"}/>
                </div>


                {/***************  topic2:  Data  ****************/}
                <div className={"d-flex align-items-center mb-5"}>
                    <img src="https://trust.yelp.com/wp-content/uploads/2021/02/Data-you-want-to-know.png" alt={"img"}
                         className={"contactscreen-main-img me-5"}/>
                    <div className={"ms-5"}>
                        <h3 className={"fw-bold mb-5"}>Data you want to know</h3>
                        <p>There are a lot of factors that go into choosing a business. We provide information like availability of gender-neutral restrooms, wheelchair accessibility, and open-to-all option without discrimination  — to help consumers feel comfortable with their decisions.</p>
                    </div>
                </div>
            </div>

            <Footer />

        </div>


    )
}

export default AboutUs;