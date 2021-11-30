import React from "react";
import "./index.css";
import CategoryItems from "./CategoryItems";

const CategoryBrowseComponent = () => {
    return (
        <div className={"homescreen-categories-explore-container text-center py-5"}>
            <h4 className={"text-danger fw-bold mb-4"}>Explore By Category</h4>
            <div className={"d-flex justify-content-center"}>
                <CategoryItems />
            </div>
        </div>
    )
}

export default CategoryBrowseComponent;