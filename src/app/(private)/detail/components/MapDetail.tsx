"use client";

import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L, { LatLngTuple } from "leaflet";
import "leaflet/dist/leaflet.css"; 

const customIcon = new L.Icon({
  iconUrl: "/icons/marker.svg",
  iconSize: [30, 40],
  iconAnchor: [15, 40],
  popupAnchor: [0, -40],
});

interface MapDetailProps {
  lat: number;
  lng: number;
  lokasi: string;
}

const MapDetail = ({ lat, lng, lokasi }: MapDetailProps) => {
  const center: LatLngTuple = [lat, lng];

  return (
    <MapContainer center={center} zoom={14} className="h-[400px] w-full rounded-lg">
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      <Marker position={center} icon={customIcon}>
        <Popup>{lokasi}</Popup>
      </Marker>
    </MapContainer>
  );
};

export default MapDetail;
