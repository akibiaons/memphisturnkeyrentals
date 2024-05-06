"use client";

import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";

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
      style={{ height: "80vh", width: "100%" }}
    >
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      <Marker position={[35.1495, -90.049]}>
        <Popup>A popup message on the marker.</Popup>
      </Marker>
    </MapContainer>
  );
};

export default MemphisMap;
