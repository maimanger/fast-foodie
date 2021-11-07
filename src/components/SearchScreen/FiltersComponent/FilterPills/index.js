import React from "react";
import "./index.css";
import FilterPill from "./FilterPill";


const FilterPills = () => {
    return (
        <div className={"filter-pills"}>
            <div className={"d-flex mb-2"}>
                <span className={"me-2"}><FilterPill text={"Chinese"}/></span>
                <FilterPill text={"Asian Fusion"}/>
            </div>
            <div className={"d-flex"}>
                <span className={"me-2"}><FilterPill text={"Dim Sum"}/></span>
                <FilterPill text={"Seafood"}/>
            </div>

        </div>
    )
}

export default FilterPills;