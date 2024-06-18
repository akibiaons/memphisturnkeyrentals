"use client";

import React, { useState, useEffect, useRef } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

// Import for btr listings
import { fetchBtrListings } from "@/data/fetchbtr";
import BuildToRentCarousel from "../BuildToRent/BuiltToRentCarousel";

interface BtrProperty {
  id: number;
  propertyAddress: string;
  latitude: number;
  longitude: number;
  beds: number;
  baths: number;
  sqft: number;
  price: number;
  propertyDesc: string;
  yearBuilt: number;
  occupancy: string;
  propertyStatus: string;
  actualRent: number;
  targetMonthlyRent: number;
  propertyType: string;
  images: string[];
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
  const [activeProperty, setActiveProperty] = useState<BtrProperty | null>(
    null
  );
  const [properties, setProperties] = useState<BtrProperty[]>([]);

  // New useEffect to just store the data
  useEffect(() => {
    const getProperties = async () => {
      const btrListings = await fetchBtrListings();
      console.log("Fetched property:", btrListings);
      setProperties(btrListings);
    };
    getProperties();
  }, []);

  // func 1
  const handleMarkerClick = (property: BtrProperty) => {
    setActiveProperty(property);
  };

  // func 2
  const handleCardClick = (property: BtrProperty) => {
    setActiveProperty(property);
  };

  // func 3
  const handleCloseCarousel = () => {
    setActiveProperty(null);
  };

  // map settings object, don't mess with pls
  const mapOptions = {
    center: [35.1495, -90.049] as [number, number],
    zoom: 13,
    maxZoom: 18,
    minZoom: 5,
  };

  return (
    <div>
      <div className="hidden lg:relative lg:grid lg:grid-cols-12">
        <div className="lg:col-start-1 lg:col-end-10">
          <MapContainer
            style={{ height: "100vh", width: "100%" }}
            {...mapOptions}
          >
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
            {properties.map((property) => (
              <Marker
                key={property.id}
                position={[property.latitude, property.longitude]}
                icon={propertyMarker(
                  property === activeProperty ? "green" : "red"
                )}
                eventHandlers={{
                  click: () => {
                    handleMarkerClick(property);
                  },
                }}
              >
                <Popup className="hidden">{property.propertyAddress}</Popup>
              </Marker>
            ))}
          </MapContainer>
        </div>
        <div className="lg:col-start-10 lg:col-end-13 lg:h-[95vh] lg:overflow-y-auto">
          <div className="lg:w-[100%]">
            <BuildToRentCarousel
              activeProperty={activeProperty}
              properties={properties}
              activePropertyId={activeProperty?.id || ""}
              onClose={handleCloseCarousel}
              onCardClick={handleCardClick} // Pass the card click handler
            />
          </div>
        </div>
      </div>
      <div className="lg:hidden block">
        <MapContainer
          style={{ height: "100vh", width: "100%", zIndex: 0 }}
          {...mapOptions}
        >
          <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
          {properties.map((property) => (
            <Marker
              key={property.id}
              position={[property.latitude, property.longitude]}
              icon={propertyMarker(
                property === activeProperty ? "green" : "red"
              )}
              eventHandlers={{
                click: () => {
                  handleMarkerClick(property);
                },
              }}
            >
              <Popup className="hidden">{property.propertyAddress}</Popup>
            </Marker>
          ))}
        </MapContainer>
        {activeProperty && (
          <BuildToRentCarousel
            activeProperty={activeProperty}
            properties={properties}
            activePropertyId={activeProperty.id}
            onClose={handleCloseCarousel}
            onCardClick={handleCardClick}
          />
        )}
      </div>
    </div>
  );
};

export default PropertyMap;
