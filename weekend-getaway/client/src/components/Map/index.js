import React from 'react'
import { GoogleMap, LoadScript} from '@react-google-maps/api';
import Marker from "../Marker"

const containerStyle = {
  width: '400px',
  height: '400px'
};

const center = {
  lat: -34.397,
  lng: 150.644
};

function Map() {
  const [map, setMap] = React.useState(null)

  const onLoad = React.useCallback(function callback(map) {
    // const bounds = new window.google.maps.LatLngBounds();
    // map.fitBounds(bounds);
    // console.log(map);
    setMap(map)
  }, [])

  const onUnmount = React.useCallback(function callback(map) {
    setMap(null)
  }, [])

  return (
    <LoadScript
      googleMapsApiKey="AIzaSyCFTAYkWgyMfLtIB15x2XcdAoTC10QAfno"
    >
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={10}
        onLoad={onLoad}
        onUnmount={onUnmount}
      >
        <Marker
            lat={center.lat}
            lng={center.lng}
            name="My Marker"
            color="blue"
          />  
        <></>
      </GoogleMap>
    </LoadScript>
  )
}

export default Map