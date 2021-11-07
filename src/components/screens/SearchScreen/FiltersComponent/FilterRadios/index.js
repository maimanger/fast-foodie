import React from "react";
import FilterRadio from "./FilterRadio";

const FillterRadios = ({lists}) => {
    return (
        <div className={"form-check"}>
            {lists.map(line=><FilterRadio line={line} />)}
        </div>
    )
}

export default FillterRadios;