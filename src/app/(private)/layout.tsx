import { ReactNode } from "react";
import Navbar from "@/components/header/Navbar";
import Footer from "@/components/footer/Footer";

export default function PrivateLayout({ children }: { children: ReactNode }) {
  return (
    <main>
      <Navbar />
      {children}
      <Footer/>
    </main>
  );
}
