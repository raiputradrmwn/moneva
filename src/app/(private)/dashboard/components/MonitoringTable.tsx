"use client";

import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { ChevronRight } from "lucide-react";

const monitoringData = [
  { id: "01", lokasi: "Pondok Pesantren Hidayatussibyan, Kabupaten Pandeglang", kk: 10, masyarakat: 120, jenis: "Sanitasi", bantuan: 120 },
  { id: "02", lokasi: "Pondok Pesantren Al-Janawiyah, Kabupaten Tangerang", kk: 10, masyarakat: 120, jenis: "Sanitasi", bantuan: 120 },
  { id: "03", lokasi: "Pondok Pesantren Mathla'ul Anwar, Kabupaten Lebak", kk: 10, masyarakat: 120, jenis: "Sanitasi", bantuan: 120 },
  { id: "04", lokasi: "Kp. Pasanggrahan, Kabupaten Tangerang", kk: 10, masyarakat: 120, jenis: "Sanitasi", bantuan: 120 },
  { id: "05", lokasi: "Kampung Umbulian 2, Desa Mangkid, Kabupaten Pandeglang", kk: 10, masyarakat: 120, jenis: "Sanitasi", bantuan: 120 },
];

const MonitoringTable = () => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-xl font-bold mb-4">Monitoring</h2>
      <Table className="w-full">
        <TableHeader className="bg-gray-100">
          <TableRow>
            <TableHead className="text-gray-500 text-left p-4">No</TableHead>
            <TableHead className="text-gray-500 text-left p-4">Lokasi</TableHead>
            <TableHead className="text-gray-500 text-left p-4">Jumlah KK</TableHead>
            <TableHead className="text-gray-500 text-left p-4">Jumlah Masyarakat</TableHead>
            <TableHead className="text-gray-500 text-left p-4">Jenis Bantuan</TableHead>
            <TableHead className="text-gray-500 text-left p-4">Jumlah Bantuan</TableHead>
            <TableHead className="p-4"></TableHead>
          </TableRow>
        </TableHeader>
        <TableBody className="gap-y-2">
          {monitoringData.map((item) => (
            <TableRow key={item.id} className="hover:bg-gray-200 transition">
              <TableCell className="text-gray-700 font-medium p-4">{item.id}</TableCell>
              <TableCell className="text-gray-700 p-4">{item.lokasi}</TableCell>
              <TableCell className="text-gray-700 p-4">{item.kk}</TableCell>
              <TableCell className="text-gray-700 p-4">{item.masyarakat}</TableCell>
              <TableCell className="text-gray-700 p-4">{item.jenis}</TableCell>
              <TableCell className="text-gray-700 p-4">{item.bantuan}</TableCell>
              <TableCell className="p-4">
                <ChevronRight className="h-5 w-5 text-gray-500" />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default MonitoringTable;
