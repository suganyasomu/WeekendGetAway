import React from 'react'
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';


const containerStyle = {
  width: '400px',
  height: '400px'
};

function Map(props) {
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

          <Marker position={position} key={index} />
        )} <></>
      </GoogleMap>
    </LoadScript>
  )
}

export default Map