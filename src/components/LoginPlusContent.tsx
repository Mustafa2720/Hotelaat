"use client";

import { Input } from "@/components/ui/input";
import { HotelaatBtn } from "@/components/utils/HotelaatBtn";
import Image from "next/image";
import Link from "next/link";

export default function LoginPlusPage() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };

  return (
    <main className="relative min-h-dvh overflow-hidden bg-white py-32">
      {/* Background Shapes */}
      <div className="bg-h-purple-100 absolute -right-[12vw] hidden h-[139.44374209860936vh] w-[58.523725834797894vw] -rotate-[154deg] rounded-full blur-3xl lg:block"></div>

      <div className="bg-h-purple-100 absolute -top-[8vw] -left-[20vw] hidden h-[80.62149178255373vh] w-[43.80374926772115vw] rotate-[154deg] rounded-full blur-3xl lg:block"></div>

      {/* Main Section */}
      <section className="mx-auto max-w-[1440px] px-2 py-4 sm:px-6 sm:py-6">
        <div className="relative z-10 flex min-w-full flex-col items-center justify-center bg-[url(/assets/login/bg-img.png)] bg-cover bg-center bg-no-repeat py-8 lg:min-h-[760px] lg:min-w-[972px] lg:bg-contain lg:py-0">
          {/* Login Form */}
          <div className="z-30 flex min-w-full flex-col items-center justify-center rounded-xl bg-white px-4 py-8 text-center shadow-lg sm:min-w-2/3 lg:min-h-[375px] lg:min-w-[390px] lg:px-9 lg:py-14">
            <h1 className="text-h-purple-800 mb-5 text-2xl font-semibold lg:mb-9 lg:text-4xl">
              Let's sign in
            </h1>

            <form
              onSubmit={handleSubmit}
              className="flex w-full flex-col gap-4"
              id="login-plus-form"
            >
              {/* Input Fields */}
              {["email", "password"].map((field) => (
                <div key={field} className="w-full">
                  <label
                    htmlFor={field}
                    className="mb-2.5 block text-left text-sm font-medium text-gray-950"
                  >
                    {field === "email" ? "Email Address" : "Password"}
                  </label>
                  <Input
                    id={field}
                    name={field}
                    type={field}
                    placeholder={`Insert your ${field}`}
                    className="focus-visible:ring-h-purple-300 min-h-6 w-full border-gray-200 px-5 py-4 text-sm shadow-sm placeholder:text-gray-400 lg:text-base"
                    required
                  />
                </div>
              ))}

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
                variant="fill"
                className="mt-5 cursor-pointer shadow-lg shadow-[rgba(99,_51,_166,_0.14)]"
              >
                Login
              </HotelaatBtn>
            </form>

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
          ].map((image) => (
            <div
              key={image.alt}
              className={`pointer-events-none absolute bottom-7 z-${image.alt === "Person" ? "40" : "10"} hidden lg:block ${image.className}`}
            >
              <Image
                src={image.src}
                alt={image.alt}
                width={image.width}
                height={image.height}
                className="pointer-events-none object-contain select-none"
              />
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
