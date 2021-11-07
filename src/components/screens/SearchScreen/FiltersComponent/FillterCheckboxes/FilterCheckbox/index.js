import React from "react";

const FilterCheckbox = ({line}) => {
    return (
        <div className={"d-flex"}>
            <input type={"checkbox"} value={line.value} name={line.name} className={"me-2 form-check-input"} id={"suggested-options"} />
            <label className={"form-check-label"} for={"suggested-options"}>
                 {line.text}
            </label>
        </div>



    )
}

export default FilterCheckbox;