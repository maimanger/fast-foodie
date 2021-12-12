import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";

const RestaurantNav = ({active = 'about'}) => {
  const {id} = useParams();
  const [isSaved, setIsSaved] = useState(false)

  const save = <button type="button" className="btn btn-outline-primary">Save</button>
  const saved = <button type="button" className="btn btn-primary">Saved</button>
  // const saveClickHandler = () => setIsSaved(!isSaved)

  return (
    <div className="row mt-3">
      <div className="p-0 col-3">
        <ul className="nav navbar-expand-lg nav-pills">
          <button className="navbar-toggler bg-primary" type="button"
                  data-toggle="collapse" data-target="#navbarTogglerDemo01"
                  aria-controls="navbarTogglerDemo01" aria-expanded="false"
                  aria-label="Toggle navigation">
            <span className="fas fa-bars text-white"></span>
          </button>
          <div className="collapse navbar-collapse mt-2" id="navbarTogglerDemo01">
          <li className="nav-item">
            <Link to={`/restaurants/${id}/about`} className= {`nav-link ${active === 'about' ? 'active': ''} `} >
              About
            </Link>
          </li>
          <li className="nav-item">
            <Link to={`/restaurants/${id}/menu`} className= {`nav-link ${active === 'menu' ? 'active': ''} `}>
              Menu
            </Link>
          </li>
          <li className="nav-item">
            <Link to={`/restaurants/${id}/review`} className= {`nav-link ${active === 'review' ? 'active': ''} `}>
              Review
            </Link>
          </li>
          </div>
        </ul>
      </div>
      {/* <div onClick={saveClickHandler} className="col-4">
          {isSaved === false? save: saved}
      </div> */}
    </div>
  );
};

export default RestaurantNav;
