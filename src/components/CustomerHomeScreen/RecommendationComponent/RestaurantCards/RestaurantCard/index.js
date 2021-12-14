import React, {useEffect, useState} from "react";
import "./index.css";
import * as truncate from "../../../utils/truncate";
import {Link} from "react-router-dom";
import ReviewStars from "../../../../ProfileScreen/ReviewStars";
import BusinessStars from "../../../../BusinessHomeScreen/BusinessStars";
import {API_URL} from "../../../../../CONST";

const RestaurantCard = ({restaurant}) => {


    // Get reviews count of a restaurant
    const [reviewsCount, setReviewsCount] = useState(0);
    useEffect(() => {

        fetch(`${API_URL}/${restaurant.id}/reviews`)
            .then(res => res.json())
            .then(reviews => {
                if (reviews && reviews.length !== 0){
                    setReviewsCount(reviews.length);
                }
            })
    }, [])

    const img_url = restaurant && restaurant.image_url ? restaurant.image_url : 'https://img.freepik.com/free-photo/delicious-vietnamese-food-including-pho-ga-noodles-spring-rolls-white-table_181624-34062.jpg?size=626&ext=jpg';
    return (
        <Link className={"card homescreen-recommendation-card text-decoration-none text-black"} to={`/restaurants/${restaurant.id}`}>
            <img src={img_url} className={"card-img-top"} alt={"img"} />
            <div className={"homescreen-recommendation-card-body p-3"}>
                <h6 className={"card-title text-danger fw-bold"}>{restaurant.name}</h6>
                <div className={"d-flex"}>
                    {/*<div className={"me-2"}><BusinessStars restaurant={restaurant} /></div>*/}
                    <div className={"text-dark"}>{reviewsCount} reviews</div>
                </div>
                <div>
                    {truncate.arrayTruncate(restaurant.categories.map(category=>category.title), 42)}
                </div>
                <div>{restaurant.location.city}, {restaurant.location.state}</div>
            </div>
        </Link>
    )
}

export default RestaurantCard;