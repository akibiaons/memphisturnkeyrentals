"use client";

import React, { useState, useEffect } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import axios from "axios";
import "leaflet/dist/leaflet.css";

import BuildToRentCarousel from "../BuildToRent/BuiltToRentCarousel";

interface Property {
  id: string;
  name: string;
  address: string;
  images: string[];
  price: number;
  beds: number;
  baths: number;
  sqft: number;
  latitude: number;
  longitude: number;
}

interface PropertyMapProps {
  apiUrl: string;
}

const propertyMarker = (color = "red") =>
  new (L as any).divIcon({
    className: "property-marker",
    html: `<div style="background-color: ${color}; width: 20px; height: 20px; border-radius: 50%; display: flex; align-items: center; justify-content: center; color: white;">+</div>`,
    iconSize: [20, 20],
    iconAnchor: [10, 10],
  });

const PropertyMap: React.FC<PropertyMapProps> = ({ apiUrl }) => {
  const [properties, setProperties] = useState<Property[]>([]);
  const [activeProperty, setActiveProperty] = useState<Property | null>(null);

  useEffect(() => {
    const fetchProperties = async () => {
      try {
        const response = await axios.get(apiUrl);
        if (response.data && response.data.data) {
          const data = response.data.data.map((item: any) => ({
            id: item.id,
            name: item.attributes.name,
            address: item.attributes.propertyAddress,
            images: item.attributes.propertyImg.data.map(
              (img: any) => img.attributes.url
            ),
            price: item.attributes.price,
            beds: item.attributes.beds,
            baths: item.attributes.baths,
            sqft: item.attributes.sqft,
            latitude: item.attributes.latitude,
            longitude: item.attributes.longitude,
          }));
          console.log("Mapped Data:", data);
          setProperties(data);
        } else {
          console.error("Invalid API response structure:", response.data);
        }
      } catch (error) {
        console.error("Failed to fetch properties:", error);
      }
    };

    fetchProperties();
  }, [apiUrl]);

  const handleMarkerClick = (property: Property) => {
    setActiveProperty(activeProperty?.id === property.id ? null : property);
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
    <div className="flex h-screen">
      <div className="flex-grow">
        <MapContainer
          style={{ height: "100vh", width: "100%", zIndex: 0 }}
          {...mapOptions}
        >
          <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
          {properties.map(
            (property) =>
              property.latitude &&
              property.longitude && (
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
                  <Popup className="hidden">{property.name}</Popup>
                </Marker>
              )
          )}
        </MapContainer>
      </div>
      {activeProperty && (
        <BuildToRentCarousel
          images={activeProperty.images}
          properties={properties}
          onClose={handleCloseCarousel}
        />
      )}
    </div>
  );
};

export default PropertyMap;
