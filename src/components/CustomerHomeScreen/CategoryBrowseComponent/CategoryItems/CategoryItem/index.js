import React, {useState} from "react";
import "./index.css";
import Popup from "../../Popup";
import CategoriesPopup from "../../CategoriesPopup";
import {Link} from "react-router-dom";
import {concatQueries} from "../../../utils/url";

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
            <div>
                <div
                    className={"homescreen-category-item bg-white border-light rounded-3 py-3"} onClick={clickMoreHandler}>
                    <img src={category.img} alt={"img"} className={"homescreen-category-img"}/>
                    <div className={"fw-bold mt-2 mb-1"}>{category.category}</div>
                </div>

                {isOpen && <Popup handleClose={togglePopup} content={<CategoriesPopup moreOptions={moreOptions} location={location}/> }/>}
            </div>
        )
    } else {
        return (
            <Link to={`/search?${concatQueries({term: category.category, location: location})}`} className={"text-decoration-none text-black"}>
                <div
                    className={"homescreen-category-item bg-white border-light rounded-3 py-3"} onClick={clickMoreHandler}>
                    <img src={category.img} alt={"img"} className={"homescreen-category-img"}/>
                    <div className={"fw-bold mt-2 mb-1"}>{category.category}</div>
                </div>

                {isOpen && <Popup handleClose={togglePopup} content={<CategoriesPopup moreOptions={moreOptions} /> }/>}
            </Link>

        )
    }
}

export default CategoryItem;