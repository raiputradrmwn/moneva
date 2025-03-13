import OverviewCard from "@/components/ui/card-overview";

const CardOverview = () => {
  return (
    <section className="bg-[#CC2A2E] text-white p-8 md:p-12 rounded-lg shadow-md mx-auto">
      <h2 className="text-2xl md:text-3xl font-bold mb-6 text-center">Data Moneva</h2>

      {/* Grid untuk Responsivitas */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-10 lg:gap-14">
        <OverviewCard title="Lokasi Bantuan" value="10" icon="/icons/location.svg" />
        <OverviewCard title="Jumlah Keluarga" value="100+" icon="/icons/family.svg" />
        <OverviewCard title="Jumlah Bantuan" value="100+" icon="/icons/help.svg" />
      </div>
    </section>
  );
};

export default CardOverview;
