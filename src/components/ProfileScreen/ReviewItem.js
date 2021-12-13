import React from "react";
import {Link} from "react-router-dom";
import moment from "moment";
import RestaurantInfo from "./RestaurantInfo";
import ReviewStars from "./ReviewStars";

const defaultReview = {
    "user": "",
    "restaurant": {
        "id": "",
        "name": "",
        "image_url": "",
        "location": {
            "address1": "",
            "address2": "",
            "address3": "",
            "city": "",
            "zip_code": "",
            "country": "",
            "state": "",
            "display_address": [
                "",
                ""
            ],
            "cross_streets": ""
        },
        "rating": 5.0,
        "review_count": 0,
        "categories": [
            {
                "alias": "",
                "title": ""
            },
            {
                "alias": "",
                "title": ""
            }
        ],
        "price": ""
    },
    "time_created": "",
    "img": [
        {
            "url": "",
            "text": ""
        }
    ],
    "rating": 5.0,
    "text": ""
}

const ReviewItem = ({review = defaultReview}) => {
    let solidStars = [];
    for (let i = 1; i <= review.rating; i++) {
        solidStars.push(1);
    }
    let emptyStars = [];
    for (let j = 1; j <= 5 - review.rating; j++) {
        emptyStars.push(1);
    }

    return (
        <>
            {/************************Review Text**************************/}
            <p className="mb-2 text-opacity-75 text-black"
               style={{"white-space": "pre-line"}}>
                {review.text}
            </p>

            {/************************Review Img**************************/}
            <div
                className="d-lg-flex gap-3 col-8 col-sm-7 col-md-5 col-lg-10 col-xl-8 align-items-start">
                {review.img?.map(i => {
                    return (
                        <>{i && i.url !== "" &&
                             <div className="card text-white">
                                 <img src={i.url} style={{maxHeight: "300px"}}
                                      className="card-img-top img-fluid"/>
                                 {i.text &&
                                  <div
                                      className="card-img-overlay d-flex py-0 px-0 flex-column justify-content-end">
                             <span className="bg-black bg-opacity-50 px-2">
                             {i.text}
                             </span>
                                  </div>
                                 }
                             </div>
                            }</>
                    )
                })
                }
            </div>
        </>

    )
}

export default ReviewItem;