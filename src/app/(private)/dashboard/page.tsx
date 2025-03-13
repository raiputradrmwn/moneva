import MapAddress from "./components/MapAddress";
import CardOverview from "./components/CardOverview";
import MonitoringTable from "./components/MonitoringTable";

export default function Home() {
  return (
    <div className="bg-[#F5F9FD] min-h-screen flex flex-col">
      <div className="container mx-auto px-6 py-10">
        <header className="text-left mb-10">
          <h1 className="text-3xl font-bold text-gray-900">
            Selamat Datang di <span className="text-red-600">Dashboard Moneva</span>
          </h1>
          <p className="text-gray-600 mt-2 text-lg">
            Monitoring lokasi dan distribusi bantuan secara real-time.
          </p>
        </header>
        <section className="mb-10">
          <CardOverview />
        </section>
        <section className="mb-10">
          <MapAddress />
        </section>
        <section className="mt-10">
          <MonitoringTable />
        </section>
      </div>
    </div>
  );
}
