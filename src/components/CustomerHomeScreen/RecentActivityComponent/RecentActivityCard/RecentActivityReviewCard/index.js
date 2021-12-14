import React from "react";
import './index.css';
import * as truncate from "../../../utils/truncate";
import {Link} from "react-router-dom";
import ReviewStars from "../../../../ProfileScreen/stars/ReviewStars";
import {HashLink} from "react-router-hash-link";
import {textTruncate} from "../../../utils/truncate";
import RoundedStar from "../../../../ProfileScreen/stars/RoundedStar";
import moment from "moment";


const RecentActivityReviewCard = ({activity}) => {
    const reviewCharLimit = 50;
    const imgUrl = activity['review']['photo_url'] === '' ? activity['restaurant']['img_url'] : activity['review']['photo_url'];
    return (
        <div className={"card homescreen-recent-activity-card"}>
            <div className={"d-flex p-2"}>
                <Link to={`/profile/${activity.user._id}`}>
                    <img className={"homescreen-profile-img me-2 rounded-2"} src={activity['user']['img_url']} alt=""/>
                </Link>
                <div className={"text-start"}>
                    <Link  to={`/profile/${activity.user._id}`}
                           className={"text-info fw-bold text-decoration-none text-nowrap"}>
                        {textTruncate(activity['user']['name'], 24)}
                    </Link>
                    <div>
                        <span>Wrote a review</span>
                        <span className={"ms-3 text-secondary"}>{moment(activity.time_created).format("L")}</span>
                    </div>
                </div>
            </div>
            <Link to={`/restaurants/${activity.restaurant._id}`}>
                <img src={imgUrl} className={"card-img-top"} alt={"img"} />
            </Link>
            <div className={"homescreen-recent-activity-card-body p-3 text-start"}>
                <Link to={`/restaurants/${activity.restaurant._id}`} className={"text-decoration-none"}>
                    <h6 className={"card-title text-danger fw-bold text-nowrap"}>{textTruncate(activity['restaurant']['name'], 28)}</h6>
                </Link>
                <hr className={"text-secondary"}/>
                <HashLink to={`/restaurants/${activity.restaurant._id}/review#${activity.review._id}`} className={"text-decoration-none text-black"}>
                    <div className={"d-flex"}>
                        <span>Rating: &nbsp; &nbsp;</span>
                        {/*<HomepageActivityStar rating={activity['review']['rating']} />*/}
                        <RoundedStar review={activity.review} />
                    </div>
                    {activity['review']['text'] !== '' &&
                    <div className={"d-flex"}>
                        <i className="far fa-comment-alt text-secondary pt-1 me-2" />
                        <div className={"homepage-recent-activity-card-review w-100 pe-4"}>
                            {truncate.textTruncate(activity['review']['text'], reviewCharLimit)}
                        </div>
                    </div>
                    }
                </HashLink>
            </div>
        </div>
    )
}

export default RecentActivityReviewCard;