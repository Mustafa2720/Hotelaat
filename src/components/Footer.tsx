"use client";

import Image from "next/image";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import { HotelaatBtn } from "@/components/utils/HotelaatBtn";
import * as motion from "motion/react-client";

const footerLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Contact us", href: "/contact" },
];

const policyLinks = [
  { label: "Privacy Policy", href: "#" },
  { label: "Terms & Conditions", href: "#" },
];

export default function Footer() {
  const showInvalidEmailError = false; //🔧 Replace with actual state management
  return (
    <footer className="relative overflow-hidden pt-24">
      {/* Newsletter Section */}
      <div className="z-0 mx-auto flex max-w-[1440px] flex-col items-center justify-between gap-10 px-4 lg:flex-row lg:px-8">
        {/* <div className="w-full lg:w-1/2">
          <Image
            src="/assets/footer-img.png"
            alt="Newsletter illustration"
            width={382}
            height={354}
            className="mx-auto object-contain lg:mx-0"
          />
        </div> */}
        <motion.div
          initial="offscreen"
          whileInView="onscreen"
          variants={{
            offscreen: { y: 300, rotate: -20 },
            onscreen: { y: 0, rotate: 0 },
          }}
          transition={{
            duration: 0.5,
            type: "spring",
            bounce: 0.2,
          }}
          viewport={{ amount: 0.4 }}
          className="-z-1"
        >
          <Image
            src="/assets/footer-img.png"
            alt="Newsletter illustration"
            width={382}
            height={354}
            className="mx-auto object-contain lg:mx-0"
          />
        </motion.div>

        <div className="w-full space-y-1 text-center lg:w-1/2 lg:text-left">
          <h3 className="text-h-purple-800 text-2xl font-semibold lg:text-3xl">
            Subscribe to our Newsletter
          </h3>
          <p className="text-base text-gray-500 lg:text-xl">
            Receive our latest tips and news
          </p>

          <form
            onSubmit={(e) => {
              e.preventDefault();
              // TODO: Connect to newsletter service (e.g. Mailchimp, ConvertKit)
            }}
            className="mt-7 flex flex-col items-center gap-3 lg:flex-row lg:justify-start"
          >
            <Input
              type="email"
              placeholder="you@company.com"
              className="focus-visible:ring-h-purple-300 min-h-4 w-full border-gray-200 px-5 py-4 text-sm shadow-sm placeholder:text-gray-400 sm:w-auto md:min-w-[278px] lg:text-base"
              required
            />

            <HotelaatBtn
              variant="fill"
              className="w-full sm:w-auto"
              type="submit"
            >
              Subscribe
            </HotelaatBtn>
          </form>
          {showInvalidEmailError && (
            <div className="mx-2 mt-2 text-xs font-medium text-red-500 uppercase">
              <span>Invalid email</span>
            </div>
          )}
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="bg-h-purple-800 z-20 mt-8 py-8 text-white lg:mt-0 lg:py-16">
        <div className="border-b-h-purple-400 mx-auto flex max-w-[1440px] flex-col items-center justify-between gap-6 border-b-1 px-4 pb-4 lg:flex-row lg:pb-6">
          {/* Left */}
          <div className="flex w-full flex-col items-center lg:items-start">
            <Link href="/">
              <img
                src="/assets/hotelaat-light-logo.svg"
                alt="logo"
                className="w-40 lg:w-30"
              />
            </Link>
          </div>

          <div className="mt-6 flex w-full flex-row flex-wrap justify-center gap-8 text-sm lg:mt-0 lg:justify-between lg:text-base">
            {/* Center Links */}
            <div className="flex gap-8">
              {footerLinks.map(({ label, href }) => (
                <Link
                  key={href}
                  href={href}
                  className="hover:text-h-orange-500 transition"
                >
                  {label}
                </Link>
              ))}
            </div>

            {/* Social Icon */}
            <Link
              href="https://linkedin.com"
              target="_blank"
              className="transition hover:brightness-80"
              aria-label="LinkedIn"
            >
              <Image
                src="/assets/linkedin-icon.svg"
                alt="LinkedIn"
                width={24}
                height={24}
              />
            </Link>
          </div>
        </div>

        {/* Bottom Copyright and Links */}
        <div className="mx-auto flex max-w-[1440px] flex-col items-center justify-between gap-6 px-4 pt-4 lg:flex-row lg:pt-6">
          <p className="text-h-purple-100 text-sm lg:text-base">
            © Professional Gate Tourism L.L.C, UAE. All Rights Reserved.
          </p>
          <div className="text-h-purple-100 flex gap-8 text-sm lg:text-base">
            {policyLinks.map(({ label, href }) => (
              <Link
                key={label}
                href={href}
                className="transition hover:brightness-200"
              >
                {label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
