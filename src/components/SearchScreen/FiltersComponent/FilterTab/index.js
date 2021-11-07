import React from "react";
import "./index.css";

const FilterTab = () => {
    return (
        <div className={"btn-group searchscreen-buttons-price-options"}>
            <button type={"button"} className={"btn searchscreen-button-start"}>$</button>
            <button type={"button"} className={"btn"}>$$</button>
            <button type={"button"} className={"btn"}>$$$</button>
            <button type={"button"} className={"btn searchscreen-button-end"}>$$$$</button>
        </div>
    )
}

export default FilterTab;