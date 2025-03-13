import React from "react";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="py-8 shadow-lg">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-start px-6 md:px-12 lg:px-24 space-y-6 md:space-y-0">
        <div className="flex flex-col items-start">
          <div className="flex flex-row space-x-4">
            <Image src="/image/bumn.png" alt="BUMN" width={150} height={50} />
            <Image src="/image/ailo.png" alt="Ailo" width={110} height={50} />
            <Image
              src="/image/logo.jpg"
              alt="Telkom University"
              width={200}
              height={200}
            />
            <Image
              src="/image/logotelkom1.png"
              alt="Telkom Indonesia"
              width={40}
              height={40}
            />
          </div>
          <p className="mt-4 text-sm text-gray-700">
            Gedung Bangkit, Telkom UniversIty Jl.Telekomunikasi,
            <br />
            Terusan Buah Batu, Bandung 40257, Indonesia
          </p>
          <br />
          <p className="text-sm text-gray-700">Bandung, Jawa Barat</p>
        </div>
        <div className="flex flex-col items-start">
          <p className="text-lg font-semibold mb-4">Contact Us</p>
        </div>
      </div>
      <hr className="my-6 border-gray-300" />
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center px-6 md:px-12 lg:px-24">
        <p className="text-sm text-gray-600">&copy; 2024 Team</p>
        <div className="flex flex-row space-x-4">
          <span className="text-sm text-gray-600 hover:text-red-600 cursor-pointer">
            Terms of Service
          </span>
          <span className="text-sm text-gray-600 hover:text-red-600 cursor-pointer">
            Privacy Policy
          </span>
          <span className="text-sm text-gray-600 hover:text-red-600 cursor-pointer">
            Cookies
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
