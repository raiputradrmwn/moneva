import OverviewCard from "@/components/ui/card-overview";

const CardOverview = () => {
  return (
    <section className="bg-[#CC2A2E] text-white p-12 rounded-lg shadow-md mx-auto">
      <h2 className="text-2xl font-bold mb-6">Data Moneva</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-20">
        <OverviewCard
          title="Lokasi Bantuan"
          value="10"
          icon="/icons/location.svg"
        />
        <OverviewCard
          title="Jumlah Keluarga"
          value="100+"
          icon="/icons/family.svg"
        />
        <OverviewCard
          title="Jumlah Bantuan"
          value="100+"
          icon="/icons/help.svg"
        />
      </div>
    </section>
  );
};

export default CardOverview;
