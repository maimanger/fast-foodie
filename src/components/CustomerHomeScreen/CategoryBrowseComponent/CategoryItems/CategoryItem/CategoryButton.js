import React from "react";

const CategoryButton = ({category}) => {
    return (
        <div
            className={"homescreen-category-item bg-white border-light rounded-3 py-3  text-black homescreen-hover-border-shadow homescreen-hover-text-underline"}>
            <img src={category.img} alt={"img"} className={"homescreen-category-img"}/>
            <div className={"fw-bold mt-2 mb-1"}>{category.category}</div>
        </div>
    )
}

export default CategoryButton;