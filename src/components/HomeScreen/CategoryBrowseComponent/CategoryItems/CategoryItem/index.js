import React, {useState} from "react";
import "./index.css";
import Popup from "../../../public-components/Dropdowns/Popup";
import CategoriesPopup from "../../../public-components/Dropdowns/CategoriesPopup";

const CategoryItem = ({category}) => {
    const [isOpen, setIsOpen] = useState(false);

    const moreOptions = ["American", "Asian Fusion", "Barbeque", "Breakfast & Brunch", "Buffets", "Burgers", "Cheeseteaks", "Chinese", "Hot Dogs", "French", "Indian", "Italian", "Japanese", "Korean", "Mediterranean", "Mexican", "Pizza", "Salad", "Sandwiches", "Seafood", "Sushi Bars", "Thai"];

    const togglePopup = () => {
        setIsOpen(!isOpen);
    }
    const clickHandler = () => {
        if (category.category === "More") {
            togglePopup();
        }
    }
    return (
        <div>
            <button className={"homescreen-category-item bg-white border-light rounded-3 py-3"} onClick={clickHandler}>
                <img src={category.img} alt={"img"} className={"homescreen-category-img"}/>
                <div className={"fw-bold mt-2 mb-1"}>{category.category}</div>
            </button>

            {isOpen && <Popup handleClose={togglePopup} content={<CategoriesPopup moreOptions={moreOptions} /> }/>}
        </div>

    )
}

export default CategoryItem;