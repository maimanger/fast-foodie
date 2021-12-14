import React from "react";
import './index.css';
import Footer from "../footers/Footer";
import SimpleHeader from "../headers/SimpleHeader";
import HeaderJustifiedBetween from "../headers/HeaderJustifiedBetween";

const AboutUs = () => {
    window.scrollTo(0, 0);
    return (
        <div className={"w-100 homescreen-screen-container-default-size bg-white"}>
            {/***************  header  ****************/}
            <HeaderJustifiedBetween />

            {/***************  banner  ****************/}
            <div className={"aboutscreen-banner-container w-100 position-relative mb-5"}>
                <div className={"aboutscreen-banner-text-container position-absolute  text-center"}>
                    <h1 className={"fw-bold"}>Who we are</h1>
                    <p>Our community is built on trust. Whether you're a consumer or a business owner, you put your trust in us to provide information people can rely on to make good decisions. We work hard to maintain that trust, and make Yelp truly helpful for everyone.</p>
                </div>
            </div>

            <div className={"aboutscreen-main-container mt-5 pt-5"}>
                {/***************  title  ****************/}
                <h2 className={"fw-bold text-center mb-5 pb-5"}>Connecting consumers with great local businesses</h2>


                {/***************  topic1: reputation  ****************/}
                <div className={"d-xl-flex align-items-center mb-2"}>
                    <div className={"ms-3 me-3"}>
                        <h3 className={"fw-bold mb-5"}>Reputation matters</h3>
                        <p>Businesses earn great reviews on Fast Foodie the same way they build their reputations
                            in the community: by creating great services and customer experiences. Fast Foodie
                            works hard to feature content that reflects real experiences that consumers are
                            inspired to share.</p>
                    </div>
                    <img src="https://trust.yelp.com/wp-content/uploads/2021/02/Reputation-matters.png" alt={"img"}
                         className={"contactscreen-main-img ms-3 me-3"}/>
                </div>


                {/***************  topic2:  authenticity  ****************/}
                <div className={"d-xl-flex align-items-center mb-2"}>
                    <div className={"ms-3 me-3 order-xl-1"}>
                        <h3 className={"fw-bold mb-5"}>Authenticity & reliability</h3>
                        <p>Under Fast Foodie’s policies, businesses are not permitted to ask their customers for reviews, and consumers can only write about their first-hand experiences. We also use an automated recommendation software, which is designed to identify and recommend the most reliable content.</p>
                    </div>
                    <img src="https://trust.yelp.com/wp-content/uploads/2020/11/graphic-3-honesty-and-fair-play-e1606857190424.png" alt={"img"}
                         className={"contactscreen-main-img ms-3 me-3 order-xl-0"}/>
                </div>


                {/***************  topic3: misinformation  ****************/}
                <div className={"d-xl-flex align-items-center mb-2"}>
                    <div className={"ms-3 me-3"}>
                        <h3 className={"fw-bold mb-5"}>Fighting misinformation</h3>
                        <p>Fake news and deceptive behavior are unfortunately common on the web. We have teams and policies in place to protect our community of consumers and businesses, and prevent the spread of misinformation on Fast Foodie.</p>
                    </div>
                    <img src="https://trust.yelp.com/wp-content/uploads/2020/11/graphic-4-alerting-the-community-e1606857279853.png" alt={"img"}
                         className={"contactscreen-main-img ms-3 me-3"}/>
                </div>


                {/***************  topic2:  Data  ****************/}
                <div className={"d-xl-flex align-items-center"}>
                    <div className={"ms-3 me-3 order-xl-1"}>
                        <h3 className={"fw-bold mb-5"}>Data you want to know</h3>
                        <p>There are a lot of factors that go into choosing a business. We provide information like availability of gender-neutral restrooms, wheelchair accessibility, and open-to-all option without discrimination  — to help consumers feel comfortable with their decisions.</p>
                    </div>
                    <img src="https://trust.yelp.com/wp-content/uploads/2021/02/Data-you-want-to-know.png" alt={"img"}
                         className={"contactscreen-main-img ms-3 me-3 order-xl-0"}/>
                </div>
            </div>

            <Footer />

        </div>


    )
}

export default AboutUs;