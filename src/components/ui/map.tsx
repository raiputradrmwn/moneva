"use client";

import { useEffect, useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L, { LatLngTuple } from "leaflet";
import "leaflet/dist/leaflet.css";
import { getInput } from "@/app/api/form/api";
import { Loader2 } from "lucide-react";

const customIcon = new L.Icon({
  iconUrl: "/icons/marker.svg",
  iconSize: [30, 40],
  iconAnchor: [15, 40],
  popupAnchor: [0, -40],
});

interface DesaLocation {
  id: number;
  name: string;
  lat: number;
  lng: number;
}

// Perbaiki Tipe Data dari API
interface ApiResponseItem {
  id: number;
  lokasi?: string;
  lat?: number;
  long?: number;
}

const Map = () => {
  const [desaLocations, setDesaLocations] = useState<DesaLocation[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchLocations = async () => {
      try {
        const data: ApiResponseItem[] = await getInput();
        if (data) {
          const locations: DesaLocation[] = data
            .filter((item) => item.lat !== undefined && item.long !== undefined)
            .map((item) => ({
              id: item.id,
              name: item.lokasi || "Desa Tanpa Nama",
              lat: item.lat!,
              lng: item.long!,
            }));
          setDesaLocations(locations);
        }
      } catch (error) {
        console.error("Gagal mengambil data lokasi:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchLocations();
  }, []);

  const center: LatLngTuple = [-2.5489, 118.0149];

  return (
    <div className="relative w-full h-[400px]">
      {loading && (
        <div className="absolute inset-0 flex items-center justify-center bg-white/70 z-10">
          <Loader2 className="animate-spin w-8 h-8 text-gray-500" />
        </div>
      )}

      <MapContainer center={center} zoom={5} className="h-full w-full">
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        {desaLocations.map((desa) => (
          <Marker
            key={desa.id}
            position={[desa.lat, desa.lng] as LatLngTuple}
            icon={customIcon}
          >
            <Popup>{desa.name}</Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
};

export default Map;
