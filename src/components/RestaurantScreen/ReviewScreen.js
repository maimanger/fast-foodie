import RestaurantImage from "./RestaurantParts/RestaurantImage";
import RestaurantNav from "./RestaurantParts/RestaurantNav";
import RestaurantReview from "./RestaurantReview/RestaurantReview";
import SearchHeader from "../SearchHeader";


const ReviewScreen = () => {
    return (
      <div>
        <SearchHeader />
        <RestaurantImage />
          <div className="container">
            <div className="row mt-3">
              <div className="col-1"></div>
              <div className="col-10">


                    <RestaurantNav active= {'review'} />

                <RestaurantReview />
              </div>
              <div className="col-1"></div>
            </div>
          </div>
      </div>
    );
}

export default ReviewScreen;