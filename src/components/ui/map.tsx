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

const desaLocations = [
  { id: 1, name: "Desa A", lat: -6.9743, lng: 107.6303 },
  { id: 2, name: "Desa B", lat: -6.9785, lng: 107.6356 },
  { id: 3, name: "Desa C", lat: -6.9721, lng: 107.6280 },
];

const center: LatLngTuple = desaLocations.length > 0
  ? [desaLocations[0].lat, desaLocations[0].lng]
  : [-6.9743, 107.6303];

const Map = () => {
  return (
      <MapContainer center={center} zoom={14} className="h-[400px] max- w-full">
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      {desaLocations.map((desa) => (
        <Marker key={desa.id} position={[desa.lat, desa.lng] as LatLngTuple} icon={customIcon}>
          <Popup>{desa.name}</Popup>
        </Marker>
      ))}
    </MapContainer>
  );
};

export default Map;
