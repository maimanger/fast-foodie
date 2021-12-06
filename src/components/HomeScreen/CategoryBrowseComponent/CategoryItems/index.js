import categories from "./categories.json";
import CategoryItem from "./CategoryItem";
import React from "react";
import "./index.css";


const CategoryItems = ({location}) => {

    return (
        <div className={"homescreen-categories-buttons"}>
            {categories.map(category=><CategoryItem category={category} location={location}/> )}
        </div>
    )
}

export default CategoryItems;