import React, {useState} from "react";
import ReactMapGL, {Marker} from "react-map-gl";

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
          mapboxApiAccessToken='pk.eyJ1IjoibmtpZm9ubHkiLCJhIjoiY2tvdG5zY3IwMGJjNjJubnpsbWZqczRpMCJ9.Jkloo5yzCDd4HlLptz12ew'
          
          onViewportChange={(viewport) => setViewport(viewport)}
        >


          <Marker latitude={geoPosition.latitude} longitude={geoPosition.longitude}>
                <i className="fas fa-map-marker-alt fa-2x" style={{color:"red"}}></i>
            </Marker>
        </ReactMapGL>
      );
}


export default Map;