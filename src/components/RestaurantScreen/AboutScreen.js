import RestaurantImage from "./RestaurantParts/RestaurantImage";
import RestaurantNav from "./RestaurantParts/RestaurantNav";
import RestaurantAbout from "./RestaurantParts/RestaurantAbout";


const AboutScreen = () => {
    return (
      <div>
      <RestaurantImage />

      <div className="container">
        <div className="row mt-3">
          <div className="col-1"></div>
          <div className="col-10">
            
            
                <RestaurantNav active= {'about'} />
            
            <RestaurantAbout/>
          </div>
          <div className="col-1"></div>

          
        </div>
      </div>
      </div>
    );
}

export default AboutScreen