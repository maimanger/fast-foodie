import React, {useEffect, useState} from "react";
import {useSelector, useDispatch} from "react-redux";
import {useParams} from "react-router-dom";
import "./restaurant.css";
import RestaurantStars from "../../ProfileScreen/RestaurantStars";
import HomepageActivityStar
    from "../../CustomerHomeScreen/RecentActivityComponent/RecentActivityCard/HomepageActivityStar";
import RestaurantStarForDetail from "./RestaurantStarForDetail";
import {checkRestaurantClaimStatus} from "../../../services/claimService";
import {fetchAllReviewsByRestaurantId} from "../../../services/reviewService";

const RestaurantImage = () => {
    const dispatch = useDispatch();

    // Get restaurant
    const restaurant = useSelector(state => state.restaurant);
    const {id} = useParams();

    const findRestaurantById = (dispatch) =>
        fetch(`http://localhost:8000/api/restaurants/${id}`)
            .then(res => res.json()).then(oneRestaurant => dispatch({
            type: 'fetch-restaurant',
            restaurant: oneRestaurant
        }));

    useEffect(() => findRestaurantById(dispatch)
        , [dispatch])
    // console.log(restaurant)
    // const restaurant = useSelector(state => state.restaurant);
    const absoluteStyle = {
        position: "absolute",
        left: "16%",
        bottom: "10%",
        color: "white",
    };

    // Check claim status
    const [isClaimed, setIsClaimed] = useState(false);
    useEffect(() => {
        checkRestaurantClaimStatus(id)
            .then(res => res.text())
            .then(response => {
                if (response === 'yes') {
                    setIsClaimed(true)
                } else {
                    setIsClaimed(false)
                }
            })

    }, [restaurant])


    // Check review count
    const reviews = useSelector(state => state.customerReviews);
    useEffect(() => {
        fetchAllReviewsByRestaurantId(dispatch, restaurant.id)
    }, [restaurant])
    const reviewsCount = ((reviews && reviews.length !== 0) ? reviews.length : 0);

    const claimMark = <span className="text-light"> <i className="fas fa-check-circle" /> Claimed &#183;  </span>


    return (
        <div style={{position: "relative"}}>
            <div className="img-container">
                <img src={restaurant.photos[0]} height="426px" width="34%" alt="restaurantimage"/>
                <img src={restaurant.photos[1]} height="426px" width="33%" alt="restaurantimage"/>
                <img src={restaurant.photos[2]} height="426px" width="33%" alt="restaurantimage"/>
            </div>
            <div className="" style={absoluteStyle}>
                <div className="h1 text-white m-0" style={{fontWeight: "bold"}}>{restaurant.name}</div>
                <div className="h3 d-flex flex-row">
                    <div className="text-light d-flex">
                        {/*<HomepageActivityStar rating={restaurant.rating} />*/}
                        {/*<RestaurantStarForDetail rating={restaurant.rating}/>*/}
                        <span>{reviewsCount} reviews</span>
                    </div>
                    {/* <div className="starability-result" data-rating={Math.floor(restaurant.rating)}></div>
              <div className="ms-3">{restaurant.review_count} reviews</div> */}
                </div>
                <div className="h4">
                    {/*{restaurant.is_claimed === true ? claimed : ""}*/}
                    {isClaimed && claimMark}
                    {'price' in restaurant && <span>{restaurant.price} &#183; </span>}
                    <span>{(restaurant.categories.map(category => category.title).join(", "))
                    } </span>

                </div>
            </div>
        </div>
    );
};

export default RestaurantImage;
