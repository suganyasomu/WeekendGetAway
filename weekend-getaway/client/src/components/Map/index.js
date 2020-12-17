import React from 'react'
import { GoogleMap, LoadScript,Marker} from '@react-google-maps/api';


const containerStyle = {
  width: '400px',
  height: '400px'
};

const center = {
  lat: 43.7122222,
  lng: -121.2433333
};

function Map(props) {
  const [map, setMap] = React.useState(null)
 
  const onLoad = React.useCallback(function callback(map) {
    // const bounds = new window.google.maps.LatLngBounds();
    // map.fitBounds(bounds);
    console.log(map);
    center.lat=props.lat;
    center.lng=props.lng;
    console.log(props.lat);
    // console.log(props.lng)
    console.log(props.results)
   
    
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

{props.results.map((position,index) =>
 
 <Marker position={position} key={index} />
)} <></>
      </GoogleMap>
    </LoadScript>
  )
}

export default Map