"use client";

import { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import Cookies from "js-cookie";
import { Menu, X, ChevronDown } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "../ui/button";
import { toast } from "sonner";

const Navbar = () => {
  const router = useRouter();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const handleLogout = () => {
    Cookies.remove("token");
    toast.success("Logout Berhasil", {
      description: "Sampai Jumpa",
    });
    setTimeout(() => {
      router.push("/");
    }, 500);
  };

  return (
    <>
      <nav className="w-full bg-white px-4 md:px-6 py-2 flex items-center justify-between sticky top-[-1] z-10000 shadow-md overflow-hidden">
        <div className="flex items-center space-x-1 px-4">
          <Image src="/icons/water.svg" alt="Logo" width={0} height={0} className="w-auto h-12" />
          <h1 className="text-xl font-medium">Moneva</h1>
        </div>
        <div className="hidden md:flex items-center space-x-4">
          <DropdownMenu>
            <DropdownMenuTrigger className="flex items-center space-x-3">
              <div className="text-left">
                <p className="text-sm font-medium text-black">Raihan Putra Darmawan</p>
                <p className="text-xs text-gray-500">Admin</p>
              </div>
              <ChevronDown className="h-4 w-4 text-gray-600" />
            </DropdownMenuTrigger>
            <DropdownMenuContent className="z-100000" align="end">
              <DropdownMenuItem onClick={handleLogout}>Logout</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
        <div className="md:hidden">
          <button onClick={() => setIsSidebarOpen(true)}>
            <Menu className="h-6 w-6 text-gray-600" />
          </button>
        </div>
      </nav>
      <div
        className={`fixed inset-0 bg-black bg-opacity-50 z-50 transition-opacity duration-300 ${
          isSidebarOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        onClick={() => setIsSidebarOpen(false)}
      />

      <div
        className={`fixed top-0 left-0 h-full w-64 bg-white shadow-lg z-50 transform transition-transform duration-300 ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {/* Header Sidebar */}
        <div className="flex justify-between items-center px-6 py-4 border-b">
          <h2 className="text-lg font-semibold">Menu</h2>
          <button onClick={() => setIsSidebarOpen(false)}>
            <X className="h-6 w-6 text-gray-600" />
          </button>
        </div>

        {/* Sidebar Content */}
        <div className="p-6 flex flex-col space-y-4">
          <Button variant="ghost" className="text-red-600 text-lg font-medium" onClick={handleLogout}>
            Logout
          </Button>
        </div>
      </div>
    </>
  );
};

export default Navbar;
  