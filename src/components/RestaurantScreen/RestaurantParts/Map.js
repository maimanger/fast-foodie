import React, {useState} from "react";
import shake_shake from "./shake_shack";
import ReactMapGL, {Marker} from "react-map-gl";
import { useSelector } from "react-redux";
// import mapboxgl from '!mapbox-gl'; // eslint-disable-line import/no-webpack-loader-syntax

const Map = ({coordinates}) => {
    // const restaurant = useSelector(state => state.restaurant)
    const geoPosition = coordinates;
    
    const [viewport, setViewport] = useState({
        latitude: geoPosition.latitude,
        longitude: geoPosition.longitude,
        width: "100%",
        height: "100%",
        zoom: 10
      });
    
      return (
        <ReactMapGL
          {...viewport}
          mapStyle="mapbox://styles/mapbox/streets-v11"
          mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_TOKEN} 
          
          onViewportChange={(viewport) => setViewport(viewport)}
        > 
            <Marker latitude={geoPosition.latitude} longitude={geoPosition.longitude}>
                <i className="fas fa-map-marker-alt fa-2x" style={{color:"red"}}></i>
            </Marker>
        </ReactMapGL>
      );
}


export default Map;