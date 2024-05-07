"use client";

import React, { useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

// Import properties data directly from the JSON file
import properties from "@/data/properties.json";

interface Property {
  id: string;
  name: string;
  latitude: number;
  longitude: number;
}

// Custom property marker
const propertyMarker = (color = "red") =>
  new L.divIcon({
    className: "property-marker",
    html: `<div style="background-color: ${color}; width: 20px; height: 20px; border-radius: 50%; display: flex; align-items: center; justify-content: center; color: white;">+</div>`,
    iconSize: [20, 20],
    iconAnchor: [10, 10],
  });

const PropertyMap: React.FC = () => {
  // Hook declarations
  const [activePropertyId, setActivePropertyId] = useState<string | null>(null);

  const handleMarkerClick = (propertyId: string) => {
    setActivePropertyId(activePropertyId === propertyId ? null : propertyId);
  };

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
          icon={propertyMarker(
            property.id === activePropertyId ? "green" : "red"
          )}
          eventHandlers={{
            click: () => handleMarkerClick(property.id),
          }}
        >
          <Popup>{property.name}</Popup>
        </Marker>
      ))}
    </MapContainer>
  );
};

export default PropertyMap;
