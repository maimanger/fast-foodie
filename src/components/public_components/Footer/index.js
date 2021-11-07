import React from "react";
import "./index.css";
import {Link} from "react-router-dom";

const Fooster = () => {
    return (
        <div className={"footer text-center p-5"}>
            <Link to={"/"} className={"me-2"}>Help & Contact</Link>
            <span>Copyright Ⓒ 2004–2021 Food Explorer Inc.</span>
        </div>
    )
}

export default Fooster;