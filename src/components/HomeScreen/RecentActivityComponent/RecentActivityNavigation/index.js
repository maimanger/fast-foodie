import React from "react";
import "./index.css";

const RecentActivityNavigation = ({clickHandler, content}) => {
    return (
        <div className={"homepage-navigation-container"}>
            <ul className={"nav nav-tabs"}>
                <li className={"nav-item"}>
                    <a className={"nav-link active"}
                       data-toggle="tab" href="#homepage-navigation-pane"
                       onClick={clickHandler}>
                        Nearby
                    </a>
                </li>
                <li className={"nav-item"}>
                    <a className={"nav-link"}
                       data-toggle="tab" href="#homepage-navigation-pane"
                       onClick={clickHandler}>
                        Followings
                    </a>
                </li>
                <li className={"nav-item"}>
                    <a className={"nav-link"}
                       data-toggle="tab" href="#homepage-navigation-pane"
                       onClick={clickHandler}>
                        Followers
                    </a>
                </li>
            </ul>

            <div className="tab-content mt-3">
                <div className="tab-pane fade show active" id="homepage-navigation-pane">
                    {content}
                </div>
            </div>
        </div>
    )
}

export default RecentActivityNavigation;