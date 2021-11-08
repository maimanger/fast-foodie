import React from "react";
import {Link} from "react-router-dom";

const ReviewItem = () => {
    return (
    <div className="d-flex flex-column">

        <div className="row g-3 mb-2">

            <div className="col-4 col-md-2">
                <img src="/images/ProfilePage/shake_shack.jpg" className="img-fluid rounded-3"/>
            </div>

            <div className="col-12 col-md-8 d-flex flex-column">
                <div className="fw-bold text-info wd-profile-link-text">
                    Shake Shack
                </div>
                <div className="text-info font-weight-light">
                    $$
                    <span className="ms-1">•</span>
                    <span className="wd-profile-link-text ms-1">Burgers</span>,
                    <span className="wd-profile-link-text ms-1">Ice Cream & Frozen Yogurt</span>,
                    <span
                        className="wd-profile-link-text ms-1">American(Traditional)</span>
                </div>
                <div>
                    92 Winthrop St
                </div>
                <div>
                    Cambridge, MA 02138
                </div>
            </div>
        </div>

        {/************************Review Stars**************************/}
        <div className="text-primary mb-2">
            <i className="fas fa-star fs-5"></i>
            <i className="fas fa-star fs-5"></i>
            <i className="fas fa-star fs-5"></i>
            <i className="fas fa-star fs-5"></i>
            <i className="far fa-star fs-5"></i>
            <span className="text-muted ms-2">
                             11/2/2021
                         </span>
        </div>
        {/************************Review Text**************************/}
        <p className="mb-2">
            Doesn’t look like much when you walk past, but I was practically dying of
            hunger so I popped in. The definition of a hole-in-the-wall. I got the
            regular hamburger and wow… there are no words. A classic burger done right.
            Crisp bun, juicy patty, stuffed with all the essentials (ketchup, shredded
            lettuce, tomato, and pickles). There’s about a million options available
            between the menu board and wall full of specials, so it can get a little
            overwhelming, but you really can’t go wrong. Not much else to say besides
            go see for yourself! You won’t be disappointed.
        </p>
        {/************************Review Img**************************/}
        <div className="d-lg-flex gap-3 col-8 col-sm-7 col-md-6 col-lg-10 col-xl-8">
            <div className="card text-white">
                <img src="/images/ProfilePage/review.jpg" className="card-img-top img-fluid"/>
                <div
                    className="card-img-overlay d-flex py-0 px-0 flex-column justify-content-end w-auto h-auto">
                             <span className="bg-black bg-opacity-50 px-2">
                             Delicious dinner!
                             </span>
                </div>
            </div>
            <div className="card text-white">
                <img src="/images/ProfilePage/review.jpg" className="card-img-top img-fluid"/>
                <div
                    className="card-img-overlay d-flex px-0 py-0 flex-column justify-content-end w-auto h-auto">
                                 <span className="bg-black bg-opacity-50 px-2">
                                     Delicious dinner!
                                 </span>
                </div>
            </div>
        </div>

        <Link className="ms-auto me-2 btn btn-outline-info rounded-pill py-1"
              to = "#">
            Edit
        </Link>


    </div>
    )
}

export default ReviewItem;