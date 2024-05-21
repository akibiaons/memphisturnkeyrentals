"use client";

import React, { useState, useEffect, useRef } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

// Import for btr listings
import { fetchBtr } from "@/data/fetchbtr";
import BuildToRentCarousel from "../BuildToRent/BuiltToRentCarousel";

interface BuildToRentDeets {
  id: string;
  address: string;
  images: string[];
  price: number;
  beds: number;
  baths: number;
  sqft: number;
  latitude: number;
  longitude: number;
}

const propertyMarker = (color = "red") =>
  new (L as any).divIcon({
    className: "property-marker",
    html: `<div style="background-color: ${color}; width: 20px; height: 20px; border-radius: 50%; display: flex; align-items: center; justify-content: center; color: white;">+</div>`,
    iconSize: [20, 20],
    iconAnchor: [10, 10],
  });

const PropertyMap: React.FC = () => {
  // Hook declarations for setting active property and highlighting on desktop with useRef
  const [activeProperty, setActiveProperty] = useState<BuildToRentDeets | null>(
    null
  );
  const [properties, setProperties] = useState<BuildToRentDeets[]>([]);
  const apiUrl = `${process.env.NEXT_PUBLIC_STRAPI_URL}/api/buildtorents?populate=*`; // this is basically used as the apiUrl

  // New useEffect to just store the data
  useEffect(() => {
    const getProperties = async () => {
      const btrListings = await fetchBtr(apiUrl);
      console.log("Fetched property:", btrListings);
      setProperties(btrListings);
    };
    getProperties();
  }, [apiUrl]);

  // Handle marker on click
  const handleMarkerClick = (property: BuildToRentDeets) => {
    setActiveProperty(activeProperty?.id === property.id ? null : property);
  };
  // Close the carousel mobile menu
  const handleCloseCarousel = () => {
    setActiveProperty(null);
  };
  // initial settings for loading the leaflet map, I wanna figure out a way to make it load near the biggest grouping of markers
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
            <Popup className="hidden">{property.address}</Popup>
          </Marker>
        ))}
      </MapContainer>
      {activeProperty && (
        <BuildToRentCarousel
          activeProperty={activeProperty}
          properties={properties}
          activePropertyId={activeProperty.id}
          onClose={handleCloseCarousel}
        />
      )}
    </div>
  );
};

export default PropertyMap;
