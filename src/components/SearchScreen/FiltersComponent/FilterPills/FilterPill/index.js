import React from "react";
import "./index.css";

const FilterPill = ({text}) => {
    return (
        <div className={"searchscreen-filter-pill"}>
            <button type="button" className={"btn rounded-pill"}>{text}</button>
        </div>
    )
}

export default FilterPill;