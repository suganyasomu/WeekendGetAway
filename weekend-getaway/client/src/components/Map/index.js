import React from 'react'
import { GoogleMap, LoadScript } from '@react-google-maps/api';




const containerStyle = {
  width: '400px',
  height: '400px'
};

const center = {
  lat: 45.29486,
  lng: -122.34411
};

function Map() {
  const [map, setMap] = React.useState(null)

  const onLoad = React.useCallback(function callback(map) {
    const bounds = new window.google.maps.LatLngBounds();
    map.fitBounds(bounds);
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
        defaultZoom={-100}
        onLoad={onLoad}
        onUnmount={onUnmount}
      >
        { /* Child components, such as markers, info windows, etc. */ }
        <></>
      </GoogleMap>
    </LoadScript>
  )
}

export default React.memo(Map)