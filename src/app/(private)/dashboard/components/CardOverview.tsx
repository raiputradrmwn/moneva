"use client";

import { useEffect, useState } from "react";
import OverviewCard from "@/components/ui/card-overview";
import { getTotalKK, getTotalBantuan } from "@/app/api/data/api";
import { Loader } from "lucide-react"; // Import Loader dari Lucide React

const CardOverview = () => {
  const [totalKK, setTotalKK] = useState<number | null>(null);
  const [totalBantuan, setTotalBantuan] = useState<number | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const kk = await getTotalKK();
        const bantuan = await getTotalBantuan();
        
        setTotalKK(kk);
        setTotalBantuan(bantuan);
      } catch (error) {
        console.error("Gagal mengambil data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <section className="bg-[#CC2A2E] text-white p-8 md:p-12 rounded-lg shadow-md mx-auto">
      <h2 className="text-2xl md:text-3xl font-bold mb-6 text-center">Data Moneva</h2>

      {/* Grid untuk Responsivitas */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-10 lg:gap-14">
        <OverviewCard
          title="Lokasi Bantuan"
          value={loading ? <Loader className="animate-spin w-5 h-5" /> : "10"}
          icon="/icons/location.svg"
        />
        <OverviewCard
          title="Jumlah Keluarga"
          value={loading ? <Loader className="animate-spin w-5 h-5" /> : totalKK !== null ? totalKK.toLocaleString() : "-"}
          icon="/icons/family.svg"
        />
        <OverviewCard
          title="Jumlah Bantuan"
          value={loading ? <Loader className="animate-spin w-5 h-5" /> : totalBantuan !== null ? totalBantuan.toLocaleString() : "-"}
          icon="/icons/help.svg"
        />
      </div>
    </section>
  );
};

export default CardOverview;
