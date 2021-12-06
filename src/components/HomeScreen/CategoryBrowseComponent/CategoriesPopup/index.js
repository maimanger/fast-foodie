import React from "react";
import './index.css';
import {concatQueries} from "../../../../utils/url";
import {Link} from "react-router-dom";

const CategoriesPopup = ({moreOptions, location}) => {

    return (
        <div className={"homepage-category-popup"}>
            {moreOptions.map((item, index)=> {
                if (index % 3 === 0) {
                    return (

                        <div className={"row text-start fw-bold mb-1"}>

                            <div className={"homepage-category-item col-4"}>
                                <Link to={`/search?${concatQueries({location: location, term: item})}`} className={"text-decoration-none text-black"}>
                                    {item}
                                </Link>
                            </div>


                            <div className={"homepage-category-item col-4"}>
                                    <Link to={`/search?${concatQueries({location: location, term: moreOptions[index+1]})}`} className={"text-decoration-none text-black"}>
                                        {moreOptions[index+1]}
                                    </Link>
                            </div>

                            <div className={"homepage-category-item col-4"}>
                                    <Link to={`/search?${concatQueries({location: location, term: moreOptions[index+2]})}`} className={"text-decoration-none text-black"}>
                                        {moreOptions[index+2]}
                                    </Link>
                            </div>

                        </div>
                    )
                }

            })}
        </div>
    )
}

export default CategoriesPopup;