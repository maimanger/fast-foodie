import React from "react";

const RestaurantInfo = ({restaurant}) => {
    return (
        <div className="row g-3 mb-2">

            <div className="col-4 col-md-2">
                <img src={restaurant.image_url} className="img-fluid rounded-3"/>
            </div>

            <div className="col-12 col-md-8 d-flex flex-column">
                <div className="fw-bold text-info wd-profile-link-text">
                    {restaurant.name}
                </div>
                <div className="text-info font-weight-light">
                    {restaurant.price}
                    <span className="mx-1">•</span>
                    {restaurant.categories.map(category => category.title)
                        .reduce((prev, curr) => [prev, ', ', curr])
                    }
                </div>
                <div>
                    {restaurant.location.display_address.map(addr => addr).join(', ')}
                </div>
            </div>
        </div>
    )
}

export default RestaurantInfo;


