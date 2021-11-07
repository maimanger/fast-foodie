import React from "react";
import FilterCheckbox from "./FilterCheckbox";

const FillterCheckboxes = ({lists}) => {
    return (
        <div className={"form-check"}>
            {lists.map(line=><FilterCheckbox line={line} />)}
        </div>
    )
}

export default FillterCheckboxes;