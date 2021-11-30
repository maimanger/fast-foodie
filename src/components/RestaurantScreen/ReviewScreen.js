import RestaurantImage from "./RestaurantParts/RestaurantImage";
import RestaurantNav from "./RestaurantParts/RestaurantNav";
import RestaurantReview from "./RestaurantParts/RestaurantReview";


const ReviewScreen = () => {
    return (
      <div><RestaurantImage />
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