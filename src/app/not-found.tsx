"use client";

import { useRouter } from "next/navigation";
import Image from "next/image";
import { Button } from "@/components/ui/button";

const NotFound = () => {
  const router = useRouter();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-gray-800">
      <div className="relative w-96 h-96">
        <Image src="/image/404.png" alt="Not Found" layout="fill" objectFit="contain" />
      </div>

      <h1 className="text-4xl font-bold text-[#CC2A2E] mt-6">Oops! Halaman Tidak Ditemukan</h1>
      <p className="text-gray-600 text-lg mt-2">
        Maaf, halaman yang Anda cari tidak tersedia atau telah dipindahkan.
      </p>
      <Button
        className="mt-6 px-6 py-3 bg-[#CC2A2E] text-white font-semibold rounded-md hover:bg-[#CC2A2E]/90 transition"
        onClick={() => router.push("/")}
      >
        Kembali ke Beranda
      </Button>
    </div>
  );
};

export default NotFound;
