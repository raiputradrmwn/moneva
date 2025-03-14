"use client";
import { LoginForm } from "@/components/auth/login-form";
import Image from "next/image";
import { useRouter } from "next/navigation";
import Cookies from "js-cookie";
import { useEffect } from "react";

export default function Home() {
  const router = useRouter();
  useEffect(() => {
    const token = Cookies.get("token"); 
    if (token) {
      router.push("/dashboard"); 
    }
  }, [router]);
  return (
    <div className="grid min-h-svh lg:grid-cols-2">
      <div className="flex flex-col gap-4 p-6 md:p-10">
        <div className="flex justify-center gap-2 ">
        <div className="flex flex-wrap justify-center items-center gap-4 md:gap-6 lg:gap-8">
            <Image src="/image/bumn.png" alt="BUMN" width={90} height={50} />
            <Image src="/image/ailo.png" alt="Ailo" width={90} height={50} />
            <Image
              src="/image/logo.jpg"
              alt="Telkom University"
              width={200}
              height={200}
            />
            <Image
              src="/image/logotelkom1.png"
              alt="Telkom Indonesia"
              width={35}
              height={35}
            />
          </div>
        </div>
        <div className="flex flex-1 items-center justify-center">
          <div className="w-full max-w-xs">
            <LoginForm />
          </div>
        </div>
      </div>
      <div className="relative hidden bg-muted lg:block">
        <Image
          src="/image/telkom.jpg"
          alt="Image"
          fill
          objectFit="cover"
          objectPosition="center"
        />
      </div>
    </div>
  );
}
