  "use client";

  import { useEffect, useState } from "react";
  import { useRouter } from "next/navigation";
  import { getInput } from "@/app/api/form/api";
  import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
  import { ChevronRight, Star } from "lucide-react";

  interface MonitoringData {
    id: number;
    lokasi: string;
    jmlhKK: number;
    jmlhMasyarakat: number;
    jenisBantuan: string;
    jmlhBantuan: number;
  }
  const getLevel = (masyarakat: number) => {
    if (masyarakat <= 100) return 1; // Level 1: 1 Bintang
    if (masyarakat <= 200) return 2; // Level 2: 2 Bintang
    return 3; // Level 3: 3 Bintang
  };

  const MonitoringTable = () => {
    const [data, setData] = useState<MonitoringData[]>([]);
    const router = useRouter();
    useEffect(() => {
      const fetchData = async () => {
        try {
          const result = await getInput();
          setData(result);
        } catch (error) {
          console.error("Gagal mengambil data:", error);
        }
      };

      fetchData();
    }, []);

    return (
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-xl font-bold mb-4">Monitoring</h2>
        <div className="overflow-x-auto w-full">
          <Table className="w-full min-w-[700px]">
            <TableHeader className="bg-gray-100">
              <TableRow>
                <TableHead className="text-gray-500 text-left p-4">No</TableHead>
                <TableHead className="text-gray-500 text-left p-4">Lokasi</TableHead>
                <TableHead className="text-gray-500 text-left p-4">Jumlah KK</TableHead>
                <TableHead className="text-gray-500 text-left p-4">Jumlah Masyarakat</TableHead>
                <TableHead className="text-gray-500 text-left p-4">Jenis Bantuan</TableHead>
                <TableHead className="text-gray-500 text-left p-4">Jumlah Bantuan</TableHead>
                <TableHead className="text-gray-500 text-left p-4">Level</TableHead>
                <TableHead className="p-4"></TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {data.length > 0 ? (
                data.map((item, index) => (
                  <TableRow 
                    key={item.id} 
                    className="hover:bg-gray-200 transition cursor-pointer"
                    onClick={() => router.push(`detail/${item.id}`)}
                  >
                    <TableCell className="text-gray-700 font-medium p-4">{index + 1}</TableCell>
                    <TableCell className="text-gray-700 p-4">{item.lokasi}</TableCell>
                    <TableCell className="text-gray-700 p-4">{item.jmlhKK}</TableCell>
                    <TableCell className="text-gray-700 p-4">{item.jmlhMasyarakat}</TableCell>
                    <TableCell className="text-gray-700 p-4">{item.jenisBantuan}</TableCell>
                    <TableCell className="text-gray-700 p-4">{item.jmlhBantuan}</TableCell>
                    <TableCell className="text-gray-700 p-4 flex items-center gap-1">
                      {Array(getLevel(item.jmlhMasyarakat))
                        .fill(0)
                        .map((_, i) => (
                          <Star key={i} className="h-5 w-5 text-yellow-500" />
                        ))}
                    </TableCell>

                    <TableCell className="p-4">
                      <ChevronRight className="h-5 w-5 text-gray-500" />
                    </TableCell>
                  </TableRow>
                ))
              ) : (
                <TableRow>
                  <TableCell colSpan={8} className="text-center p-4 text-gray-500">
                    Loading data...
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </div>
      </div>
    );
  };

  export default MonitoringTable;
