import React from "react";
import Dropdown from "./Dropdown";

const Dropdowns = ({color, isBold}) => {
    const dropdownItems = [
        {
            title: "Category",
            options: ["Sushi", "Burger", "Asian", "Pizza", "Seafood"],
            moreOptions: ["American", "Asian Fusion", "Barbeque", "Breakfast & Brunch", "Buffets", "Burgers", "Cheeseteaks", "Chinese", "Hot Dogs", "French", "Indian", "Italian", "Japanese", "Korean", "Mediterranean", "Mexican", "Pizza", "Salad", "Sandwiches", "Seafood", "Sushi Bars", "Thai"]
        },
        {
            title: "Price",
            options: ["$", "$$", "$$$", "$$$$"]
        },
        {
            title: "Suggested",
            options: ["Open Now", "Hot and New", "Deals", "Wheelchair Accessible"]
        }
    ]
    return (
        <div className={"d-none d-lg-flex"}>
            {dropdownItems.map(dropdownItem=>{
                return <Dropdown title={dropdownItem.title} options={dropdownItem.options} moreOptions={dropdownItem.moreOptions} color={color} isBold={isBold}/>
            })}
        </div>
    )
}

export default Dropdowns;