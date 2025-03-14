"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import {
  Loader,
  MapPin,
  FileDown,
  User,
  ChevronLeft,
  CheckCircle,
  XCircle,
  Star,
} from "lucide-react";
import { getDetailById } from "@/app/api/form/api";
import * as XLSX from "xlsx";

import dynamic from "next/dynamic";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";

const MapDetail = dynamic(
  () => import("@/app/(private)/detail/components/MapDetail"),
  {
    ssr: false,
  }
);

interface DetailContentProps {
  id: string;
}
interface OutcomeData {
  konsumsiAirPerTahun?: number;
  kualitasAir?: string;
  rataRataTerpaparPenyakitSebelum?: number;
  rataRataTerpaparPenyakitSesudah?: number;
  awarenessMasyarakat?: string;
  penilaianSaranaAirBersih?: string;
  penilaianSanitasi?: string;
  deskripsiAwareness?: string;
  bisaDipakaiMCK?: boolean;
  bisaDiminum?: boolean;
  ecoKeberlanjutan?: boolean;
  levelSaranaAirBersih?: number;
  levelSanitasi?: number;
}

interface DampakData {
  biayaBerobatSebelum?: number;
  biayaBerobatSesudah?: number;
  biayaAirBersihSebelum?: number;
  biayaAirBersihSesudah?: number;
  peningkatanEkonomiSebelum?: number;
  peningkatanEkonomiSesudah?: number;
  penurunanOrangSakitSebelum?: number;
  penurunanOrangSakitSesudah?: number;
  penurunanStuntingSebelum?: number;
  penurunanStuntingSesudah?: number;
  peningkatanIndeksKesehatanSebelum?: number;
  peningkatanIndeksKesehatanSesudah?: number;
  volumeLimbahDikelola?: number;
  prosesKonservasiAir?: boolean;
  penurunanIndexPencemaranSebelum?: number;
  penurunanIndexPencemaranSesudah?: number;
  sumberAirSebelum?: string;
  sumberAirSesudah?: string;
  biayaListrikSebelum?: number;
  biayaListrikSesudah?: number;
}
const dampakLabels: Record<string, string> = {
  sumberAirSebelum: "Sumber Air Sebelum",
  sumberAirSesudah: "Sumber Air Sesudah",
  biayaListrikSebelum: "Biaya Listrik Sebelum",
  biayaListrikSesudah: "Biaya Listrik Sesudah",
  biayaBerobatSebelum: "Biaya Berobat Sebelum",
  biayaBerobatSesudah: "Biaya Berobat Sesudah",
  biayaAirBersihSebelum: "Biaya Air Pemenuhan Bersih Sebelum",
  biayaAirBersihSesudah: "Biaya Air Pemenuhan Bersih Sesudah",
  peningkatanEkonomiSebelum: "Peningkatan Ekonomi Sebelum",
  peningkatanEkonomiSesudah: "Peningkatan Ekonomi Sesudah",
  penurunanOrangSakitSebelum: "Penurunan Orang Sakit Sebelum",
  penurunanOrangSakitSesudah: "Penurunan Orang Sakit Sesudah",
  penurunanStuntingSebelum: "Penurunan Stunting Sebelum",
  penurunanStuntingSesudah: "Penurunan Stunting Sesudah",
  peningkatanIndeksKesehatanSebelum:
    "Peningkatan Indeks Kesehatan Masyarakat Sebelum (terutama perempuan dan anak-anak)",
  peningkatanIndeksKesehatanSesudah:
    "Peningkatan Indeks Kesehatan Masyarakat Sesudah (terutama perempuan dan anak-anak)",
  volumeLimbahDikelola: "Volume Limbah Yang Berhasil Dikelola Masyarakat",
  prosesKonservasiAir: "Proses Konservasi Air",
  penurunanIndexPencemaranSebelum:
    "Penurunan Index Pencemaran Lingkungan Sebelum",
  penurunanIndexPencemaranSesudah:
    "Penurunan Index Pencemaran Lingkungan Sesudah",
};
const outcomeLabels: Record<string, string> = {
  konsumsiAirPerTahun: "Konsumsi Air per Tahun (liter)",
  kualitasAir: "Kualitas air sudah sesuai kebutuhan?",
  rataRataTerpaparPenyakitSebelum: "Rata-rata Terpapar Penyakit Sebelum",
  rataRataTerpaparPenyakitSesudah: "Rata-rata Terpapar Penyakit Sesudah",
  airHanyaUntukMCK: "Air hanya untuk MCK",
  aksesTerbatas: "Akses terbatas",
  butuhUsahaJarak: "Butuh usaha jarak",
  airTersediaSetiapSaat: "Air tersedia setiap saat",
  pengelolaanProfesional: "Pengelolaan profesional",
  aksesMudah: "Akses mudah",
  efisiensiAir: "Efisiensi air",
  ramahLingkungan: "Ramah lingkungan",
  keadilanAkses: "Keadilan akses",
  adaptabilitasSistem: "Adaptabilitas sistem",
  toiletBerfungsi: "Toilet berfungsi",
  aksesSanitasiMemadai: "Akses sanitasi memadai",
  eksposurLimbah: "Eksposur limbah",
  limbahDikelolaAman: "Limbah dikelola aman",
  adaSeptictank: "Ada septictank",
  sanitasiBersih: "Sanitasi bersih",
  aksesKelompokRentan: "Akses kelompok rentan",
  rasioMCKMemadai: "Rasio MCK memadai",
  keberlanjutanEkosistem: "Keberlanjutan ekosistem",
  pemanfaatanAirEfisien: "Pemanfaatan air efisien",
};

interface DetailData {
  id: number;
  lokasi: string;
  jenisBantuan: string;
  jmlhKK: number;
  jmlhMasyarakat: number;
  jmlhPerempuan: number;
  jmlhLaki: number;
  debitAir: number;
  pemakaianAir: number;
  sistemPengelolaan: string;
  sumberAir: string;
  hargaAir: number;
  pH: number;
  TDS: number;
  EC: number;
  ORP: number;
  user: {
    name: string;
  };
  lat: number;
  long: number;
  img: string;
  outcome?: OutcomeData;
  dampak?: DampakData;
}

const DetailContent = ({ id }: DetailContentProps) => {
  const [detail, setDetail] = useState<DetailData | null>(null);

  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const fetchDetail = async () => {
      try {
        const data = await getDetailById(Number(id));
        setDetail(data);
      } catch (error) {
        console.error("Gagal mengambil detail:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchDetail();
  }, [id]);
  const formatKey = (key: string): string => {
    return key
      .replace(/([A-Z])/g, " $1")
      .replace(/Sebelum/g, "(Sebelum)")
      .replace(/Sesudah/g, "(Sesudah)")
      .replace(/\b\w/g, (char) => char.toUpperCase())
      .trim();
  };

  const formatValue = (value: string | number | boolean | null) => {
    if (value === true)
      return <CheckCircle className="text-green-500 w-5 h-5" />;
    if (value === false) return <XCircle className="text-red-500 w-5 h-5" />;
    return value !== null && value !== undefined ? value : "Belum ada data";
  };
  const handleDownloadExcel = () => {
    if (!detail) return;
    const mainData = [
      ["Informasi Utama", ""],
      ["Item", "Detail"],
      ["Lokasi", detail.lokasi],
      ["Jenis Bantuan", detail.jenisBantuan],
      ["Jumlah KK", detail.jmlhKK],
      ["Jumlah Masyarakat", detail.jmlhMasyarakat],
      ["Jumlah Perempuan", detail.jmlhPerempuan],
      ["Jumlah Laki-Laki", detail.jmlhLaki],
      ["Debit Air", detail.debitAir],
      ["Pemakaian Air", detail.pemakaianAir],
      ["Sistem Pengelolaan", detail.sistemPengelolaan],
      ["Sumber Air", detail.sumberAir],
      ["Harga Air", detail.hargaAir],
      ["pH", detail.pH],
      ["TDS", detail.TDS],
      ["EC", detail.EC],
      ["ORP", detail.ORP],
      [],
    ];
    const outcomeData = detail.outcome
      ? [
          ["Outcome", ""],
          ["Item", "Detail"],
          ...Object.entries(detail.outcome)
            .filter(
              ([key, value]) =>
                value !== null &&
                key !== "createdAt" &&
                key !== "id" &&
                key !== "formInputId"
            )
            .map(([key, value]) => [formatKey(key), value]),
          [],
        ]
      : [["Outcome", "Belum ada data"], []];

    const dampakData = detail.dampak
      ? [
          ["Dampak", "", ""],
          ["No", "Item", "Sebelum", "Sesudah"],
          ...Object.entries(detail.dampak)
            .filter(([key]) => key.includes("Sebelum"))
            .map(([key, value], index) => {
              const baseKey = key.replace("Sebelum", "").trim();
              return [
                index + 1,
                formatKey(baseKey),
                value,
                detail.dampak?.[`${baseKey}Sesudah` as keyof DampakData] ||
                  "Belum ada data",
              ];
            }),
          [],
        ]
      : [["Dampak", "Belum ada data"], []];

    const finalData = [...mainData, ...outcomeData, ...dampakData];
    const ws = XLSX.utils.aoa_to_sheet(finalData);
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, "Detail Lokasi");
    XLSX.writeFile(wb, `Detail_${detail.lokasi}.xlsx`);
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <Loader className="h-10 w-10 animate-spin text-gray-600" />
      </div>
    );
  }
  const renderStars = (level: number | undefined) => {
    if (!level || level === 0) return null; // Jika tidak ada level, jangan tampilkan apa pun
    return (
      <div className="flex items-center gap-1">
        {Array(level)
          .fill(0)
          .map((_, i) => (
            <Star key={i} className="h-5 w-5 text-yellow-500" />
          ))}
      </div>
    );
  };
  return (
    <div className="container mx-auto p-8">
      <button
        className="flex items-center gap-2 text-gray-700 hover:text-gray-900 font-medium mb-4 cursor-pointer"
        onClick={() => router.push("/dashboard")}
      >
        <ChevronLeft className="w-5 h-5" />
        Kembali ke Dashboard
      </button>

      <h1 className="text-3xl font-bold text-gray-800 flex items-center gap-2">
        Detail Laporan
      </h1>
      <div className="flex items-center gap-3 text-lg text-gray-700 mt-2">
        <User className="w-6 h-6 text-blue-500" />
        <span>
          Pembuat Laporan: <strong>{detail?.user.name}</strong>
        </span>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 border border-gray-200 p-6 rounded-lg mt-4">
        {/* Bagian Gambar */}
        <div className="flex flex-col items-center">
          <Image
            src={detail?.img || ""}
            alt={detail?.lokasi || ""}
            width={350}
            height={250}
            className="rounded-lg shadow-md object-cover"
          />
          {detail?.outcome?.levelSaranaAirBersih &&
            detail?.outcome?.levelSaranaAirBersih !== 0 && (
              <div className="mt-4 flex flex-col items-center">
                <p className="text-gray-800 font-medium">
                  Level Sarana Air Bersih
                </p>
                {renderStars(detail.outcome.levelSaranaAirBersih)}
              </div>
            )}

          {detail?.outcome?.levelSanitasi &&
            detail?.outcome?.levelSanitasi !== 0 && (
              <div className="mt-4 flex flex-col items-center">
                <p className="text-gray-800 font-medium">Level Sanitasi</p>
                {renderStars(detail.outcome.levelSanitasi)}
              </div>
            )}
        </div>

        {/* Bagian Peta + Level Sanitasi & Sarana Air Bersih */}
        <div className="flex flex-col items-center">
          <MapDetail
            lat={detail?.lat || 0}
            lng={detail?.long || 0}
            lokasi={detail?.lokasi || ""}
          />
          <p className="text-gray-600 flex items-center gap-2 mt-2">
            <MapPin className="h-5 w-5 text-red-500" />
            Koordinat: {detail?.lat}, {detail?.long}
          </p>
        </div>
      </div>

      <div className="flex justify-end mt-4">
        <Button
          onClick={handleDownloadExcel}
          className="flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition"
        >
          <FileDown className="w-5 h-5" /> Download Excel
        </Button>
      </div>

      {/* Informasi Utama */}
      <h2 className="text-2xl font-bold text-gray-800 mt-10 mb-4">
        📊 Informasi Detail
      </h2>
      <div className="overflow-x-auto w-full">
        <Table className="border border-gray-200 rounded-lg">
          <TableHeader>
            <TableRow className="bg-gray-100">
              <TableHead className="w-10 text-center ">No</TableHead>
              <TableHead>Item</TableHead>
              <TableHead>Detail</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {[
              { label: "Lokasi", value: detail?.lokasi },
              { label: "Jenis Bantuan", value: detail?.jenisBantuan },
              { label: "Jumlah KK", value: detail?.jmlhKK },
              { label: "Jumlah Masyarakat", value: detail?.jmlhMasyarakat },
              { label: "Jumlah Perempuan", value: detail?.jmlhPerempuan },
              { label: "Jumlah Laki-Laki", value: detail?.jmlhLaki },
              {
                label: "Jumlah Debit Air yang dihasilkan",
                value: detail?.debitAir,
              },
              {
                label: "Pemakaian Air (Untuk keperluan apa saja)",
                value: detail?.pemakaianAir,
              },
              {
                label: "Sistem Pengelolaan sanitasi dan sarana air bersih",
                value: detail?.sistemPengelolaan,
              },
              { label: "Sumber Air", value: detail?.sumberAir },
              { label: "Harga Air yang dibayar", value: detail?.hargaAir },
              { label: "pH", value: detail?.pH },
              { label: "TDS (ppm)", value: detail?.TDS },
              { label: "EC (µS/cm)", value: detail?.EC },
              { label: "ORP (mV)", value: detail?.ORP },
            ].map((item, index) => (
              <TableRow key={index}>
                <TableCell className="text-center font-medium">
                  {index + 1}
                </TableCell>
                <TableCell>{item.label}</TableCell>
                <TableCell>{item.value}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>

      <h2 className="text-2xl font-bold text-gray-800 mt-10 mb-4">
        📊 Outcome
      </h2>
      <div className="overflow-x-auto w-full">
        {detail?.outcome ? (
          <Table className="border border-gray-200 rounded-lg">
            <TableHeader>
              <TableRow className="bg-gray-100">
                <TableHead className="w-10 text-center p-3">No</TableHead>
                <TableHead className="p-3 text-left">Item</TableHead>
                <TableHead className="p-3 text-left">Detail</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {Object.entries(detail.outcome)
                .filter(
                  ([key, value]) =>
                    value !== null &&
                    value !== undefined &&
                    key !== "createdAt" &&
                    key !== "id" &&
                    key !== "formInputId" &&
                    key !== "levelSanitasi" &&
                    key !== "levelSaranaAirBersih"
                )
                .map(([key, value], index) => (
                  <TableRow key={index} className="border-b">
                    <TableCell className="text-center font-medium p-3">
                      {index + 1}
                    </TableCell>
                    <TableCell className="p-3 text-left">
                    {outcomeLabels[key] || formatKey(key)}
                    </TableCell>
                    <TableCell className="p-3 text-left flex items-center">
                      {formatValue(value)}
                    </TableCell>
                  </TableRow>
                ))}
            </TableBody>
          </Table>
        ) : (
          <p className="text-gray-600">Belum ada data</p>
        )}
      </div>

      <h2 className="text-2xl font-bold text-gray-800 mt-10 mb-4">📊 Dampak</h2>
      <div className="overflow-x-auto w-full">
        {detail?.dampak ? (
          <Table className="border border-gray-200 rounded-lg">
            <TableHeader>
              <TableRow className="bg-gray-100">
                <TableHead>No</TableHead>
                <TableHead>Dampak</TableHead>
                <TableHead className="text-center">Sebelum</TableHead>
                <TableHead className="text-center">Sesudah</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {Object.entries(detail.dampak)
                .filter(([key]) => key.includes("Sebelum"))
                .map(([key, value], index) => {
                  const baseKey = key.replace("Sebelum", "").trim();
                  return (
                    <TableRow key={index}>
                      <TableCell>{index + 1}</TableCell>
                      <TableCell>
                        {dampakLabels[key] || formatKey(baseKey)}
                      </TableCell>
                      <TableCell className="text-center">
                        {formatValue(value)}
                      </TableCell>
                      <TableCell className="text-center">
                        {formatValue(
                          detail.dampak?.[
                            `${baseKey}Sesudah` as keyof DampakData
                          ] ?? null
                        )}
                      </TableCell>
                    </TableRow>
                  );
                })}
            </TableBody>
          </Table>
        ) : (
          <p className="text-gray-600">Belum ada data</p>
        )}
      </div>
    </div>
  );
};
export default DetailContent;
