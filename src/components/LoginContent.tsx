"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Input } from "@/components/ui/input";
import { HotelaatBtn } from "@/components/utils/HotelaatBtn";
import { Eye, EyeOff } from "lucide-react";
import { Checkbox } from "@/components/ui/checkbox";
import { useRouter, useSearchParams } from "next/navigation";
import { toast } from "sonner";

const loginFormFields = [
  {
    id: "reseller_code",
    name: "resellerCode",
    type: "text",
    placeHolder: "Agent ID",
  },
  {
    id: "username",
    name: "username",
    type: "text",
    placeHolder: "Username",
  },
];

export default function LoginPage() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const [formData, setFormData] = useState({
    resellerCode: "",
    username: "",
    password: "",
  });

  // Load saved credentials if "remember me" was checked
  useEffect(() => {
    const saved = localStorage.getItem("hotelaat-credentials");
    if (saved) {
      const parsed = JSON.parse(saved);
      setFormData(parsed);
      setRememberMe(true);
    }
  }, []);

  // Toast notification for invalid credentials
  useEffect(() => {
    const warning = searchParams.get("warnings");

    if (warning) {
      toast.error(decodeURIComponent(warning), {
        description: "Please check your credentials and try again.",
        duration: 5000,
        onAutoClose: () => {
          // Create a new URLSearchParams object from current search params
          const params = new URLSearchParams(searchParams.toString());
          params.delete("warnings"); // Remove the 'warnings' parameter

          // Construct the new URL path
          const newPath = `${window.location.pathname}${
            params.toString() ? `?${params.toString()}` : ""
          }`;

          // Update the URL without reloading the page
          router.replace(newPath);
        },
      });
    }
  }, [searchParams, router]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (rememberMe) {
      localStorage.setItem("hotelaat-credentials", JSON.stringify(formData));
    } else {
      localStorage.removeItem("hotelaat-credentials");
    }

    const form = document.getElementById("login-form") as HTMLFormElement;
    form.submit();
  };

  return (
    <main className="relative min-h-dvh overflow-hidden bg-white py-32">
      {/* Background Shapes */}
      <div className="bg-h-purple-100 absolute -right-[12vw] hidden h-[139vh] w-[58vw] -rotate-[154deg] rounded-full blur-3xl lg:block" />
      <div className="bg-h-purple-100 absolute -top-[8vw] -left-[20vw] hidden h-[80vh] w-[43vw] rotate-[154deg] rounded-full blur-3xl lg:block" />

      {/* Main Section */}
      <section className="mx-auto max-w-[1440px] px-2 py-4 sm:px-6 sm:py-6">
        <div className="relative z-10 flex flex-col items-center justify-center bg-[url(/assets/login/bg-img.png)] bg-cover bg-center bg-no-repeat py-8 lg:min-h-[760px] lg:bg-contain lg:py-0">
          <div className="z-30 flex w-full flex-col items-center justify-center rounded-xl bg-white px-4 py-8 text-center shadow-lg sm:w-2/3 lg:min-h-[375px] lg:w-[390px] lg:px-9 lg:py-14">
            <h1 className="text-h-purple-800 mb-5 text-2xl font-semibold lg:mb-9 lg:text-4xl">
              Let's sign in
            </h1>

            <form
              onSubmit={handleSubmit}
              action="https://reservations.hotelaat.com/reseller/auth/"
              method="post"
              className="flex w-full flex-col gap-4"
              id="login-form"
            >
              {/* Other fields */}
              {loginFormFields.map((field) => (
                <div key={field.id} className="w-full">
                  <label
                    htmlFor={field.id}
                    className="mb-2.5 block text-left text-sm font-medium text-gray-950"
                  >
                    {field.placeHolder}
                  </label>
                  <Input
                    id={field.id}
                    name={field.name}
                    type={field.type}
                    value={formData[field.name as keyof typeof formData]}
                    onChange={handleChange}
                    placeholder={`Insert your ${field.placeHolder}`}
                    className="focus-visible:ring-h-purple-300 min-h-6 w-full border-gray-200 px-5 py-4 text-sm shadow-sm placeholder:text-gray-400 lg:text-base"
                    required
                  />
                </div>
              ))}

              {/* Password Field with Eye Toggle */}
              <div className="relative w-full">
                <label
                  htmlFor="password"
                  className="mb-2.5 block text-left text-sm font-medium text-gray-950"
                >
                  Password
                </label>
                <Input
                  id="password"
                  name="password"
                  type={passwordVisible ? "text" : "password"}
                  value={formData.password}
                  onChange={handleChange}
                  placeholder="Insert your Password"
                  className="focus-visible:ring-h-purple-300 min-h-6 w-full border-gray-200 px-5 py-4 pr-12 text-sm shadow-sm placeholder:text-gray-400 lg:text-base"
                  required
                />
                <button
                  type="button"
                  onClick={() => setPasswordVisible((prev) => !prev)}
                  className="hover:text-h-purple-800 absolute top-[38px] right-4 text-gray-500"
                >
                  {passwordVisible ? <EyeOff size={20} /> : <Eye size={20} />}
                </button>
              </div>

              {/* Remember Me */}
              <div className="flex items-center gap-2 text-left text-sm text-gray-600">
                <Checkbox
                  id="rememberMe"
                  checked={rememberMe}
                  onCheckedChange={(val) => setRememberMe(!!val)}
                  className="data-[state=checked]:bg-h-purple-800 border-gray-300 data-[state=checked]:text-white"
                />
                <label htmlFor="rememberMe">Remember me</label>
              </div>
              {/* Honeypot */}
              <input
                type="text"
                name="company"
                id="company"
                autoComplete="off"
                tabIndex={-1}
                className="hidden"
              />

              <HotelaatBtn
                type="submit"
                id="login-btn"
                name="action"
                value="login"
                variant="fill"
                className="mt-3 cursor-pointer shadow-lg shadow-[rgba(99,_51,_166,_0.14)]"
              >
                Login
              </HotelaatBtn>
            </form>

            {/* Forgot Link */}
            <div className="mt-4 self-start text-left text-sm">
              <p className="text-gray-400">
                Forgot your account?{" "}
                <Link
                  href="#"
                  className="text-h-purple-800 hover:text-h-purple-900 font-semibold transition"
                >
                  Reset here
                </Link>
              </p>
            </div>
          </div>

          {/* Decorative Images */}
          {[
            {
              src: "/assets/login/person-img.png",
              alt: "Person",
              width: 238,
              height: 633,
              className: "right-[22%] z-40",
            },
            {
              src: "/assets/login/plant-img.png",
              alt: "Plant",
              width: 148,
              height: 256,
              className: "left-[28%]",
            },
          ].map((img) => (
            <div
              key={img.alt}
              className={`pointer-events-none absolute bottom-7 hidden lg:block ${img.className}`}
            >
              <Image
                src={img.src}
                alt={img.alt}
                width={img.width}
                height={img.height}
                className="object-contain select-none"
              />
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
