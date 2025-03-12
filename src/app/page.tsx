import { LoginForm } from "@/components/auth/login-form";
import Image from "next/image";

export default function Home() {
  return (
    <div className="grid min-h-svh lg:grid-cols-2">
      <div className="flex flex-col gap-4 p-6 md:p-10">
        <div className="flex justify-center gap-2 md:justify-start">
          <a href="#" className="flex items-center gap-2 font-medium">
              <Image
                src="/image/logo.jpg"
                alt="Logo"  
                width={250}
                height={250}
              />
          </a>
        </div>
        <div className="flex flex-1 items-center justify-center">
          <div className="w-full max-w-xs">
            <LoginForm />
          </div>
        </div>
      </div>
      <div className="relative hidden bg-muted lg:block">
        <Image
          src="/image/universitas-telkom.jpg"
          alt="Image"
          fill
        />
      </div>
    </div>
  )
}
