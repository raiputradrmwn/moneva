import CardOverview from "./components/CardOverview";
import MonitoringTable from "./components/MonitoringTable";


export default function Home() {
  return (
    <div className="min-h-screen bg-[#F5F9FD]">
      <div className="container mx-auto px-6 py-10">
        <h1 className="text-2xl font-bold text-gray-800 text-center mb-6">
          Selamat Datang di Dashboard Moneva
        </h1>
        <CardOverview />
        <div className="mt-10">
          <MonitoringTable />
        </div>
      </div>
    </div>
  );
}
