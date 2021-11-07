import React from "react";

const FilterRadio = ({line}) => {
    return (
        <div className={"d-flex"}>
            <input type={"radio"} value={line.value} name={line.name} className={"me-2 form-check-input"} id={"radio-box"} />
            <label className={"form-check-label"} for={"radio-box"}>
                 {line.text}
            </label>
        </div>



    )
}

export default FilterRadio;