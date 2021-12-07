import React, {useState, useEffect} from "react";
import { Link } from "react-router-dom";


const Test = () => {

    const [restaurants, setRestaurants] = useState([]);

    
    const fetchAllRestaurants = () => {
        fetch("http://localhost:8000/api/restaurants")
      .then(res => res.json()).then(restaurants => setRestaurants(restaurants));
  
    }

    useEffect(fetchAllRestaurants
        , [])

    return (
        <ul>
            {restaurants.map(rest => {return (
            <li key={rest.id}>
                <Link to={`/restaurants/${rest.id}`}>
                    {rest.id}
                </Link>

            </li>)})}
           
            
        </ul>
    )


}

export default Test;