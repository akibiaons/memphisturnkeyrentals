"use client";

import React from "react";
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  useMapEvents,
} from "react-leaflet";
import "leaflet/dist/leaflet.css";

// const handleMapClick = (e) => {
//   const { lat, lng } = e.latlng;
//   alert(`Clicked at: ${35.1495}, ${-90.049}`);
// };

const MemphisMap = () => {
  const mapOptions = {
    center: [35.1495, -90.049],
    zoom: 13,
    maxZoom: 18,
    minZoom: 5,
  };

  return (
    <MapContainer
      {...mapOptions}
      center={[35.1495, -90.049]}
      zoom={13}
      style={{ height: "80vh", width: "100%", zIndex: 10 }}
    >
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      {/* <MapEventsHandler handleMapClick={handleMapClick} /> */}
      <Marker position={[35.1495, -90.049]}>
        <Popup>A popup message on the marker.</Popup>
      </Marker>
    </MapContainer>
  );
};

// const MapEventsHandler = ({ handleMapClick }) => {
//   useMapEvents({
//     click: (e) => handleMapClick(e),
//   });
//   return null;
// };

export default MemphisMap;
