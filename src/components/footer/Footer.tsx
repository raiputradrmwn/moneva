import React from "react";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="py-8 bg-white shadow-lg">
      <div className="container mx-auto px-6 md:px-12 lg:px-24">
        {/* Bagian Atas Footer */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Logo dan Alamat */}
          <div className="flex flex-col items-center md:items-start">
            <div className="flex flex-wrap justify-center md:justify-start gap-4">
              <Image src="/image/bumn.png" alt="BUMN" width={120} height={40} />
              <Image src="/image/ailo.png" alt="Ailo" width={100} height={40} />
              <Image src="/image/logo.jpg" alt="Telkom University" width={180} height={180} />
              <Image src="/image/logotelkom1.png" alt="Telkom Indonesia" width={40} height={40} />
            </div>
            <p className="mt-4 text-center md:text-left text-sm text-gray-700">
              Gedung Bangkit, Telkom University, Jl. Telekomunikasi,<br />
              Terusan Buah Batu, Bandung 40257, Indonesia
            </p>
            <p className="text-sm text-gray-700 mt-2 text-center md:text-left">Bandung, Jawa Barat</p>
          </div>

          {/* Contact & Links */}
          <div className="flex flex-col items-center md:items-start">
            <p className="text-lg font-semibold mb-4">Contact Us</p>
            <p className="text-sm text-gray-700">Email: support@example.com</p>
            <p className="text-sm text-gray-700">Phone: +62 812 3456 7890</p>
          </div>
        </div>

        {/* Garis Pemisah */}
        <hr className="my-6 border-gray-300" />

        {/* Bagian Bawah Footer */}
        <div className="flex flex-col md:flex-row justify-between items-center text-center md:text-left">
          <p className="text-sm text-gray-600">&copy; 2024 Team</p>
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
