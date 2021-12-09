import React from "react";
import './index.css';
import * as truncate from '../../CustomerHomeScreen/utils/truncate';
import Sign from "./Sign";
import {Link} from "react-router-dom";
import RestaurantStars from "../../ProfileScreen/RestaurantStars";
import BusinessStars from "../../BusinessHomeScreen/BusinessStars";

const SearchResultCard = ({restaurantFromSearchApi, restaurantFromDetailApi}) => {
    const restaurantFromDB = {
        review: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi, enim esse id, iure minus nam nostrum numquam omnis perferendis quae reiciendis sapiente sit, totam velit voluptas. Dolor eos iste numquam!",
        isClaimed: true,
        service: {
            takeout: false,
            delivery: true
        }
    }

    return (
        <Link className={"searchscreen-card-container w-100 border border-light rounded-2 p-4 d-flex text-decoration-none text-black"} to={`/restaurants/${restaurantFromSearchApi.id}`}>
            <div className={"searchscreen-card-img-container me-4 rounded-3"}>
                <img src={restaurantFromSearchApi['image_url']} className={"me-4 rounded-3"} alt="img"/>
            </div>
            <div className={"w-100"}>
                {/******** search result card: upper **********/}
                <div>

                    {/*****************  restaurant name  *************/}
                    <div>
                        <h5 className={"fw-bold"}>{restaurantFromSearchApi.name}</h5>
                    </div>

                    {/***************  rating + review  ****************/}
                    <div className={"mb-2"}>
                        <span><BusinessStars restaurant={restaurantFromSearchApi} /> </span>
                        {/*<span> | </span>*/}
                        {/*<span>{restaurantFromSearchApi['review_count']}</span>*/}
                    </div>

                    {/***************  restaurant categories  **************/}
                    <div className={"d-flex  mb-2 searchscreen-categories-container"}>
                        {(restaurantFromSearchApi.categories.map(category=>category.title)).map(category=>{
                            return (
                                <div className={"bg-light me-2 px-1 rounded-2 fw-bold homescreen-w-fit homepage-color-dimgray"}>{category}</div>
                            )
                        })}
                        <div>{restaurantFromSearchApi['price']}</div>
                    </div>

                    {/****************  open status  ******************/}
                    {/*<div className={"fw-bold"}>*/}
                    {/*    {restaurantFromDetailApi['hours'][0]['is_open_now'] ? (*/}
                    {/*        <div className={"text-success"}>Open</div>*/}
                    {/*    ) : (*/}
                    {/*        <div className={"text-danger"}>Closed</div>*/}
                    {/*    )}*/}
                    {/*</div>*/}

                    {/******************  one review  ****************/}
                    {/*<div className={"d-flex searchscreen-card-review-container"}>*/}
                    {/*    <div className={"me-2 pt-1"}><i className="far fa-comment-alt" /></div>*/}
                    {/*    <div className={"homepage-color-dimgray"}>*/}
                    {/*        {truncate.textTruncate(restaurantFromDB.review, 130)}*/}
                    {/*    </div>*/}
                    {/*</div>*/}
                </div>


                {/******** search result card: bottom **********/}
                {/*{restaurantFromDB.isClaimed && (*/}
                {/*    <div >*/}
                {/*        <hr className={"w-100 homescreen-color-gray"}/>*/}
                {/*        <div className={"d-flex justify-content-between align-items-center"}>*/}
                {/*            <div className={"d-flex"}>*/}
                {/*                <div>*/}
                {/*                    <Sign bool={restaurantFromDB.service['delivery']} />*/}
                {/*                    <span className={"mx-2 fw-bold"}>Delivery</span>*/}
                {/*                </div>*/}
                {/*                <div>*/}
                {/*                    <Sign bool={restaurantFromDB.service['takeout']} />*/}
                {/*                    <span className={"mx-2 fw-bold"}>Takeout</span>*/}

                {/*                </div>*/}
                {/*            </div>*/}
                {/*            <div>*/}
                {/*                {restaurantFromDB.isClaimed && (*/}
                {/*                    <button className={"btn btn-outline-light text-black text-nowrap"}>Start Order</button>*/}
                {/*                )}*/}
                {/*            </div>*/}
                {/*        </div>*/}
                {/*    </div>*/}
                {/*)}*/}
            </div>
        </Link>
    )
}

export default SearchResultCard;