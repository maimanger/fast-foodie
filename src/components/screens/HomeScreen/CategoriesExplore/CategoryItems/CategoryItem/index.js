import React from "react";
import "./index.css";

const CategoryItem = ({category}) => {
    return (
        <button className={"category-item bg-white border-light rounded-3 py-3"}>
            <img src={category.img} alt={"img"} className={"category-img"}/>
            <div className={"fw-bold mt-2 mb-1"}>{category.category}</div>
        </button>

    )
}

export default CategoryItem;