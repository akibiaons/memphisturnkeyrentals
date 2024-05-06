"use client";

import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";

// Import properties data directly from the JSON file
import properties from "@/data/properties.json";

interface Property {
  id: string;
  name: string;
  latitude: number;
  longitude: number;
}

const PropertyMap: React.FC = () => {
  const mapOptions = {
    center: [35.1495, -90.049] as [number, number],
    zoom: 13,
    maxZoom: 18,
    minZoom: 5,
  };

  return (
    <MapContainer
      style={{ height: "80vh", width: "100%", zIndex: 10 }}
      {...mapOptions}
    >
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      {properties.map((property: Property) => (
        <Marker
          key={property.id}
          position={[property.latitude, property.longitude]}
        >
          <Popup>{property.name}</Popup>
        </Marker>
      ))}
    </MapContainer>
  );
};

export default PropertyMap;
