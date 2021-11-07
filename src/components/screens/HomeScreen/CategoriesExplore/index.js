import React from "react";
import "./index.css";
import CategoryItems from "./CategoryItems";

const CategoriesExplore = () => {
    return (
        <div className={"categories-explore-container text-center py-5"}>
            <h4 className={"text-danger fw-bold mb-4"}>Find the Best Restaurant in Town</h4>
            <div className={"d-flex justify-content-center"}>
                <CategoryItems />
            </div>
        </div>
    )
}

export default CategoriesExplore;