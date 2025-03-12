"use client";

import Image from "next/image";
import { ChevronDown } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const Navbar = () => {
  return (
    <nav className="w-full bg-white px-6 py-3 flex items-center justify-between">
      {/* Logo dan Title */}
      <div className="flex items-center space-x-3">
        <Image
          src="/image/logo.jpg"
          alt="Telkom University"
          width={190}
          height={190}
        />
      </div>
      <DropdownMenu>
        <DropdownMenuTrigger className="flex items-center space-x-3">
          <div className="w-10 h-10 bg-gray-300 rounded-full"></div>{" "}
          {/* Placeholder Avatar */}
          <div className="text-right">
            <p className="text-sm font-medium text-black">
              Raihan Putra Darmawan
            </p>
            <p className="text-xs text-gray-500">Admin</p>
          </div>
          <ChevronDown className="h-4 w-4 text-gray-600" />
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          <DropdownMenuItem>Profile</DropdownMenuItem>
          <DropdownMenuItem>Logout</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </nav>
  );
};

export default Navbar;
