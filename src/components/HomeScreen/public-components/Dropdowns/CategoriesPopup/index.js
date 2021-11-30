import React from "react";
import './index.css';

const CategoriesPopup = ({moreOptions, clickHandler}) => {

    return (
        <div className={"homepage-search-filter-more-options"}>
            {moreOptions.map((item, index)=> {
                if (index % 3 === 0) {
                    return (
                        <div className={"homepage-search-filter-more-option mb-2 text-black text-start fw-bold d-flex"}>
                            <div className={"me-2"} onClick={clickHandler}><span>{item}</span></div>
                            {index+1<moreOptions.length && <div className={"homepage-search-filter-more-options me-2"} onClick={clickHandler}><span>{moreOptions[index + 1]}</span></div>}
                            {index+2<moreOptions.length && <div className={"homepage-search-filter-more-options me-2"} onClick={clickHandler}><span>{moreOptions[index + 2]}</span></div>}
                        </div>
                    )
                }

            })}
        </div>
    )
}

export default CategoriesPopup;