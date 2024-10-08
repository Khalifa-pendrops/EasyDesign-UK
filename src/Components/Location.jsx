import React, { useState } from "react";
import {
  GoogleMap,
  LoadScript,
  Marker,
  InfoWindow,
} from "@react-google-maps/api";

const containerStyle = {
  width: "90%",
  height: "70vh",
  display: "flex",
  margin: "3rem auto",
};

const center = {
  lat: 52.4862,
  lng: -1.8904,
};

const locations = [
  {
    name: "Birmingham Museum & Art Gallery",
    position: { lat: 52.4814, lng: -1.9035 },
  },
  {
    name: "Bullring & Grand Central",
    position: { lat: 52.4778, lng: -1.895 },
  },
  {
    name: "Edgbaston Cricket Ground",
    position: { lat: 52.455, lng: -1.9025 },
  },
  {
    name: "University of Birmingham",
    position: { lat: 52.4508, lng: -1.9305 },
  },
  {
    name: "Cadbury World",
    position: { lat: 52.4322, lng: -1.9347 },
  },
];

function Location() {
  const [selected, setSelected] = useState(null);
  const apiKey = "AIzaSyDsHpl186p12T-CXWY56QEG-3UXyjrImYM";
  return (
    <LoadScript googleMapsApiKey={apiKey}>
      <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={12}>
        {/* Map through the locations array to create a Marker for each location */}
        {locations.map((location, index) => (
          <Marker
            key={index}
            position={location.position}
            onClick={() => setSelected(location)}
            label={location.name}
          />
        ))}
        {selected && (
          <InfoWindow
            position={selected.position}
            onCloseClick={() => setSelected(null)}
          >
            <div>
              <h4>{selected.name}</h4>
              <p>Interesting place to visit in Birmingham!</p>
            </div>
          </InfoWindow>
        )}
      </GoogleMap>
    </LoadScript>
  );
}
export default Location;
