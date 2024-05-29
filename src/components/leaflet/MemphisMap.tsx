"use client";

import React, { useEffect, useState, useRef } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

import { fetchListings } from "@/data/fetchListings";
import PropertyCarousel from "./PropertyCarousel";

interface PropertyDetails {
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
  const [activeProperty, setActiveProperty] = useState<PropertyDetails | null>(
    null
  );
  const [properties, setProperties] = useState<PropertyDetails[]>([]);
  const apiUrl = `${process.env.NEXT_PUBLIC_STRAPI_URL}/api/forpurchases?populate=*`;

  useEffect(() => {
    const getProperties = async () => {
      const listings = await fetchListings(apiUrl);
      setProperties(listings);
    };
    getProperties();
  }, [apiUrl]);

  const handleMarkerClick = (property: PropertyDetails) => {
    setActiveProperty(property);
  };

  const handleCardClick = (property: PropertyDetails) => {
    setActiveProperty(property);
  };

  const handleCloseCarousel = () => {
    setActiveProperty(null);
  };

  const mapOptions = {
    center: [35.1495, -90.049] as [number, number],
    zoom: 13,
    maxZoom: 18,
    minZoom: 5,
  };

  return (
    <div>
      <div className="relative lg:grid lg:grid-cols-12">
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
                <Popup className="hidden">{property.address}</Popup>
              </Marker>
            ))}
          </MapContainer>
        </div>
        <div className="lg:col-start-10 lg:col-end-13 lg:h-[99vh] lg:overflow-y-auto">
          <div className="w-[100%]">
            <PropertyCarousel
              activeProperty={activeProperty}
              properties={properties}
              activePropertyId={activeProperty?.id || ""}
              onClose={handleCloseCarousel}
              onCardClick={handleCardClick} // Pass the card click handler
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyMap;
