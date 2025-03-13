"use client";
import dynamic from "next/dynamic";

const MapComponent = dynamic(() => import("@/components/ui/map"), {
  ssr: false,
});

const MapAddress = () => {
  return (
    <div className="mt-6">
      <MapComponent />
    </div>
  );
};

export default MapAddress;
