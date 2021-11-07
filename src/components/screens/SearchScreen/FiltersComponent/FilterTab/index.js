import React from "react";
import "./index.css";

const FilterTab = () => {
    return (
        <div className={"btn-group buttons-price-options"}>
            <button type={"button"} className={"btn button-start"}>$</button>
            <button type={"button"} className={"btn"}>$$</button>
            <button type={"button"} className={"btn"}>$$$</button>
            <button type={"button"} className={"btn button-end"}>$$$$</button>
        </div>
    )
}

export default FilterTab;