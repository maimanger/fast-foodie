import React, {useState} from "react";
import './index.css';
import Popup from "../../../CategoryBrowseComponent/Popup";
import CategoriesPopup from "../../../CategoryBrowseComponent/CategoriesPopup";


const Dropdown = ({
                      title = "Category",
                      options = ["Sushi", "Burger", "Asian", "Pizza", "Seafood"],
                      moreOptions = [],
                      color = "black",
                      isBold = false
}) => {
    const [selected, setSelected] = useState(title);
    const [isOpen,setIsOpen] = useState(false);

    const clickHandler = (e) => {
        const text = e.target.innerText;
        setSelected(text);
    }

    const resetHandler = () => {
        setSelected(title);
    }
    const togglePopup = () => {
        setIsOpen(!isOpen);
    }

    return (
        <div className={`homepage-search-filter-dropdown dropdown text-${color}`}>
            <div className={"dropdown-toggle shadow-none text-center"} data-toggle="dropdown">
                <span className={`${isBold ? "fw-bold" : ""}`}>{selected}</span>
            </div>
            <div className={"dropdown-menu p-1"}>

                <div className={"dropdown-item"} onClick={resetHandler}>
                    - Select a {title} -
                </div>
                <hr className={"m-1"}/>
                {options.map(option => <div className={"dropdown-item"} onClick={clickHandler}>{option}</div>)}

                {moreOptions.length !== 0 ? (
                    <>
                        <div className={"dropdown-item fw-bold"} onClick={togglePopup}>
                            More
                        </div>
                    </>
                ) : ''}
            </div>


            {isOpen && <Popup
                content={
                    <CategoriesPopup clickHandler={clickHandler} moreOptions={moreOptions} />
                }
                handleClose={
                    togglePopup
                }/>
            }


        </div>
    )
}

export default Dropdown;