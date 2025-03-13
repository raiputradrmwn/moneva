import React from "react";
import Image from "next/image";
import { Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-8 bg-white shadow-lg">
      <div className="container mx-auto px-6 md:px-12 lg:px-24">
        {/* Bagian Atas Footer */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="flex flex-col items-center md:items-start">
            <div className="flex flex-wrap justify-center md:justify-start gap-4">
              <Image src="/image/bumn.png" alt="BUMN" width={130} height={40} />
              <Image src="/image/ailo.png" alt="Ailo" width={120} height={40} />
              <Image
                src="/image/logo.jpg"
                alt="Telkom University"
                width={200}
                height={180}
              />
              <Image
                src="/image/logotelkom1.png"
                alt="Telkom Indonesia"
                width={40}
                height={40}
              />
            </div>
            <p className="mt-4 text-center md:text-left text-sm text-gray-700">
              Gedung Bangkit, Telkom University, Jl. Telekomunikasi,
              <br />
              Terusan Buah Batu, Bandung 40257, Indonesia
            </p>
            <p className="text-sm text-gray-700 mt-2 text-center md:text-left">
              Bandung, Jawa Barat
            </p>
          </div>
          <div className="flex flex-col items-center md:items-start">
            <p className="text-lg font-semibold mb-4">Contact Us</p>
            <a
              href="mailto:dcs@telkomuniversity.ac.id"
              className="flex items-center space-x-2 text-sm"
            >
              <Mail className="w-5 h-5 text-gray-700" />
              <span>dcs@telkomuniversity.ac.id</span>
            </a>
          </div>
        </div>
        <hr className="my-6 border-gray-300" />
        <div className="flex flex-col md:flex-row justify-between items-center text-center md:text-left">
          <p className="text-sm text-gray-600">&copy; 2025 Ailo</p>
          <div className="flex flex-wrap justify-center md:justify-start gap-4 mt-4 md:mt-0">
            <span className="text-sm text-gray-600 hover:text-red-600 cursor-pointer transition">
              Terms of Service
            </span>
            <span className="text-sm text-gray-600 hover:text-red-600 cursor-pointer transition">
              Privacy Policy
            </span>
            <span className="text-sm text-gray-600 hover:text-red-600 cursor-pointer transition">
              Cookies
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
