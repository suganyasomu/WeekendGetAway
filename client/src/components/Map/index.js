import React from "react";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

const containerStyle = {
  height: "75vh",
  // height: '500px'
};

function Map(props) {
  console.log(props);
  const [map, setMap] = React.useState(null);
  const center = { lat: props.location.lat, lng: props.location.lng };

  const onLoad = React.useCallback(function callback(map) {
    // const bounds = new window.google.maps.LatLngBounds();
    // map.fitBounds(bounds);
    setMap(map);
  }, []);

  const onUnmount = React.useCallback(function callback(map) {
    setMap(null);
  }, []);

  function markerId(id) {
    const element = document.getElementById(id);

    element.scrollIntoView();
  }

  return (
    <div className="mapContainer">
      <LoadScript googleMapsApiKey={process.env.REACT_APP_MAPS_KEY}>
        <GoogleMap
          mapContainerStyle={containerStyle}
          center={center}
          zoom={8}
          onLoad={onLoad}
          onUnmount={onUnmount}
        >
          {props.results.map((position, index) => {
            // console.log(position.lat, index);
            return (
              <Marker
                position={{ lat: position.lat, lng: position.lng }}
                key={index}
                icon={{ url: require("../../Assets/campsite.svg") }}
                title={position.name}
                onClick={() => {
                  markerId(position.id);
                }}
              />
            );
          })}
        </GoogleMap>
      </LoadScript>
    </div>
  );
}

export default Map;
