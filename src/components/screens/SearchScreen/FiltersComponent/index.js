import React from "react";
import "./index.css";
import FilterName from "./FilterName";
import FilterTab from "./FilterTab";
import FilterPills from "./FilterPills";
import SeeAll from "./SeeAll";
import FilterCheckboxes from "./FillterCheckboxes";
import FilterRadios from "./FilterRadios";
import suggested from "./filters/suggestedOptions.json";
import features from "./filters/featuresOptions.json";
import neighborhoods from "./filters/neighborhoodsOptions.json";
import distances from "./filters/distanceOptions.json";


const FiltersComponent = () => {

    return (
        <div className={"filter-container"}>

            {/*price*/}
            <div className={"pb-3 border-bottom border-bottom-1 border-gray"}>
                <div  className={"mb-2"}>
                    <FilterName filterName={"Filters"}/>
                </div>
                <FilterTab />
            </div>

            {/*suggested*/}
            <div className={"py-3 border-bottom border-bottom-1 border-gray"}>
                <div className={"mb-2"}>
                    <FilterName filterName={"Suggested"}/>
                </div>
                <FilterCheckboxes lists={suggested}/>
            </div>


            {/*category*/}
            <div className={"py-3 border-bottom border-bottom-1 border-gray"}>
                <div className={"mb-2"}>
                    <FilterName filterName={"Category"} />
                </div>
                <FilterPills />
                <div className={"mt-2"}>
                    <SeeAll />
                </div>
            </div>

            <div className={"py-3 border-bottom border-bottom-1 border-gray"}>
                <div className={"mb-2"}>
                    <FilterName filterName={"Features"} />
                </div>
                <FilterCheckboxes lists={features} />
                <div className={"mt-2"}>
                    <SeeAll />
                </div>
            </div>

            <div className={"py-3 border-bottom border-bottom-1 border-gray"}>
                <div className={"mb-2"}>
                    <FilterName filterName={"Neighborhoods"} />
                </div>
                <FilterCheckboxes lists={neighborhoods} />
                <div className={"mt-2"}>
                    <SeeAll />
                </div>
            </div>

            <div className={"py-3 border-bottom border-bottom-1 border-gray"}>
                <div className={"mb-2"}>
                    <FilterName filterName={"Distance"} />
                </div>
                <FilterRadios lists={distances} />
                <div className={"mt-2"}>
                    <SeeAll />
                </div>
            </div>
        </div>
    )
}

export default FiltersComponent;