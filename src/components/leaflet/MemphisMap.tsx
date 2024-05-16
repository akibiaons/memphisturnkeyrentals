"use client";

import React, { useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

// Import properties data directly from the JSON file
import properties from "@/data/properties.json";
import PropertyCarousel from "./PropertyCarousel";

interface Property {
  id: string;
  name: string;
  latitude: number;
  longitude: number;
  images: string[]; // Added this string interface
  price: number;
  address: string;
  bed: number;
  bath: number;
  sqft: number;
}

// Custom property marker
const propertyMarker = (color = "red") =>
  new (L as any).divIcon({
    className: "property-marker",
    html: `<div style="background-color: ${color}; width: 20px; height: 20px; border-radius: 50%; display: flex; align-items: center; justify-content: center; color: white;">+</div>`,
    iconSize: [20, 20],
    iconAnchor: [10, 10],
  });

const PropertyMap: React.FC = () => {
  // Hook declarations
  const [activeProperty, setActiveProperty] = useState<Property | null>(null);

  // Handle marker on click which is called in the return (<Marker>)
  const handleMarkerClick = (property: Property) => {
    // Below is for changing the color from green to red
    setActiveProperty(activeProperty?.id === property.id ? null : property);
  };

  // Fucntion to close the carousel dropdown
  const handleCloseCarousel = () => {
    setActiveProperty(null);
  };
  // inital map settings on default and load
  const mapOptions = {
    center: [35.1495, -90.049] as [number, number],
    zoom: 13,
    maxZoom: 18,
    minZoom: 5,
  };

  return (
    <div>
      <MapContainer
        style={{ height: "100vh", width: "100%", zIndex: 0 }}
        {...mapOptions}
      >
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        {properties.map((property) => (
          <Marker
            key={property.id}
            position={[property.latitude, property.longitude]}
            icon={propertyMarker(property === activeProperty ? "green" : "red")}
            eventHandlers={{
              click: () => {
                handleMarkerClick(property);
              },
            }}
          >
            <Popup className="hidden">{property.name}</Popup>
          </Marker>
        ))}
      </MapContainer>
      {activeProperty && (
        <PropertyCarousel
          images={activeProperty.images} // Pass the images of the active property
          properties={properties} // Pass all properties for desktop
          onClose={handleCloseCarousel}
        />
      )}
    </div>
  );
};

export default PropertyMap;
