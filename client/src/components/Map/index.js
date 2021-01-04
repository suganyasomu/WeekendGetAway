import React from 'react'
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';


const containerStyle = {
  // boxShadow: '2px 2px 2px grey',
  // paddingTop: '20px',
  width: '400px',
  height: '400px'
};

function Map(props) {
  console.log(props);
  console.log(props);
  const [map, setMap] = React.useState(null)
  const center = { lat: props.location.lat, lng: props.location.lng }

  const onLoad = React.useCallback(function callback(map) {
    // const bounds = new window.google.maps.LatLngBounds();
    // map.fitBounds(bounds);
    setMap(map)
  }, [])

  const onUnmount = React.useCallback(function callback(map) {
    setMap(null)
  }, [])

  return (
    <div className="mapContainer">
    <LoadScript
      googleMapsApiKey={process.env.REACT_APP_MAPS_KEY}
    >
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={8}
        onLoad={onLoad}
        onUnmount={onUnmount}
      >

        {props.results.map((position, index) =>

<Marker position={position} key={index} icon={{url: require("../../Assets/campsite.svg")}}  />
        )} <></>
      </GoogleMap>
    </LoadScript>
    </div>
  )
}

export default Map;