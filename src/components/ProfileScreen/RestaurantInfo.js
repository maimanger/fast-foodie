import React from "react";

const RestaurantInfo = ({restaurant}) => {
    return (
        <div className="row g-3 mb-2">

            <div className="col-auto">
                <img src={restaurant.image_url}
                     className="img-fluid rounded-3"
                     style={{width: 70, height: 70, objectFit: "cover"}}/>
            </div>

            <div className="col-12 col-md-8 d-flex flex-column">
                <div className="fw-bold text-info">
                    {restaurant.name}
                </div>
                <div className="text-info font-weight-light">
                    {restaurant.price}
                    <span className="mx-1">•</span>
                    {restaurant.categories}
                </div>
                <div>
                    {restaurant.location}
                </div>
            </div>
        </div>
    )
};

export default RestaurantInfo;


