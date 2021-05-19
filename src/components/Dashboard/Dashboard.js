import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker,
  InfoWindow,
} from "react-google-maps";
import location from "./location.json";
import React, { useState } from "react";
import Data from "../Dashboard/infowindow";
import { Helmet } from "react-helmet";

function Map() {
  const [keyvalue, setkeyvalue] = useState();

  return (
    <div>
      <Helmet>
        <title>TestNearU</title>
      </Helmet>
      <GoogleMap
        defaultZoom={5}
        defaultCenter={{
          lat: location.latitude[0],
          lng: location.longitude[0],
        }}
      >
        {Object.keys(location.latitude).map(function (key) {
          return (
            <Marker
              name={"Current location"}
              position={{
                lat: location.latitude[key],
                lng: location.longitude[key],
              }}
              onClick={() => {
                setkeyvalue(key);
                //console.log(key);
              }}
            />
          );
        })}

        {keyvalue && (
          <InfoWindow
            onCloseClick={() => {
              setkeyvalue(null);
            }}
            position={{
              lat: location.latitude[keyvalue],
              lng: location.longitude[keyvalue],
            }}
            onClick={() => {}}
          >
            <Data index={keyvalue} />
          </InfoWindow>
        )}
      </GoogleMap>
    </div>
  );
}

const MapWrapped = withScriptjs(withGoogleMap(Map));

export default function App() {
  return (
    <div style={{ width: "100vw", height: "100vh" }}>
      <MapWrapped
        googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=${process.env.REACT_APP_MY_MAP}`}
        loadingElement={<div style={{ height: `100%` }} />}
        containerElement={<div style={{ height: `100%` }} />}
        mapElement={<div style={{ height: `100%`, width: `100%` }} />}
      />
    </div>
  );
}
