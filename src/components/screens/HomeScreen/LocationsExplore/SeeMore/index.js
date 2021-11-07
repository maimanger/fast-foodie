import React from "react";
import {Link} from "react-router-dom";
import "./index.css";

const SeeMore = ({text}) => {
    return (
        <Link to={"#"} className={"see-more text-decoration-none"}>{text}</Link>
    )
}

export default SeeMore;