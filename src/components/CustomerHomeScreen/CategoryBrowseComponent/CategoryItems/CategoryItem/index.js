import React, {useState} from "react";
import "./index.css";
import Popup from "../../Popup";
import CategoriesPopup from "../../CategoriesPopup";
import {Link} from "react-router-dom";
import {concatQueries} from "../../../utils/url";
import CategoryButton from "./CategoryButton";

const CategoryItem = ({category, location}) => {
    const [isOpen, setIsOpen] = useState(false);

    const moreOptions = ["American", "Asian Fusion", "Barbeque", "Breakfast & Brunch", "Buffets", "Burgers", "Cheeseteaks", "Chinese", "Hot Dogs", "French", "Indian", "Italian", "Japanese", "Korean", "Mediterranean", "Mexican", "Pizza", "Salad", "Sandwiches", "Seafood", "Sushi Bars", "Thai"];

    const togglePopup = () => {
        setIsOpen(!isOpen);
    }
    const clickMoreHandler = () => {
        if (category.category === "More") {
            togglePopup();
        }
    }

    if (category.category === "More") {
        return (
            <div onClick={clickMoreHandler}>
                <CategoryButton category={category} />
                {isOpen && <Popup handleClose={togglePopup} content={<CategoriesPopup moreOptions={moreOptions} location={location}/> }/>}
            </div>
        )
    } else {
        return (
            <Link to={`/search?${concatQueries({term: category.category, location: location})}`} className={"text-decoration-none"}>
                <CategoryButton category={category} />
            </Link>

        )
    }
}

export default CategoryItem;