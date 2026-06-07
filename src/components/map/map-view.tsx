"use client";

import "leaflet/dist/leaflet.css";

import { CircleMarker, MapContainer, Popup, TileLayer, Tooltip } from "react-leaflet";

import type { Place } from "@/lib/types";
import { MMR_CENTER, MMR_DEFAULT_ZOOM } from "@/lib/places";
import { PLACE_TYPE_COLORS } from "@/lib/map";
import { PinPopup } from "@/components/pins/pin-popup";

interface MapViewProps {
  places: Place[];
}

export default function MapView({ places }: MapViewProps) {
  return (
    <MapContainer
      center={MMR_CENTER}
      zoom={MMR_DEFAULT_ZOOM}
      scrollWheelZoom
      className="size-full"
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {places.map((place) => (
        <CircleMarker
          key={place.id}
          center={[place.lat, place.lng]}
          radius={8}
          pathOptions={{
            color: "#ffffff",
            weight: 1.5,
            fillColor: PLACE_TYPE_COLORS[place.type],
            fillOpacity: 0.9,
          }}
        >
          <Tooltip>{place.name}</Tooltip>
          <Popup>
            <PinPopup place={place} />
          </Popup>
        </CircleMarker>
      ))}
    </MapContainer>
  );
}
