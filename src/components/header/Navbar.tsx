"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import Cookies from "js-cookie";
import { Menu, X, ChevronDown, Loader2 } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "../ui/button";
import { toast } from "sonner";
import Link from "next/link";
import { whoami } from "@/app/api/auth/api"; 

interface User {
  name: string;
  role: string;
}

const Navbar = () => {
  const router = useRouter();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const data = await whoami();
        setUser(data);
      } catch (error) {
        console.error("Gagal mengambil data pengguna:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchUser();
  }, []);

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
      <nav className="w-full bg-white px-4 md:px-6 py-2 flex items-center justify-between sticky top-0 z-1000 shadow-md">
        {/* Logo */}
        <Link href="/dashboard" className="flex items-center space-x-2">
          <Image
            src="/icons/water.svg"
            alt="Logo"
            width={40}
            height={40}
            className="w-10 h-10"
          />
          <h1 className="text-xl font-medium">Moneva</h1>
        </Link>

        <div className="hidden md:flex items-center space-x-4">
          <DropdownMenu>
            <DropdownMenuTrigger className="flex items-center space-x-3">
              {loading ? (
                <Loader2 className="animate-spin w-5 h-5 text-gray-600" />
              ) : (
                <>
                  <div className="text-left">
                    <p className="text-sm font-medium text-black">
                      {user?.name || "User"}
                    </p>
                    <p className="text-xs text-gray-500">
                      {user?.role || "Role Tidak Diketahui"}
                    </p>
                  </div>
                  <ChevronDown className="h-4 w-4 text-gray-600" />
                </>
              )}
            </DropdownMenuTrigger>
            <DropdownMenuContent className="z-10000" align="end">
              <DropdownMenuItem onClick={handleLogout}>Logout</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>

        {/* Button Sidebar untuk Mobile */}
        <div className="md:hidden">
          <button onClick={() => setIsSidebarOpen(true)}>
            <Menu className="h-6 w-6 text-gray-600" />
          </button>
        </div>
      </nav>

      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={() => setIsSidebarOpen(false)}
        />
      )}

      {/* Sidebar (untuk Mobile) */}
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
          <Button
            variant="ghost"
            className="text-red-600 text-lg font-medium"
            onClick={handleLogout}
          >
            Logout
          </Button>
        </div>
      </div>
    </>
  );
};

export default Navbar;
