import categories from "./categories.json";
import CategoryItem from "./CategoryItem";
import React from "react";
import "./index.css";

const CategoryItems = () => {
    return (
        <div className={"homescreen-categories-buttons"}>
            {categories.map(category=><CategoryItem category={category} /> )}
        </div>
    )
}

export default CategoryItems;