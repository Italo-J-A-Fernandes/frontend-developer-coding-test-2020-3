import React from 'react';
import {
  GoogleMap,
  withScriptjs,
  withGoogleMap,
  Marker,
} from 'react-google-maps';

interface LatProps {
  lat: number;
  long: number;
}

const Map = withScriptjs(
  withGoogleMap<LatProps>(props => (
    <GoogleMap
      defaultZoom={17}
      defaultCenter={{ lat: props.lat, lng: props.long }}
    >
      <Marker position={{ lat: props.lat, lng: props.long }} />
    </GoogleMap>
  )),
);

const Maps: React.FC<LatProps> = props => {
  return (
    <>
      <Map
        lat={props.lat}
        long={props.long}
        googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places"
        loadingElement={<div style={{ height: `100%` }} />}
        containerElement={<div style={{ height: `100%` }} />}
        mapElement={<div style={{ height: `100%` }} />}
      />
    </>
  );
};

export default Maps;
