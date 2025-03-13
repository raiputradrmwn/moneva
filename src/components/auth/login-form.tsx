"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { login } from "@/app/api/auth/api";
import { toast } from "sonner";
import { Loader2 } from "lucide-react"; 
import { useRouter } from "next/navigation";

export function LoginForm({ className, ...props }: React.ComponentPropsWithoutRef<"form">) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      await login(email, password);
      toast.success("Login Berhasil", {
        description: "Selamat Datang di Moneva",
      });
      setTimeout(() => {
        router.push("/dashboard");
      }, 500);
    } catch (error) {
      toast.error("Login Gagal", {
        description: "Email atau Password Salah",
      });
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className={cn("flex flex-col gap-6", className)} {...props}>
      <div className="flex flex-col items-center gap-2 text-center">
        <h1 className="text-2xl font-bold">Silahkan Login untuk Masuk Ke Moneva</h1>
        <p className="text-balance text-sm text-muted-foreground">
          Masukkan Email dan Password
        </p>
      </div>
      <div className="grid gap-6">
        <div className="grid gap-2">
          <Label htmlFor="email">Email</Label>
          <Input
            id="email"
            type="email"
            placeholder="m@example.com"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="grid gap-2">
          <Label htmlFor="password">Password</Label>
          <Input
            id="password"
            type="password"
            placeholder="********"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <Button type="submit" className="w-full flex items-center justify-center gap-2" disabled={loading}>
          {loading ? <Loader2 className="h-5 w-5 animate-spin" /> : "Login"}
        </Button>
      </div>
    </form>
  );
}
